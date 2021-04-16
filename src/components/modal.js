import React from 'react';
import './modal.css';


const Modal = props => {
    if(!props.show){
        return null;
    }


    return(
        <div className= "modal-pop" onClick= {props.onClose}>
            <div className= "modal" onClick= {event => event.stopPropagation()}>
                <div className= "modal-content">
                    <h3 className= "modal-header">Modal</h3>
                    <div onClick={props.onClose} className= "close-icon">x</div>
                </div>
                <div className= "modal-body">
                    <p className= "modal-text">hi {props.user}...you are logged in</p>
                </div>
                <div className= "modal-footer">
                    <button onClick= {props.onClose}className= "close-btn">close</button>
                </div>
            </div>
        </div>
        
    )
}
export default Modal;