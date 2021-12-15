import React from 'react';
import Modal from 'react-modal';
import JsonData from '../server/cart.json';
import Counter from './counterApp';


const CartModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="selectedOption"
        onRequestClose={props.handleModal}
        closeTimeoutMS={200}
        className="modal"
    >{props.items.map((item) =>
        <div>{JsonData.map((info) =>
            <div> {item.id==info.id?<div>{info.product} price: {info.price}<Counter quantity={item.quantity} /><button value={props.items.indexOf(item)} onClick={props.handleremove} >Remove</button></div> :""}</div>
        )}
        </div>
    )}
        <button className="button" onClick={props.handleModal}>Okay</button>
    </Modal>
)

export default CartModal;