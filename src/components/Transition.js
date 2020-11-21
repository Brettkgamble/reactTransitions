import React, { Component } from 'react';
import '../css/App.css';
import { Transition } from "react-transition-group";

class TransitionComp extends Component{

    state = {
        show: false
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
                    timeout={1000}
                    mountOnEnter
                    unmountOnExit
                >
                    { state =>
                        <div style={{
                            background: 'red',
                            height: '100px',
                            transition: 'all 2s ease',
                            opacity: state === 'exited' || state === 'exiting' ? 0 : 1
                        }}>
                            { state }
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