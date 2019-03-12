import React from 'react';
import {Field,reduxForm} from 'redux-form';
import {loginUser} from '../actions/index';
import { connect } from "react-redux";
import {Link} from 'react-router-dom';


class LoginForm extends React.Component {
   
    onSubmit=(formValue)=>{
      this.props.loginUser(formValue,(res)=>{
          if(res.status === 200){
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user_id", res.data.user_id);
            this.props.history.push('/PostList')  
          }else{
             
            alert("invalid user");
         }
         console.log(res)
      });
 }


 
    renderField = (formValue) => {
        return (
        <div>
            <input type={formValue.type}
            {...formValue.input} 
            className='form-control is-danger' 
            placeholder={formValue.placeholder} />
           <font color='red'>{formValue.meta.touched ? formValue.meta.error : ''}</font>
        </div>
        )
     }

    
    render(){    
    
        return(
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                     <h2> LoginForm </h2>
                <div>
                    <label>username</label>
                    <div>
                    <Field
                        name="username"
                        component={this.renderField}
                        type="Username"
                        placeholder="Username"
                    />
                    </div>
                </div>
                <div>
                    <label>password</label>
                    <div>
                    <Field
                        name="password"
                        component={this.renderField}
                        type="Password"
                        placeholder="Password"
                    />
                    </div>
                </div>
                <div>
                    <button onClick={this.onSubmit()}>Login</button>
                     <Link to="/SignUp"> Don't have an account?</Link>
               </div>
          </form>
        );
    }
}

const  validate = (formValue) => {
    const errors = {}
    if(!formValue.username) {
        errors.username='you must enter an UserName';
    }else if(formValue.username.length > 20){
        errors.username="you must enter less than 20 letters"
    }


    if(!formValue.password) {
        errors.password='you must enter PassWord';
    }
    return errors;
}


export default connect(null , {loginUser}) (reduxForm({
    form :'LoginForm',
    validate
 }) (LoginForm));

