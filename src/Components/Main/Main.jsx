import Header from "../Header/Header"
import UsersList from "../UsersList/UsersList";
import {Container} from "@material-ui/core"
import Footer from "../Footer/Footer";


function Main() {
    return (
        <Container>
            <Header/>
            <UsersList/>
            <Footer/>
        </Container>
    )
}

export default Main;