<template>

    <v-content>

      <div v-if="!post" class="text-xs-center">
        <v-icon color="white">fas fa-circle-notch fa-spin</v-icon>
      </div>

      <div class="text-xs-center" v-if="post">
        <template v-if="post.user.profile.avatar ">
        <v-avatar
          size="55"
          class="#005f5b">
          <img
          @click="ShowProfile(post.user.profile.display_name)"
          :src="`/storage/avatars/${post.user.profile.avatar}`"
          :alt="post.user.name">
        </v-avatar>
      </template>
      <template v-else>
        <v-avatar color="#282e33">
             <span class="white--text" @click="ShowProfile(liker.profile.display_name)">{{post.user.name.charAt(0).toUpperCase()}}</span>
           </v-avatar>
      </template>
        <div class="post-publisher mt-3 italic" @click="ShowProfile(post.user.profile.display_name)">
            <h3 style="cursor:default" class="white--text">

              <span style="position: relative;top: -2px;" v-if="post.user.profile.is_verified == 0">
                <v-tooltip left color="success">

                <b slot="activator">
      <v-icon size="medium" color="success">check_circle</v-icon>
              </b>
              <b class="white--text">verified user</b>
            </v-tooltip>

            </span>
               <b>{{post.user.profile.display_name}}</b>
            </h3>
        </div>

        <div class="post-content"  style="cursor:pointer">

          <router-link :to="{ name: 'post', params: {postId:post.id} }" tag="p" class="white--text display-1">
              <b>

                <p color="white--text" style="white-space:pre-line">
                      {{ post.post  }}
                        </p>
              </b>
            </router-link>
        </div>
        <v-flex xs12>

        <div  class="hidden-xs-only post-img text-xs-center" v-if="post.image">
          <img
          width="320"
          :src="`/storage/posts_images/${post.image}`"
 alt="post photo">
        </div>

        <div  class="hidden-sm-and-up post-img text-xs-center" v-if="post.image">
          <img
          width="300"
          :src="`/storage/posts_images/${post.image}`"
 alt="post photo">
        </div>

      </v-flex>

        <div class="post-react" v-if="post.user.profile.user_id == currentUserProfile.user_id">

          <p class="text-center">

            <span data-toggle="modal" data-target="#dislikers" style="position:relative;font-size:20pt ;color:#FF004F;margin: auto 14px;cursor:pointer;top:3px" @click="showDisLikers(post.id)">
              <font-awesome-icon
              :icon= "['fas','thumbs-down']"  style="transform:scalex(-1)" />

            </span>

            <span data-toggle="modal" data-target="#likers"  @click="showLikers(post.id)" style="font-size:20pt ;color:#18DEFF;margin: auto 14px;cursor:pointer;">
              <font-awesome-icon :icon="['fas','thumbs-up']" /></span>

            </p>
          </div>

          <div class="post-react" v-if="post.user.profile.user_id != currentUserProfile.user_id">
            <React :post_id="post.id"/>
          </div>
          <div class="post-react-number">
            <p class="text-center">

              <span v-if="post.dislikes_counter" style="position:relative;font-size:10pt ;color:#fff;margin: auto 14px;cursor:pointer;">
                {{ post.dislikes_counter.count  }}
              </span>

              <span v-else style="position:relative;font-size:10pt ;color:#fff;margin: auto 14px;cursor:pointer;top:3px">
                0
              </span>


              <span v-if="post.likes_counter" style="font-size:10pt ;color:#fff;margin: auto 14px;cursor:pointer;">

                {{post.likes_counter.count }}

              </span>

              <span v-else style="font-size:10pt ;color:#fff;margin: auto 14px;cursor:pointer;">

                0
              </span>

            </p>

          </div>
          <div class="post-date">
            <p  class="white--text">

              <b>
                {{ post.created_at | getDateForHumans }}

              </b>

            </p>
          </div>
          <div class="post-topic">
            <p class="white--text" v-if="post.topic" style="opacity:.8">
              <b>  {{topics[post.topic.id - 1] ['topic'] }}</b>
            </p>
          </div>
          <hr>
        </div>

        <!-- likers -->
        <sweet-modal :title="$t('likers')" :enable-mobile-fullscreen="false" ref="likers"  width="320"  overlay-theme="dark" modal-theme="dark">

          <div style="overflow-y:scroll;height:300px" @scroll="loadMoreLikers">

            <v-list two-line dark>
              <template v-for="liker in postLikers">

                  <v-list-tile>

                <v-list-tile-avatar>
                  <template v-if="liker.profile.avatar">

                  <img
                  @click="ShowProfile(liker.profile.display_name)"
                  :src="`/storage/avatars/${liker.profile.avatar}`" :alt="liker.profile.display_name">
                </template>
                <template v-else>
                  <v-avatar color="#282e33" @click="ShowProfile(liker.profile.display_name)">
     <span class="white--text" >
       {{liker.profile.display_name.charAt(0).toUpperCase()}}
     </span>
   </v-avatar>
                </template>
                </v-list-tile-avatar>

                  <v-list-tile-content
                    @click="ShowProfile(liker.profile.display_name)">
                    <v-list-tile-title>
                          {{liker.name}}
                        </v-list-tile-title>
                        <v-list-tile-sub-title>
                          {{liker.profile.display_name}}
                        </v-list-tile-sub-title>
                  </v-list-tile-content>

                </v-list-tile>
                <v-divider></v-divider>

              </template>
            </v-list>

          </div>
        </sweet-modal>

        <!-- dislikers -->
        <sweet-modal :enable-mobile-fullscreen="false" :title="$t('dislikers')" ref="dislikers" width="320" overlay-theme="dark" modal-theme="dark">

          <div style="overflow-y:scroll;height:300px" @scroll="loadMoreDisLikers">
            <v-list two-line dark>
              <template v-for="disliker in postDislikers">

                  <v-list-tile>

                <v-list-tile-avatar>
                  <template v-if="disliker.profile.avatar ">

                    <img
                    @click="ShowProfile(disliker.profile.display_name)"
                    :src="`/storage/avatars/${disliker.profile.avatar}`" :alt="disliker.profile.display_name">
                  </template>


                  <template v-else>
                    <v-avatar color="#282e33" @click="ShowProfile(disliker.profile.display_name)">
                  <span class="white--text">
                  {{disliker.profile.display_name.charAt(0).toUpperCase()}}
                  </span>
                  </v-avatar>
                  </template>

                  </v-list-tile-avatar>

                  <v-list-tile-content>
                    <v-list-tile-title   @click="ShowProfile(disliker.profile.display_name)">
                          {{disliker.name}}
                        </v-list-tile-title>
                        <v-list-tile-sub-title>
                          {{disliker.profile.display_name}}
                        </v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>

              </template>
            </v-list>


          </div>
        </sweet-modal>
    </v-content>

