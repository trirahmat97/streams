export const GET_ALL_CUSROMWRS = 'GET_ALL_CUSROMWRS';
export const GET_CUSTOMER_BY_ID = 'GET_CUSTOMER_BY_ID';


export const getCustomers = () => {
    return {
        type: GET_ALL_CUSROMWRS,
    };
}

export const getCustometById = (id) => {
    return {
        type: GET_CUSTOMER_BY_ID,
        id
    }
}