import {DELETE_USERS, INIT_USERS, UPDATE_USER} from "../constants";
import usersApi from "../../apiServices/apiUsers";

export const initUsers = () => (dispatch) => {
    usersApi.get('/')
        .then(res => {
            dispatch({
                type: INIT_USERS,
                users: res.data
            })
        })
};

export const deleteUsers = (selectedRowsId) => (dispatch) => {
    const arrToDelReq = selectedRowsId.map(id => usersApi.delete(`/${id}`).then(res => res.data));
    Promise.allSettled(arrToDelReq)
        .then(res => res.filter(res => res.status === "fulfilled"))
        .then(res => res.map(el => el.value.id))
        .then(arrIdToDelete => dispatch({type: DELETE_USERS, arrIdToDelete}))
};

export const updateUser = (id, userData) => async (dispatch) => {
    const response  = await usersApi.put(`/${id}`, userData);
    console.log(response.data);
    dispatch({
        type: UPDATE_USER,
        user: response.data
    })
};