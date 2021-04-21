import Header from "../Header/Header"
import UsersList from "../UsersList/UsersList";
import {Container} from "@material-ui/core"
import Footer from "../Footer/Footer";
import ModalEdit from "../Modal/ModalEdit";
import {useState} from "react";


function Main() {
    const [open, setOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState([]);


    return (
        <Container>
            <Header/>
            <UsersList setOpen={setOpen}
                       setSelectedRow={setSelectedRow}/>
            <Footer/>
            <ModalEdit
                open={open}
                setOpen={setOpen}
                selectedRow={selectedRow}
            />
        </Container>
    )
}

export default Main;