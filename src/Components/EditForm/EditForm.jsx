import React, {useState, useEffect} from 'react';
import {TextField, Button} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {updateUser} from "../../redux/actions/actionsCreator";

function EditForm({selectedRow}) {

    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        phone: "",
        email: "",
        company: ""
    });
    const {
        firstName,
        lastName,
        address,
        phone,
        email,
        company
    } = formData;

    useEffect(() => {
        const newData = {...selectedRow};
        delete newData.id;
        setFormData(newData);
    }, [selectedRow]);


    const onChangeInput = (e) => {

        setFormData((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value
            }
        })
    };

    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log("I am here on Submit")
        dispatch(updateUser(selectedRow.id, formData))
    };

    return (
        <form
            onSubmit={onSubmitForm}
            className="form-edit">
            <h3>Edit User Form</h3>
            <TextField
                label="First Name"
                variant="filled"
                name="firstName"
                value={firstName}
                onChange={onChangeInput}
            />

            <TextField
                label="Last Name"
                variant="filled"
                name="lastName"
                value={lastName}
                onChange={onChangeInput}
            />

            <TextField
                label="Address"
                variant="filled"
                name="address"
                value={address}
                onChange={onChangeInput}
            />
            <TextField
                label="Phone"
                variant="filled"
                name="phone"
                value={phone}
                onChange={onChangeInput}
            />
            <TextField
                label="Email"
                variant="filled"
                name="email"
                value={email}
                onChange={onChangeInput}
            />
            <TextField
                label="Company"
                variant="filled"
                name="company"
                value={company}
                onChange={onChangeInput}
            />
            <button
                variant="contained"
                color="primary"
            >Save
            </button>

        </form>
    )
}

export default EditForm

