import React, {Component} from 'react'
import {newcom} from '../userFunctions'

class Comment extends Component{
    constructor(props){
        super(props)

        this.state = { 
            body: '',
        }
    }
    onChange(e) {
        let body = this.state.body;
        body = e.target.value;
        this.setState({body});
        
        console.log(body);
    }
    onSubmit(e) {
        e.preventDefault();
        //post fetch
        const note_id = this.props.findAllByid;
        const user_id = this.props.userid;
        console.log(note_id);
       
       const newCom = {
        noteId : note_id,
        userId : user_id,
        body : this.state.body,
     }

    console.log(newCom);
    newcom(newCom);

    
    }
    render(){
        return(
            <form onSubmit={(e) => this.onSubmit(e)}>
            <div className="form">
            <div className="form-row align-items-center">
                <div className="col-auto">
                    <input className="form-control"
                           onChange = { (e) => this.onChange(e) }
                           required></input>
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary"
                            type="submit">Comment
                    </button>
                </div>
                
            </div>
            </div>
            </form>
        );
    }
}

export default Comment;