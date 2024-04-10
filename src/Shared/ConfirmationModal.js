import React from 'react';

const ConfirmationModal = ({title, message, successAction, successBtnName, modalData}) => {
    return (
        <div>
            <input type="checkbox" id="confirm-modal" className="modal-toggle" />
            <div className="modal" role="dialog">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label htmlFor="confirm-modal" className="btn">Close</label>
                        <label htmlFor="confirm-modal" onClick={() => successAction(modalData)} className="btn btn-error">{successBtnName}</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;