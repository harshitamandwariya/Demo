import api from '../api/Post';

export const createUser =(values ,  callback) => { 
   const headers = {
                 'Content-Type': 'application/json',
                   }
                
   const response = api.post('/wp/v2/users/register',values,{headers:headers});
          response.then((res)=>{
          console.log(res,'action then xyz');
          callback(res);
      }) 
        response.catch((error)=>{
        console.log(error.response,'action error')
     })
        return{
        type: 'CREATE_USER',
        payload: response
    };
  }  



  export const loginUser =(values , callback) => { 
    const headers = {
                  'Content-Type': 'application/json',
                  }
                 
      console.log(values,'action');
                  
  const response = api.post('/jwt-auth/v1/token',values,{headers:headers});
  
  response.then((res)=>{
   console.log(response,'action then');
   callback(res);
  }) 
  response.catch((error)=>{
   console.log(error.response,'action error ');
  })
  
       return{
         type: 'LOGIN_USER',
         payload: response
     };
   }  


  export const postList =(callback) => {                               
  const response = api.get('/wp/v2/posts/');
  
  response.then((res)=>{
   console.log(response,'action then');
   callback(res);
   
  }) ;
  response.catch((error)=>{
   console.log(error.response,'action error ');
  })
  
       return{
         type: 'POST_LIST',
         payload: response
     };
   }  



   export const createPost =(values,callback) =>()=> { 
    const headers = {
                  'Content-Type': 'application/json',
                  'Authorization' : `Bearer ${localStorage.getItem("token")}`
                  }
                 
      console.log(values,'action');
                  
  const response = api.post('/wp/v2/posts/',values,{headers:headers});
  
  response.then((res)=>{
   console.log(response ,'action then post');
   callback(res);
  }) 

  response.catch((error)=>{
    callback(error.response);
  })
  
       return{
         type: 'CREATE_POST',
         payload: response
     };
   }  
 


   export const editPost =(id,values) => { 
    const headers = {
                  'Content-Type': 'application/json',
                  'Authorization' : `Bearer ${localStorage.getItem("token")}`
                  }
                 
      console.log(values,'action edit');
                  
  const response = api.put(`/wp/v2/posts/${id}`,values,{headers:headers});
  
  response.then((res)=>{
    return res;
  }) 
  response.catch((error)=>{
   console.log(error.response,'action error ');
  })
  
       return{
         type: 'EDIT_POST',
         payload: response
     };
   }  
 
 

   export const deletePost =(id,callback) =>()=> { 
    const headers = {
                  'Content-Type': 'application/json',
                  'Authorization' :`Bearer ${localStorage.getItem("token")}`
                  }
                                 
  const response = api.delete(`/wp/v2/posts/${id}`,{headers:headers});
  
  response.then((res)=>{
    callback(res);
  }) ;
  response.catch((error)=>{
   console.log(error.response,' dfdfd action error ');
  });
 }  
 
 