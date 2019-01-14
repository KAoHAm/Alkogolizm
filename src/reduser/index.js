// src/js/reducers/index.js
import {ADD_Person, LOAD_Person, LOADING_Person} from "../constants/action-types";
import {loadingPerson, loadPerson} from "../action/index";
const url = "http://localhost:3001"
const postingTodo=( person)=>{
    fetch(url, {
        method: 'POST',
        body: JSON.stringify( person),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}
const fetchTodo=(dispatch)=>{

    fetch(url)
        .then(res=>res.json())
        .then(el=> {

            el.data.map(el => {
                dispatch(loadPerson(el.attributes, el.count))
            })
        })
}

const initialState = {
    persons: [],
    count: 0
}
const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_Person: {
            postingTodo(payload)
            return { persons: [...state.persons, payload], count:state.count+1};
        }
        case LOADING_Person: {
            fetchTodo(payload.dispatch )
            return state
        }
        case LOAD_Person: {
            return {persons: [  ...payload.persons], count: payload.count};
        }
        default:
            return state;
    }

};
export default rootReducer;

