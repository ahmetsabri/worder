import axios from 'axios';
export default {
        createPost(context,post){


        return new Promise(function(resolve, reject) {
          axios.post("/api/post/create-post",post,
          {
            headers:{
              "Authorization": `Bearer  ${context.state.authentication.userToken}`,
            }
          }
          )
          .then((response)=>{
              console.log(response);
              return resolve();
          })
          .catch((errors)=>{
              console.log(errors);
              console.log(errors.response);
              return reject();

          })
        });
      },


        deletePost(context,post){

          axios.get(`/api/post/delete-post/${post.id}`,
          {
            headers:{
              Authorization:`Bearer ${context.state.authentication.userToken}`,
            },
          }).then((response)=>{
              console.log(response.data);
          }).catch((errors)=>{
              console.log(errors);
              console.log(errors.response);
          });
      },

        
        loadMore(context,data){

          axios.post(`/api/${data.url}`,{
              offset:data.offset,
              user_id:data.userId
          },{
            headers:{
              "Authorization":`Bearer ${context.state.authentication.userToken}`,
            }
          })
          .then((response)=>{
              console.log(response.data);

              //timeline posts
              if (data.url == 'timeline/load-more') {
                context.commit('loadMore',response.data.loaded_posts);

              context.commit('addToLikedPosts',response.data.liked_posts);
              context.commit('addToDisLikedPosts',response.data.disliked_posts);


              }

              //profile posts
              else {
                if (response.data.loaded_posts.length > 0 ) {
                  console.log(response.data.loaded_posts);
                  context.commit('loadMoreProfilePosts',response.data.loaded_posts);
                }
              }

          })
          .catch((errors)=>{
            console.log(errors);
            console.log(errors.response);
          })
      },

        getNotifications(context){

              axios.post('/api/timeline/notifications',{},{
                headers:{
                  "Authorization":`Bearer ${context.state.authentication.userToken}`
                }
              }).then((response)=>{

                  console.log(response.data);
                  context.commit('fillNotifications',response.data.all_notifications);
              }).catch((errors)=>{
                  console.log(errors);
                  console.log(errors.response);
              })

        },

        unreadNotifications(context){
          axios.post('/api/timeline/unread-notifications',{},{
            headers:{
              Authorization:`Bearer ${context.state.authentication.userToken}`
            },
          })
          .then((response)=>{

              if (response.data.unread) {
                  context.commit('unreadNotifications');
              }
          })
          .catch((errors)=>{
            console.log(errors);
            console.log(errors.response);
          })
        },

        suggestPeople(context){
      axios.get('/api/timeline/suggest-people',{
          headers:{

          "Authorization" :`Bearer ${context.state.authentication.userToken}`

          }
      })
      .then((response)=>{

        //console.log("sugg",response.data);
        let suggested = response.data.suggest_people;
        context.commit('suggestedPeople',suggested);

      })
      .catch((errors)=>{
        console.log(errors);
        console.log(errors.response);
      })
    },

        toggleFollow(context,payload){

          if (payload.action == 'follow') {
            context.commit('addToFollowing',{followed_id:payload.followed_id});
            context.commit('myFollowingIds',payload.followed_id);
          }
          else{
            context.commit('removeFromFollowing',payload.followed_id);
            context.commit('myFollowingIds',payload.followed_id);

          }
        axios.post('/api/timeline/follow',{
          followed_id:payload.followed_id
        },{

          headers:{
            "Authorization" : `Bearer ${context.state.authentication.userToken}`
          }
        })
        .then((response)=>{

          let action = response.data.action;
          if (action == 'follow') {

            context.commit('addToFollowing',{followed_id:payload.followed_id,
              followers:response.data.followers,
              following:response.data.following});
              context.commit('isFollow',true);
          }
          else{
            context.commit('removeFromFollowing',{followed_id:payload.followed_id,
              followers:response.data.followers,
              following:response.data.following});

            context.commit('isFollow',false);
          }
          console.log(action);
        })
        .catch((errors)=>{
          console.log(errors);
          console.log(errors.response);
        })
      },

        showProfile(context,displayName){

            axios.get(`/api/user/${displayName}`,{
              headers:{
                "Authorization" :`Bearer ${context.state.authentication.userToken}`
              }
            })
            .then((response)=>{
              console.log(response.data.followers);
              console.log(response.data.following);
                context.commit('showProfile',
                {profile:response.data.profile,
                posts:response.data.posts,
                followers:response.data.followers,
                following:response.data.following,
                following_id:response.data.following_id,
                isFollow:response.data.is_follow});


            })
            .catch((errors)=>{
                console.log(errors);
                console.log(errors.response);
            })
      },

        showFans(context){
          axios.post('/api/timeline/my-fans',{},{
            headers:{
              Authorization:`Bearer ${localStorage.getItem('access_token')}`
            }
          })
          .then((response)=>{
            console.log(50);
          context.commit('fillMyFollowers',response.data.followers);
          context.commit('fillMyFollowing',response.data.following);
          context.commit('myFollowingIds',response.data.following_ids);
          })
          .catch((error)=>{
            console.log(error);
            console.log(error.response);
          })
      }



  }
