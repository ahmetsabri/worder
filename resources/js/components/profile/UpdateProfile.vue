<template>
  <v-container class="grid-list-xs" v-if="isLoggedIn">
    <v-layout row wrap>
    <v-flex md6 xs12>
      <v-form   @submit.prevent="updateProfile">
          <div  id="file-container" color="#e1f7e6" class="text-xs-center" style="height:200px !important;" >
            <v-icon class="mt-5" color="black" size="70px">
              add_a_photo
            </v-icon>
          <input id="file" type="file" @change="handleFile" style="opacity:0">
        </div>

      <div class="form-group">
        <v-text-field
          v-model="name"
          :placeholder="$t('name')"
          solo
        ></v-text-field>
        <div v-if="errors">

        <p class="error--text" v-if="errors.name"><b>{{errors.name[0]}}</b> </p>
</div>
      </div>

      <div class="form-group">
        <v-text-field
            v-model="displayName"
            solo
            :placeholder="$t('displayname')"
        ></v-text-field>

        <div v-if="errors">

        <p class="error" v-if="errors.display_name"><b>{{errors.display_name[0]}}</b> </p>
      </div>
      </div>

      <div class="form-group">
        <label for="country" class="white--text">{{$t('country')}}</label>
        <v-select

                 :items="countries"
                 :label="countries[selectedCountry-1]"
                  v-model="selectedCountry"
                  :hint="countries[selectedCountry]"
                  solo
                 >
                 </v-select>
          <div v-if="errors">
            <p><b class="error--text" v-if="errors.country_id">{{$t('countryerror')}}</b></p>
            <p class="error" v-if="errors.country_id"><b>{{$t('countryerror')}}</b> </p>
          </div>
      </div>


      <div class="form-group">
        <v-dialog
ref="dialog"
v-model="modal"
:return-value.sync="bdate"
persistent
lazy
full-width
width="290px"
>


<!-- BIRTHDAY  -->
<v-text-field
  slot="activator"
  v-model="bdate"
  :label="$t('birthday')"
  :reactive="true"
  prepend-inner-icon="date_range"
  class="white--text"
  solo
></v-text-field>
<v-date-picker :reactive="true" locale="ar" v-model="bdate" scrollable>
  <v-spacer></v-spacer>
  <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
  <v-btn flat color="primary" @click="$refs.dialog.save(bdate)">OK</v-btn>
</v-date-picker>
</v-dialog>

        <div v-if="errors">
        <p class="error" v-if="errors.birth_date"><b>{{errors.birth_date[0]}}</b> </p>
      </div>
      </div>

      <v-radio-group v-model="selectedGender" class="white--text">
          <div slot="label" style="color:#f7dde3">
            <h3>{{$t('gender')}}</h3>
          </div>

        <template v-for="(gender,index) in gender">
             <v-radio
               color="#f7dde3"
              :value="index+1">
              <div slot="label" style="color:#f7dde3">
                {{gender}}
              </div>
             </v-radio>
           </template>
    </v-radio-group>
                <div v-if="errors">

                <p><b class="error" v-if="errors.gender_id">{{$t('gendererror')}}</b></p>
              </div>
                </div>
        <label class="white--text text-center">{{$t('selectfavtopics')}}</label>
        <v-select
          :items="topics"
            item-text="topic"
            item-value="id"
          v-model="selectedTopics"
          :label="$t('selectfavtopics')"
           multiple
           chips
           solo
        ></v-select>
      <div v-if="errors">

      <p class="error" v-if="errors.topics"><b>{{$t('selectfavtopics')}}</b> </p>
