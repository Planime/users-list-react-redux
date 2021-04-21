import {DELETE_USERS, INIT_USERS, UPDATE_USER} from "../constants";


function usersReducer(state=[], {type, ...payload}) {
    switch (type) {
        case INIT_USERS:
            return payload.users;
        case DELETE_USERS:
            return state.filter(({id}) => !payload.arrIdToDelete.includes(id));
        case UPDATE_USER:
            return state.map(user => {
                if(+user.id === +payload.user.id){
                    return payload.user;
                }
                return user;
            } );
        default: return state
    }
}


export default usersReducer