export default{

    showProfile(state){
      return state.currentProfile;
    },

    profileFollowers(state){
        return  state.profileFollowers;
    },
    profilePosts(state){
      return state.profilePosts;
    },
    followingNum(state){
      return  state.followingNum;
    },
    followersNum(state){
      return state.followersNum;
    },
}
