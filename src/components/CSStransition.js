import React, { Component } from 'react';
import { CSSTransition } from "react-transition-group";

import '../css/App.css';

class Fade extends Component{

    state = {
        show: true
    }

    showDiv = () => {
        this.setState({
                show: !this.state.show ? true : false
            }
        )
    }

    render(){
        return(
            <>
                <CSSTransition
                    in={this.state.show}
                    timeout={500}
                    classNames="square"
                >
                    <div className={`square ${this.state.show}`}>
                        Hello
                    </div>
                </CSSTransition>
                <div className="showDiv" onClick={this.showDiv}>
                    Show / Hide
                </div>
            </>
        )
    }
}


export default Fade;