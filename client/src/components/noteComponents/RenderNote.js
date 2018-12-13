import React, { Component } from 'react'
import Comment from '../commentComponent/comments'
import Auth from '../../utilities/auth'
import IndvidualNote from './IndividualNote';
import ViewNotes from './ViewNotes';

class RenderNote extends Component {
    
    render(){

         let _username=Auth.getlocal('username')
         let userid = Auth.getlocal('id')
       
        //  console.log("hello");
         const id = this.props.match.params.id
         console.log(id);

        return (
            <div id="user-panel" className="w3-container w3-padding-64 w3-display-topmiddle">
            <div className="w3-animate-top">
                <div id="bottom-section" className="w3-panel w3-border w3-light-grey w3-round-large">
                  <h1>This notes created by {_username} </h1>
                </div>
                <div id="bottom-section" className="w3-panel w3-border w3-light-grey w3-round-large">
                   <IndvidualNote id={id} />
                    
                </div>
                <Comment findAllByid ={id} userid={userid}/>
          
            </div>
            </div>
                    
         
            

                
        );
    }
    
}


export default RenderNote;