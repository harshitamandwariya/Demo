import React from 'react';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import CreatePost from './CreatePost';
import DeletePost from './DeletePost';
import EditPost from './EditPost';
import {Router,Route } from 'react-router-dom';
import PostList from './PostList';
import history from './history';



class App extends React.Component {
  render() {
    return (
      <div className="ui container" >
         <Router history={history}>      
          <div> 
            <Route path = '/SignUp' exact component = {SignUpForm} />
            <Route path = '/'exact component = {LoginForm} />   
            <Route path = '/PostList'exact component = {PostList} />  
            <Route path = '/CreatePost' exact component = {CreatePost} />         
            <Route path = '/EditPost/:id' exact component = {EditPost} /> 
            <Route path = '/DeletePost/:id' exact component = {DeletePost} /> 
            </div>
         </Router>
      </div>
    );
  }
}

export default App;
