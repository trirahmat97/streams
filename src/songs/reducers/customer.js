import { GET_ALL_CUSROMWRS, GET_CUSTOMER_BY_ID } from '../actions/customer';
import { combineReducers } from 'redux';

const customers = [
    { id: 1, name: 'Tri rahmat aribowo', age: 23 },
    { id: 2, name: 'Tri ', age: 22 },
    { id: 3, name: 'Tri rahmat ', age: 24 },
    { id: 4, name: 'aribowo', age: 25 }
];

export const reducerCustomers = () => {
    return customers;
    // return {
    //     customers,
    //     customer: actionReducerCustomer
    // }
}

export const actionReducerCustomer = (state = null, action) => {
    switch (action.type) {
        case GET_ALL_CUSROMWRS:
            return customers;
        case GET_CUSTOMER_BY_ID:
            const dataCustomerId = customers.filter(customer => customer.id === action.id);
            return dataCustomerId[0];
        default:
            return state;
    }
}

// export default combineReducers({
//     customers: reducerCustomers,
//     customer: actionReducerCustomer
// })

// export const reducerCustomers

