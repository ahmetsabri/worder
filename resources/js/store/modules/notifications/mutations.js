import Vue from 'vue';
export default{
  fillNotifications(state,payload){
  state.notifications = payload;
  state.unreadNotifications = false;
  },
  unreadNotifications(state){
    state.unreadNotifications = true;
  },
  PushToNotificatiosn(state,payload){

        payload.map((val)=>{
            state.notifications.push(val);
        });
  },

  instantNotfication(state,payload){

    state.notifications.unshift(payload);
  }

}
