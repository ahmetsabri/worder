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

  instantNootfication(state,payload){

    state.notifications.push(payload);
    state.notifications = state.notifications.reverse();
  }

}