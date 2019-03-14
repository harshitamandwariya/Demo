import React from 'react' ;
import { connect } from 'react-redux' ;
import { postList } from '../actions' ;
import {Link} from 'react-router-dom';
import renderHTML from 'react-render-html';
import history from './history';


class PostList extends React.Component {
constructor(props){
    super(props)
    this.state = {
        postdata : []
    }
}
    componentDidMount = () => {
      this.props.postList((res) => {          
       this.setState({
           postdata : res.data
       })
    })
  }

  componentDidUpdate = () => {
    this.props.postList((res) => {          
        this.setState({
            postdata : res.data
        })
    })
  }

  onSubmit(){
    localStorage.removeItem("user_id");
    localStorage.removeItem("token");
    history.push('/');
 }

  renderAdmin(post) {
      localStorage.getItem("data")
         if(localStorage.getItem("user_id") === post.author.toString()){
            return(
                 <div className="right floated content">
                    <Link to={`/EditPost/${post.id}`}  className="ui button primary">Edit</Link>
                    <Link to={`/DeletePost/${post.id}`} className="ui button negative">Delete</Link>
                 </div>
        );    
    }
}

  renderList() {
    return this.state.postdata.map(post => {  
        return (
            <div className='item' key={post.id}>
                {this.renderAdmin(post)}
                <i className="large middle aligned icon camera" />
                <div className = 'content'>
                    <Link to={`/${post.id}`} className="header">{post.title.rendered} </Link>
                    <div className="description">{renderHTML(post.excerpt.rendered)}</div>
                </div>              
            </div>
        );
    });
}



render() {
    if(localStorage.getItem("token"))
  return (
      <div> 
          <h2>Posts</h2>
          <div className="ui secondary pointing menu">
            <Link to='/CreatePost' className="ui button primary"> Create new Post</Link>
            <Link to='/' className="ui button primary" onClick={this.onSubmit}>Logout</Link>
          </div>
         <div className='ui celled list'>{this.renderList()}</div>
     </div>
     );
  }
}

export default connect (null ,{postList})(PostList);