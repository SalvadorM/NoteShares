import React, {Component} from 'react'

import { getNoteByID } from '../userFunctions'

function Displaypicture(props) {

    let imgURL = props.note
    return (
        <div className="w3-center">    
             <img src={imgURL} alt="pic" height="300" width="300"></img>
        </div>
    )
}

function Display(props) {

    const note = props.note
  
    return (
        <div className="w3-card-4">
            <p>Title:{note.title}</p>
            <p>Body:{note.body}</p>
            <p>text:{note.text}</p>
           
        </div>
    )
}

class ViewUserNotes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            note: [],
            callbackResponce: false,
            comments: [],
        }
    }

    componentDidMount(){
        
            //get the notes from the user ID passed through props
            const id = this.props.id
            getNoteByID(id)
            .then(note => {

                    this.setState({
                        note:note.data,
                        callbackResponce: true,
                    })
            })
            .catch(err => {
                console.log(err)
            })


    }


    render(){

        if(this.state.callbackResponce){

            let notelist= <Display note ={this.state.note}/>
            
            let pictures = (<div> <h1>N/A pictures</h1></div>)
            
            if(this.state.note.image.length > 0){
                pictures = this.state.note.image.map( image => {
                    return (<Displaypicture key={image} note={image}/>)
                })
            }

            return (
                <div className="w3-container w3-center">
                    <div className="w3-container w3-center"> {notelist} </div>
                
                    
                    <div className="w3-panel">{pictures}</div>


                </div>
                
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