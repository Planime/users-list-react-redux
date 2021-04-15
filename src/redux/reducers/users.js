import {INIT_USERS} from "../constants";


function usersReducer(state=[], {type, users}) {
    switch (type) {
        case INIT_USERS:
            return users;
        default: return state
    }
}


export default usersReducer