import axios from 'axios';

const initialState = {
    answer: " ",
    result: null
};


function result(state=initialState,action){
    switch(action.type){
        case "ENTER" :
            let copy ={...state};
            copy.answer = action.answer;
            return copy;
        
        default:
            return state;
    }

}

export default result;