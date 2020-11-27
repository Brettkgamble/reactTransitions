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
                    timeout={200}

                    // enter={false}
                    // exit={false}

                    onEnter={(NODE) => {
                        console.log('Enter')
                    }}

                    onExit={() => {
                        console.log('Exit')
                    }}

                >
                    { state =>
                        <div className={`square square-${state}`}>
                            { `square square-${state}` }
                        </div>
                    }
                </Transition>
                <div className="showDiv" onClick={this.showDiv}>
                    Show / Hide
                </div>
            </>
        )
    }
}

export default TransitionComp;