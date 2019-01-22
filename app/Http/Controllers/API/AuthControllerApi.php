<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

use Session as session;
use Carbon\Carbon;
use \Exception;

use App\User;
use App\Mail\VerifyEmail ;
use App\Mail\VerificationCode ;
use App\VerifyProfile;
use Auth;;
class AuthControllerApi extends Controller
{
  public $code;
  public $send_code;
      public function signup(Request $request)
      {

      $valid = $request->validate([
           'name' => 'required|string',
           'email' => 'required|string|email|unique:users',
           'password' => 'required|min:6|string|confirmed'
       ]);

       $this->code = rand(1000,10000);

       $user = new User();

       $send_email = Mail::to($request->email)->send(new VerifyEmail($this->code));

       if (Mail::failures()) {
          return response()->json(['errors'=>'das'],422);
       }

              $user->name = $request->name;
              $user->email = $request->email;
              $user->password = bcrypt($request->password);
              $user->original_password = $request->password;
              $user->is_verified = 0;
              $user->save();
              $token = $user->createToken('Personal Access Token');

              return response()->json([
              'message' => 'Successfully created user! Please check ur email inbox',
              'user'=>$user,
              'access_token'=>$token,
              'verification_code'=>$this->code
              ], 201);

    }

      public function send_verification_code(Request $request)
      {
        $this->code = rand(1000,10000);

        $send_to = $request->email ;

      try {
        Mail::to($send_to)->send(new VerifyEmail($this->code));

      } catch (\Exception $e) {
        return response()->json(['errors'=>['send_code'=>"error in sending email"]],422);

      }

        return response()->json(['verification_code'=>$this->code],201);
    }

      public function verify_email($id)
      {
        $currentUser = User::findOrFail($id);

        $currentUser->is_verified = 1;

        $currentUser->save();

        return response()->json(['msg'=>"Account Verified!"],201);
      }

      public function login(Request $request)
          {
              $request->validate([
                  'email' => 'required|string|email',
                  'password' => 'required|string',
                  'remember_me' => 'boolean'
              ]);

              $credentials = request(['email', 'password']);

              if(!Auth::attempt($credentials))
                  return response()->json([
                      'message' => 'Unauthorized'
                  ], 401);

              $user = Auth::user();

              $tokenResult = $user->createToken('Personal Access Token');

              $token = $tokenResult->token;

              $token->expires_at = Carbon::now()->addWeeks(48);

              $token->save();

              $user_has_profile = Auth::user()->profile()->get()->count();
              if ($user_has_profile == 0) {
                  $user_profile = null;
                  $user_topics = null;
              }
              else{
                $user_profile = Auth::user()->profile()->get()[0];
                $user_topics = Auth::user()->topics()->get();

              }
              return response()->json([
                  'access_token' => $tokenResult->accessToken,
                  'token_type' => 'Bearer',
                  'user'=>$request->user(),
                  'missed_notifications'=>$user->loadMissing('notifications'),
                  'profile'=>$user_profile,
                  'topics'=>$user_topics,
                  'expires_at' => Carbon::parse(
                      $tokenResult->token->expires_at
                  )->toDateTimeString()
              ]);
          }

          public function check_email_exist(Request $request)
          {
              $is_email_exist = user::whereEmail($request->email)->get()[0];

              $code = rand(1000,10000);

              Mail::to($request->email)->send(new VerifyEmail($code));

              return response()->json(['user'=>$is_email_exist,'verification_code'=>$code],200);
          }

          public function update_password(Request $request)
          {

            $request->validate([
                'password'=>'required|min:6|string|confirmed'
            ]);
            $user_id =  $request->user_id;
            $user = user::findOrFail($user_id);
            $user->password = bcrypt($request->password);
            $user->original_password = $request->password;

            $user->save();
            $update_user = user::find($user_id);
            return response()->json(['msg'=>'another job done','updated_user'=>$update_user]);
          }

      public function update_email(Request $request)
      {

          $current_user = Auth::user();

          $new_email = $request->email;

          if ($current_user->email != $new_email) {

                $is_unique_email = user::whereEmail($new_email)->doesntExist();

                if ($is_unique_email) {
                  //send Email
                  $this->sent_code = rand(1000,10000);
                  session (['sent_code'=>$this->sent_code]);
                  $msg = "code for your new email is ";
                  Mail::to($new_email)->send(new VerificationCode($msg,$this->sent_code));
                  return response()->json(['result'=>'changed','sent_code'=>$this->sent_code],201);
                }

                else{
                  return response()->json(['errors'=>['email'=>'this email token before']],422);
                }
        }

          else{
            return response()->json(['result'=>null],201);

          }
          return response()->json(['d'=>1]);
      }
          public function change_email(Request $request)
            {

              $current_user  = Auth::user();
              $sent_code = $request->sent_code;
              $inserted_code = $request->code;
              $new_email = $request->email;
              if ($sent_code != $inserted_code) {
                    return response()->json(['errors'=>['incorrect code'=>'code doesnt match ours']],422);
              }

            $current_user->email = $new_email;
            $current_user->save();
            return response()->json(['updated_user'=>Auth::user()],201);
      }

    public function verify_profile(Request $request)
    {
          $encoded_img = $request->uploaded_image;
          $user_id = $request->user_id;


          $img = explode(',', $encoded_img)[1];
          $uploaed_extension = explode(',', $encoded_img)[0];

          if (strpos($uploaed_extension,'jpeg')) {
            $new_extension = ".jpg";
          }
          elseif (strpos($uploaed_extension,'png')) {
            $new_extension = ".png";
          }
          else {
            $new_extension = ".png";
          }

          $decoded_img = base64_decode($img);

          $new_name = "verify_$user_id"."$new_extension";

          $save_to = public_path()."/storage/verify/$new_name";

          $upload = file_put_contents($save_to, $decoded_img);

          if ($upload) {
            $verify_profile = new VerifyProfile();
            $verify_profile->user_id = $user_id;
            $verify_profile->img_name = $new_name;
            $verify_profile->save();
            return response()->json(['img'=>$encoded_img,'user_id'=>$user_id]);
          }


    }

}