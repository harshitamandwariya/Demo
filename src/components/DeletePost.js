import React from 'react';
import history from './history';
import {connect} from 'react-redux';
import {deletePost} from '../actions';
import { Link } from 'react-router-dom';

class DeletePost extends React.Component {

    delete=(id)=>{
        this.props.deletePost(id,(res)=>{
            if(res.status===200){
                history.push('/postlist');
            }
        });
    }
    
    renderActions() {
      const {id} = this.props.match.params;
        return (
        <React.Fragment>        
            <button 
                 onClick={() => this.delete(id) }
                className="ui button negative">
                Delete
            </button>
            <Link to="/" className="ui button">
                Cancel
            </Link>
        </React.Fragment>
   );
}

    renderContent() {       
        return `Are  you sure you want to delete this stream ?`
    
    }


    render() {
        return (
            <div>
                   {this.renderContent()}
                    {this.renderActions()}
                    {() => history.push('/PostList')}
            </div>
         );
    
    };

}

export default connect(null , {deletePost})(DeletePost);