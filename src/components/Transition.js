import React, { Component } from 'react';
import '../css/App.css';
import { Transition } from "react-transition-group";

class TransitionComp extends Component{

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
                <Transition
                    in={this.state.show}
                    timeout={2000}
                >
                    { state => <p>{state}</p>}
                </Transition>
                <div className="showDiv" onClick={this.showDiv}>
                    Show / Hide
                </div>
            </>
        )
    }
}

export default TransitionComp;