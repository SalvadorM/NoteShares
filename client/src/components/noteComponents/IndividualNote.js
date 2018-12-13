import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import { getNoteByID } from '../userFunctions'

function Display(props) {

    const note = props.note
    console.log(note);
    // console.log(note)
    return (
        <div className="w3-card-4">
            <p>{note.title}</p>
            <p>{note.body}</p>
            <p>{note.text}</p>
            <p>{note.image}</p>
        </div>
    )
}

class ViewUserNotes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: [],
            callbackResponce: false,
        }
    }

    componentDidMount(){
            //get the notes from the user ID passed through props
            let id = this.props.id
            getNoteByID(id)
            .then(notes => {
                this.setState({notes: notes.data,
                               callbackResponce: true})
            })
            .catch(err => {
                console.log(err)
            })

    }


    render(){
        if(this.state.callbackResponce){

                let notelist=[];
               
                notelist.push(
                        <Display 
                               note ={this.state.notes}
                        />
                )
            return (

                <div className="w3-container w3-center">{notelist}</div>

            );
        }
       
        return (
            <div>
                LOADING NOTESSSS
            </div>
        );
    }
}
export default ViewUserNotes;