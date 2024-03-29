import Vue from 'vue';
export default{

    //open timeline compoenent
    fillMyTimeline(state,payload){
      let uniquePosts = Vue._.uniq(payload.posts);
      let shufflePosts = Vue._.shuffle(uniquePosts);
      state.posts = shufflePosts;
      state.offset = 27;
      },

    //open time....
    truncateTimeline(state){
      state.posts = [];
      state.offset = 27;

    },

    loadMore(state,payload){



      if(payload.posts.length > 0){


        let uniquePayload =  Vue._.uniq(payload.posts);
        let shufflePosts = Vue._.shuffle(uniquePayload);
        shufflePosts.map((value)=>{
            state.posts.push(value);
        });

        state.loadedTimelinePosts = state.posts.length;

        state.offset += 27;
      }

        console.log('offffffffffff');
        console.log(state.offset);

    },

    isLoadingMoreTimeline(state){
      state.isLoadingMoreTimeline = !state.isLoadingMoreTimeline;
    },

      updatePost(state,payload){
        let timelineposts = state.posts;
        let postIndexInTimeline = timelineposts.findIndex((val)=>{
              return val.id == payload.id
        })
        console.log(postIndexInTimeline);
        if (postIndexInTimeline != -1) {
          setTimeout(function(){
            Vue.set(state.posts, postIndexInTimeline, payload.updatedPost);
          },500)
        }
      },

      NoMore(state){
        state.NoMore = true;
      },

      logoutTimeline(state){
                state.posts=[];
                state.postsNum=0;
                state.isLoadingMoreTimeline=false;
                state.loadedTimelinePosts=0;
                state.offset=27;
                state.NoMore=false;
      },

      removeFromTimeline(state,payload){

          let index = state.posts.findIndex((val,index)=>{
              return payload.id == val.id;
          });
          Vue.delete(state.posts,index);

      },
      resetOffset(state){
        state.offset=state.postsNum;
      }

}
