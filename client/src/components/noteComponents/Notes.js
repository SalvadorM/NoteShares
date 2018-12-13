import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ViewNotes from './ViewNotes';


class Notes extends Component {
    
    render() {
        return(
            

            <div id="user-panel1" className="w3-container w3-padding-64 w3-display-topmiddle">
            <div className="w3-animate-top">
                <header className="showcase2">

                    <div className="words1 wordpostion">
                        All the notes to preview
                    </div>
                </header>

                <div className="w3-container w3-block ">
                            <div className="w3-container w3-center">
                                <h2><Link className="w3-button w3-round w3-hover-black wordsforbutton" to="/newpost">Create a new note</Link></h2>
                            </div>
                            
                            <div className="w3-container w3-panel w3-border w3-light-gray w3-round-large">
                               
                                    <div >
                                        <ViewNotes />
                                    </div>
                                    
                            </div>

                    </div>

        
            </div>
            </div>

            
        );
    }
}

export default Notes;