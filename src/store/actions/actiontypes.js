export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const RESET_COUNTER = 'RESET_COUNTER';
export const STORERESULT = 'STORERESULT';
export const DELETERESULT = 'DELETERESULT';
export const CLEARSTOREDRESULT = 'CLEARSTOREDRESULT';



const saveResult = (value) => {
    return {
        type:STORERESULT,
        payload:{value:value}
    }
}

