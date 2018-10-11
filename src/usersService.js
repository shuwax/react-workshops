import {fetchingUsers,addUsers} from './store/users';
export const fetchUsers= () => {
        return async (dispatch) => {
            try {
                dispatch(fetchingUsers(true));
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const users = await response.json();
                dispatch(addUsers(users));
            } catch(err) {
                console.warn(err);
                dispatch(addUsers(false));
            }
        }
};