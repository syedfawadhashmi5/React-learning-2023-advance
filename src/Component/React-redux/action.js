

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCREMENT_BY_AMOUNT = "INCREMENT_BY_AMOUNT";
export const Student_Array = "StudentArray";


export const increment = ()=>{
    return {
        type: INCREMENT
    }
}

export const decrement = ()=>{
    return {
        type: DECREMENT
    }
}

export const incrementByAmount = (number)=>{
    return {
        type: INCREMENT_BY_AMOUNT,
        payload: number
    }
}


export const StudentArray = (array) => {
    return {
        type: Student_Array,
        payload: array
    }
} 