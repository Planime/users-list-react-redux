import axios from "axios";


export default axios.create({
    baseURL: "https://5fec128e573752001730b0f1.mockapi.io/users",
    headers: {
        "Content-Type": "application/json",
    }
});