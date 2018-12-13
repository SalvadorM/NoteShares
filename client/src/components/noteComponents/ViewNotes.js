import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {  getAllTheNotes} from '../userFunctions'

function Display(props) {

    const note = props.note
    const noteURL = "/viewnote/" + note.id

    return (
        <div>
            <div className="w3-card-4">
            <h1>{note.title}</h1>
            <div>
            <Link to={noteURL}> <p><button className="w3-button w3-padding-large w3-white w3-border readmore"><b>READ MORE »</b></button></p> </Link>
            </div>
            
            </div>
        </div>
    )
}
class ViewNote extends Component {
    constructor(props) {
        super(props)

        this.state = {
            callbackResponce:false,
            notes: []
        }
    }

    componentDidMount(){
        getAllTheNotes()
        .then(notes => {
            let noteArray = notes.data;
            this.setState({notes: noteArray,
                           callbackResponce: true})
                console.log(notes.data);
        })
        .catch(err => {
            console.log(err)
        })
    }


    render(){
        if(this.state.callbackResponce){

            const notes = this.state.notes.map( note => {
                return(
                    
                        <Display key={note.id} note={note} />
                    
                );
            })
     
            return (

                <div className="w3-container w3-center">{notes}</div>



            );
        }
       
        return (
            <div>
                LOADING NOTESSSS
            </div>
        );
    }
}
export default ViewNote;