export default {

    createAdmin(context,data){
        return new Promise(function(resolve, reject) {
          axios.post('/api/admin/create-admin',{
            name:data.name,
            email:data.email,
            password:data.password,
            password_confirmation:data.passwordConfirmation,
            role:data.role
          },{
            headers:{
              Authorization:`Bearer ${context.rootState.authentication.userToken}`

            }
          })
          .then((response)=>{
            resolve(response);
            console.log(response);
          })
          .catch((error)=>{
            reject(error);
            console.log(error);
            console.log(error.response);
          })
        });
    },
  fetchAdmins(context,data){
    return  new Promise(function(resolve, reject) {
      axios.post('/api/admin/fetch-admins',{

      },{
        headers:{
          Authorization:`Bearer ${context.rootState.authentication.userToken}`
        }
      })
      .then((response)=>{
        console.log(response);
        context.commit('fillAdmins',{admins:response.data.admins})
      })
      .catch((error)=>{
        console.log(error);
        console.log(error.response);
      })

    });
  },
  editAdmin(context,data){
    alert(data.id)
    return new Promise(function(resolve, reject) {
      axios.post('/api/admin/edit-admin',{
        admin_id:data.id,
        name:data.name,
        email:data.email,
        password:data.password,
        password_confirmation:data.passwordConfirmation,
      },{
        headers:{
          Authorization:`Bearer ${context.rootState.authentication.userToken}`
        }
      })
      .then((response)=>{
        console.log(response);
        resolve(response);
      })
      .catch((error)=>{
        console.log(error);
        console.log(error.response);
        reject(error);
      })
    });
  },

  deleteAdmin(context,data){
    alert(data.id);
    return new Promise(function(resolve, reject) {
          axios.post('/api/admin/delete-admin',{
              admin_id:data.id,
          },{
            headers:{
              Authorization:`Bearer ${context.rootState.authentication.userToken}`

            }
          })
          .then((response)=>{
            console.log(response);
            resolve(response);
          })
          .catch((error)=>{
            console.log(error);
            console.log(error.response);
            reject(error);
          })
    });
  }

}
