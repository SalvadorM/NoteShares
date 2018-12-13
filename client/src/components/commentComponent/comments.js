import React, {Component} from 'react'
import {newcom, getAllComments} from '../userFunctions'


function DisplayComment(props) {

    const comment = props.comment
  
    return (
        <div className="w3-card-4">

            <div className="w3-left">
             {comment.id} 
            </div> 
            <p className="w3-center">{comment.body}</p>

     
        </div>
    )
}

class Comment extends Component{
    constructor(props){
        super(props)

        this.state = { 
            body: '',
            commentCB: false,
            comments: [],
            newComment: false,
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
        newcom(newCom)
        .then( () => {
            getAllComments(note_id)
            .then( comments =>{
                    this.setState({
                        comments:comments.data,
                        commentCB: true,
                    })
            })
            .catch( err => {
                    console.log(err)
            })
        })
        .catch( err => {
            console.log(err)
        });

    }

    componentDidMount(){
        const noteId = this.props.findAllByid;
        getAllComments(noteId)
                .then( comments =>{
                    this.setState({
                        comments:comments.data,
                        commentCB: true,
                    })
                })
                .catch( err => {
                    console.log(err)
                })
    }


    render(){

        let comments = (<div> <h1>No Comments</h1></div>)
        if(this.state.commentCB){
            comments = this.state.comments.map( comment => {
                return (<DisplayComment key={comment.id} comment={comment} />)
            })
        }
        return(
            <div className="w3-container">

                <div className="w3-container">
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
                </div>

                <div id="bottom-section-comment" className=" w3-border w3-light-grey w3-round-large">{comments} </div>

            </div>
            
        );
    }
}

export default Comment;