</div>

      <div class="form-group">
        <label class="white--text">{{$t('description')}}</label>
        <v-textarea
        no-resize
             :label="$t('description')"
               solo
               v-model="description"

             ></v-textarea>
             <b class="white--text">{{writtenDescription}}/25 {{$t('words')}}</b>
          <p class="error" v-if="!checkDescription"><b>{{$t('descriptionerror')}}</b> </p>
            <div v-if="errors">
              <p class="error" v-if="errors.description"><b>{{errors.description[0]}}</b> </p>

            </div>

      </div>

      <div class="text-xs-center">
          <v-btn round medium type="submit" class="success white--text">
              {{$t('save')}}
          </v-btn>
          <v-btn round medium type="button" class="error white--text" @click="cancel">
              {{$t('cancel')}}
          </v-btn>
      </div>

    </v-form>
  </v-flex>

  <v-flex md4 hidden-xs-only offset-md2 >
    <v-card dark class="mt-5" max-width="320" min-height="600" >


    <template v-if="avatar != 'null' ">
      <v-img
      :src="hasProfileAvatar"
      height="225"
    ></v-img>
    <div class="text-xs-center">
      <v-tooltip right>
    <v-btn small slot="activator" color="error" icon @click="removeSelectedAvatar">
        <v-icon>
          close
        </v-icon>
    </v-btn>
    <b>{{$t('remove')}}</b>
  </v-tooltip>
  </div>
  </template>
  <template v-else>
    <div
      class="display-3 text-xs-center avatar-letter"
      height="200">
      <h1>
        {{name.charAt(0).toUpperCase()}}
      </h1>
    </div>
  </template>

    <div class="text-sm-center">
      <h1 class="white--text blue-grey darken-2 text-capitalize">{{name}}</h1>
      <h2 class="yellow--text mt-2">{{displayName}}</h2>
        <bdi>
          <h3>
          <b>{{$t('from')}} : </b>
        {{selectedCountry}}</h3>
</bdi>
    </div>

    <div class="text-sm-center mt-3" v-if="selectedTopics.length > 0">
      <h3 class="mt-2">{{$t('favtopics')}}</h3>
      <template v-for="topic in selectedTopics">
      <v-btn  small round color="success">
        <b>        {{topics[topic-1].topic}}
</b>
      </v-btn>
    </template>

   </div>
   <div class="text-sm-center mt-3" style="  overflow:hidden;text-overflow: ellipsis;">
     <bdi>
       <h3 style="white-space: pre-line;"><b>{{$t('about')}} : </b> {{description}}</h3>
 </bdi>

   </div>
    </v-card>
  </v-flex>

</v-layout>

</v-container>
</template>

