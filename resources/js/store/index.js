import Vue from 'vue';
import axios from 'axios';
import state from './state';
import getters from './getters';
import actions from './actions';
import mutations from './mutations';
import authentication from './modules/authentication';
import notifications from './modules/notifications';
import timeline from './modules/timeline';
import posts from './modules/posts';
import suggest from './modules/suggest';
import profile from './modules/profile';
import topics from './modules/topics';
import trend from './modules/trend';
import following from './modules/following';

import createMutationsSharer from 'vuex-shared-mutations';

export default {

  modules:{
    authentication,
    timeline,
    posts,
    profile,
    following,
    trend,
    topics,
    notifications,
    suggest
  },

  state,

  getters,

  actions,

  mutations,

  plugins: [createMutationsSharer({
		predicate: [
    'signupSuccess',
    'loginSuccess',
    'verified',
    'addToLikedPosts',
    'addToDisLikedPosts',
    'fillDisLikedPosts',
    'fillLikedPosts',
    'updatePost',
    'noAction',
    'logout',
    'truncateProfile',
    'addToFollowing',
    'removeFromFollowing',
    'addToMyFollowing',
    'removeFromMyFollowing',
    'showProfile',
    'loadMoreProfilePosts',
    'isFollow']
 }),
]

}
