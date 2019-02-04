export default{

        showProfile(context,displayName,rootState){

      return   new Promise(function(resolve, reject) {

          axios.get(`/api/user/${displayName}`,{
            headers:{
              "Authorization" :`Bearer ${context.rootState.authentication.userToken}`
            }
          })
          .then((response)=>{

              context.commit('showProfile',

              {
                profile:response.data.profile,
                followers:response.data.followers,
                following:response.data.following,
                isFollow:response.data.is_follow,
                posts:response.data.posts,

              });
              resolve();

          })
          .catch((errors)=>{
              reject();
              console.log(errors);
              console.log(errors.response);

          })
          });
      },

      showFans(context,someData,rootState){
        axios.post('/api/timeline/my-fans',{},{
          headers:{
            Authorization:`Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then((response)=>{
        context.commit('fillMyFollowersProfiles',response.data.followers);
        context.commit('fillMyFollowingProfiles',response.data.following);
        })
        .catch((error)=>{
          console.log(error);
          console.log(error.response);
        })
      },

      loadMoreProfilePosts(context,commit,rootState){

        axios.post('/api/user-posts',{
            offset:commit.offset,
            user_id:commit.userId,
        },{
          headers:{
            Authorization:`Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then((response)=>{
            console.log(response.data.posts);
          context.commit('loadMoreProfilePosts',response.data.posts)
        })
        .catch((error)=>{
            console.log(error);
            console.log(error.response);
        })
      },

      deletePost(context,commit,rootState){

        axios.post('/api/post/delete-post',{
          post_id:commit.id,
        },{
          headers:{
            Authorization:`Bearer ${localStorage.getItem('access_token')}`
          }
        })
        .then((response)=>{
          console.log(response.data);
          context.commit('deletePost',commit.index)
        })
        .catch((error)=>{
          console.log(error);
          console.log(error.response);
        })

      },

}