<script>
export default {
  mounted(){
    console.log('update profile loaded');
      this.fillUserData();
  },
  data(){
  return {
    modal:false,
    name:'',
    displayName:'',
    avatar:`${this.$store.state.authentication.currentUserProfile.avatar}`,
    avatarState : 'same',
    gender:[this.$t('male'),this.$t('female')],
    topics:this.$t('topics'),
    countries:this.$store.state.countries,
    selectedGender:null,
    selectedCountry:null,
    selectedTopics:[],
    bdate:null,
    description:'',
    writtenDescription:'',
    errors:null
  }
  },


  computed:{
    username(){
        return   this.$store.getters.currentUser.name;
        },

        isLoggedIn(){
          return this.$store.getters.isLoggedIn;
        },
    currentUser(){
      return this.$store.getters.currentUser;
    },
    currentUserProfile(){
      return this.$store.getters.currentUserProfile;

    },
    hasProfileAvatar(){
        console.log(this.avatar.includes('data:image'));
       if (this.avatar) {
         if (this.avatar.includes('data:image')) {
           return this.avatar;
         }
         else{
          return '/storage/avatars/'+this.avatar;
        }
      }
      else{
        return null;
      }

    },
    currentUserTopics(){

      return this.$store.getters.currentUserTopics.map((val)=>{
            return val.pivot.topic_id;
      });
    },
    checkDescription(){
        if (this.description != null) {

      this.writtenDescription = this.description.split(' ').length;

      if (this.description.split(' ').length > 25) {
      return false;
      }
      if (this.description.length === 0) {
        this.writtenDescription = 0;
        return true;
      }
      else{
          return true;
      }
    }

  },

      userCountry(){
         if ( this.$store.getters.countries.indexOf(this.selectedCountry) != -1) {
          return this.$store.getters.countries.indexOf(this.selectedCountry) + 1;
         }
      },
  },

  methods:{
    removeSelectedAvatar(){
      this.avatar ='null';
      this.avatarState = null;
    },

    cancel(){
        this.$router.push('/');
    },
    fillUserData(){
      let topics = this.$store.state.authentication.currentUserTopics;
        const topics_id = topics.map((val)=>{
          return val.pivot.topic_id;
        });

        const currentUser = this.$store.state.authentication.currentUser;
        const currentUserProfile = this.$store.state.authentication.currentUserProfile;
        this.selectedTopics = topics_id;
        this.selectedGender = currentUserProfile.gender_id;
        this.selectedCountry = this.countries[currentUserProfile.country_id-1];
        this.description = currentUserProfile.description;
        this.name = currentUser.name;
        this.displayName =  currentUserProfile.display_name;
        this.bdate = currentUserProfile.birth_date;

        console.log(this.selectedCountry);
    },

    removeAvatar(){
        this.avatar ='null';
        this.avatarState = null;
        console.log(this.avatar);
    },

    handleFile(e){
        var fr  = new FileReader();

        fr.readAsDataURL(e.target.files[0]);

        const imgs = ['image/jpeg','image/png','image/jpg'];

        let imgType = e.target.files[0].type;

        if (imgs.indexOf(imgType) == -1) {
            swal({
              "title":this.$t('oops'),
              "text":this.$t('avatarerror'),
              "icon":"error"
            });
        this.avatar ='null';
        }
        else{
          fr.onload = (e) => {

                this.avatar = e.target.result;
                this.avatarState = 'changed';
          }

        }
      console.log("****************** file data **********************");
      console.log(e.target.files[0].name);
      console.log(e.target.files[0].type);
      console.log(e.target.files[0].size);


    },
    updateProfile(){
      console.log(`Bearer ${this.$store.state.authentication.userToken}`);
      axios.post('/api/update-profile',{
        "avatar":this.avatar,
        "name":this.name,
        "display_name":this.displayName,
        "gender_id":this.selectedGender,
        "country_id":this.userCountry,
        "birth_date":this.bdate,
        "description":this.description,
        "topics":this.selectedTopics,
        "avatar_state":this.avatarState
      },{
        headers:{
          "Authorization":`Bearer ${this.$store.state.authentication.userToken}`
        },
      }).then((response)=>{

        console.log(response);
        // localStorage.setItem('current_user',JSON.stringify(response.data.updated_user));
        // localStorage.setItem('current_user_profile',JSON.stringify(response.data.updated_profile));
        // localStorage.setItem('current_user_topics',JSON.stringify(response.data.updated_topics));
         this.$store.commit('updateProfile',{currentUserProfile:response.data.updated_profile,
                                            currentUser:response.data.updated_user,
                                            currentUserTopics:response.data.updated_topics});
        swal({
          title:this.$t('done'),
          text:this.$t('profileupdated'),
          icon:"success"
        })
      }).catch((errors)=>{
        console.log(errors.response);
        swal({
          title:this.$t('error'),
          text:this.$t('profileupdatefailed'),
          icon:"error"
        })
        this.errors = errors.response.data.errors;
      })
    }
  }
}
</script>

<style scoped>
.create{
  border-right: 1px solid #ddd
}
textarea{
  resize: none;
}
#file-picker{
    border: 2px solid #f90;
    width:100px;
    height: 100px;
    border-radius: 20px;

  }
#file-picker > input{
  opacity: 0 !important;
  width: 0
}


.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 320px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.title {
  color: grey;
  font-size: 18px;
}



a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

button:hover, a:hover {
  opacity: 0.7;
}
#file{
	opacity: 0;
	position: absolute;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
}
#file-container {
  width:200px;
  margin: 17px auto;
	height: 200px !important;
	position: relative;
  background-color:#ddd;

  }
  .avatar-letter{
    height:200px;
    background-color:#282e33
  }
  .avatar-letter h1{
    padding: 10px;
  }

</style>