</template>

<script>
import { SweetModal, SweetModalTab } from 'sweet-modal-vue'
import axios from 'axios';
var moment = require('moment');
import React from './React.vue';
import Vue from 'vue';
export default {
  data(){
    return {
        publisher:null,
    }
  },
  components:{
      React,
      SweetModal,
      SweetModalTab

  },
  computed:{
    post(){
      return this.$store.getters.post;

    },
    likesNum(){
      return this.$store.getters.likesNum;

    },
    dislikesNum(){
      return this.$store.getters.dislikesNum;

    },
    postLikers(){
      return this.$store.getters.postLikers;
    },
    postDislikers(){
      return this.$store.getters.postDislikers;
    },
    likedPosts(){
      return this.$store.getters.likedPosts;

  },
    disLikedPosts(){
    return this.$store.getters.disLikedPosts;
    },
    topics(){
      return this.$t('topics');
    },

    currentUserProfile(){
      return this.$store.getters.currentUserProfile;
    }
  },
  watch:{
    '$route'(to,from){
      this.$router.push({name:"post",params:{postId:to.params.postId}})
      this.goToAnotherPost();
    }
  },
  beforeRouteLeave (to, from, next) {
      this.$store.commit('showBottomNav');
      next()
  },
  created(){
    console.log('show posts loaded');
    const self = this;
    this.$store.dispatch('reactedPosts');
    this.$store.dispatch('showSinglePost',this.$route.params.postId)
    .then((response)=>{

    })
    .catch((errors)=>{
      this.$router.push('/');
    })
  },
  methods:{
    ShowProfile(displayName){
      this.$router.push(`/${displayName}`);
    },

     goToAnotherPost(){

           this.likersOffset = 0 ;
           this.dislikerOffset = 0;
           this.$store.dispatch('showSinglePost',this.$route.params.postId)
           .then((response)=>{
             console.log('ok ok');
           })
           .catch((errors)=>{
             this.$router.push('/');
           })
;
     },
     showLikers(id){
       this.$refs.likers.open();
       this.$store.dispatch('showLikers',{postId:id});

     },
     loadMoreLikers(e){


           let elHeight = e.target.clientHeight;

           let elscrollHeight = e.target.scrollHeight;

           let elScrollTop = e.target.scrollTop;

           if ((elHeight+elScrollTop) - elscrollHeight == 0) {

             console.log('end of likers');
             this.$store.dispatch('loadMoreLikers',{postId:this.$route.params.postId});

                       }
     },

     showDisLikers(id){
       this.$refs.dislikers.open();
       this.$store.dispatch('showDisLikers',{postId:id})
        },

     loadMoreDisLikers(e){



           let elHeight = e.target.clientHeight;

           let elscrollHeight = e.target.scrollHeight;

           let elScrollTop = e.target.scrollTop;

           if ((elHeight+elScrollTop) - elscrollHeight == 0) {

                     console.log('end of dislikers');

             this.$store.dispatch('loadMoreDisLikers',{postId:this.$route.params.postId});

                        }
     },

  },
  filters:{
        getDateForHumans(value){

          return moment(value).locale(Vue.i18n.locale()).subtract(-2, 'hours').fromNow();
        }
  },

}
</script>

<style scoped>
.likers, .dislikers {
	position: relative;
	padding: 20px;
	height: 155px;
	overflow: scroll;
}
.likers a{
    text-decoration: none;

}
</style>
