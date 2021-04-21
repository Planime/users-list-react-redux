import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import EditForm from "../EditForm/EditForm";

const body = (

            <div>

            <EditForm/>
            </div>
)

function ModalEdit({open, setOpen, selectedRow}) {
    console.log(open, setOpen)

    const handlerClose = () => {
        setOpen(false);
    };


    return (

        <Modal
            id="modal"
            open={open}
            onClose={handlerClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {(

                <div>

                    <EditForm selectedRow={selectedRow}/>
                </div>
            )}

        </Modal>

    )
}

export default ModalEdit