import { React } from "react";

const Modal = ({ active, setActive }) => {
    console.log('active');
    return (
        <div className={active ? 'modalSucces TurnUn' : 'modalSucces'} onClick={() => setActive(false)}>
            <div className="modal__content">
                <p>Registration succes</p>
            </div>
        </div>
    );
};


export default Modal;