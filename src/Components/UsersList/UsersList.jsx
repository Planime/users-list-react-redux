import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {DataGrid} from '@material-ui/data-grid';
import {Button} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import {deleteUsers, initUsers} from "../../redux/actions/actionsCreator";

const columns = [
    {field: 'id', headerName: 'ID', width: 70},
    {field: 'firstName', headerName: 'First name', width: 130},
    {field: 'lastName', headerName: 'Last name', width: 130},
    {field: 'address', headerName: 'Address', width: 200},
    {field: 'phone', headerName: 'Phone', width: 200},
    {field: 'email', headerName: 'Email', width: 300},
    {field: 'company', headerName: 'Company', width: 200},
];


function UsersList({setOpen, setSelectedRow}) {
    const [selectedRowsId, setSelectedRowsId] = useState([]);
    const dispatch = useDispatch();
    const users = useSelector(({users}) => users);


    useEffect(() => {
        dispatch(initUsers())
    }, []);

    function handleSelectionChange(e) {
        setSelectedRowsId(e.selectionModel);
    }
    
    function onClickDeleteBtn() {
      dispatch(deleteUsers(selectedRowsId))
    }

    function onRowClick(e) {
         setSelectedRow(()=> e.row);
         setOpen(true)
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
                onRowClick={onRowClick}
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