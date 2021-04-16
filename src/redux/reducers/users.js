import {DELETE_USERS, INIT_USERS} from "../constants";


function usersReducer(state=[], {type, ...payload}) {
    switch (type) {
        case INIT_USERS:
            return payload.users;
        case DELETE_USERS:
            console.log(payload.arrIdToDelete)
            return state.filter(({id}) => !payload.arrIdToDelete.includes(id))
        default: return state
    }
}


export default usersReducer