import {ADD_Person, LOAD_Person, LOADING_Person} from "../constants/action-types";

export const addPerson = (person) => ({
    type: ADD_Person, payload: {person}
});
export const loadingPerson = (dispatch, page) => ({
    type: LOADING_Person, payload:  { dispatch, page}
});
export const loadPerson = (persons, count) => ({
    type: LOAD_Person, payload: {persons, count}
});
