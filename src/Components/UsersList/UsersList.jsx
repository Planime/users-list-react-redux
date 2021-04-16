import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import usersApi from '../../apiServices/apiUsers'
import {DELETE_USERS, INIT_USERS} from "../../redux/constants";
import {DataGrid} from '@material-ui/data-grid';
import {Button} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';

const columns = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'firstName', headerName: 'First name', width: 130},
    {field: 'lastName', headerName: 'Last name', width: 130},
    {field: 'address', headerName: 'Address', width: 200},
    {field: 'phone', headerName: 'Phone', width: 200},
    {field: 'email', headerName: 'Email', width: 300},
    {field: 'company', headerName: 'Company', width: 200},
];


function UsersList() {
    const [selectedRowsId, setSelectedRowsId] = useState([]);
    const [selectedRow, setSelectedRow] = useState([]);
    const dispatch = useDispatch();
    const users = useSelector(({users}) => users);



    useEffect(() => {
        usersApi.get('/')
            .then(res => {
                dispatch({
                    type: INIT_USERS,
                    users: res.data
                })
            })
    }, []);

    function handleSelectionChange(e) {
        setSelectedRowsId(e.selectionModel);
    }
    
    function onClickDeleteBtn() {
        const arrToDelReq = selectedRowsId.map(id => usersApi.delete(`/${id}`).then(res => res.data))
        Promise.allSettled(arrToDelReq)
            .then(res => res.filter(res => res.status === "fulfilled"))
            .then(res => res.map(el => el.value.id))
            .then(arrIdToDelete => dispatch({type: DELETE_USERS, arrIdToDelete}))
    }

    function onRowDoubleClick(e) {
        console.log(e.row);
        setSelectedRow(()=> e.row)
    }

    return (
        <>

            <Button
                onClick={onClickDeleteBtn}
                variant="contained"
                color="secondary"
                disabled={selectedRowsId.length === 0}
                startIcon={<DeleteIcon/>}

            >
                Delete
            </Button>

            <DataGrid
                checkboxSelection
                editRowsModel
                rows={users}
                onRowDoubleClick={onRowDoubleClick}
                autoHeight={true}
                columns={columns}
                pageSize={10}
                disableExtendRowFullWidth={true}
                onSelectionModelChange={handleSelectionChange}
            />
        </>
    )
}


export default UsersList