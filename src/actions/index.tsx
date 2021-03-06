import {GET_EMP_START} from "./types";
import {GET_EMP_FAIL} from "./types";
import {GET_EMP_SUCCESS} from "./types";
import {DELETE_EMP_SUCCESS} from "./types";
import {DELETE_EMP_START} from "./types";
import {ADD_EMPLOYEE,EDIT_EMPLOYEE,DELETE_EMPLOYEE,GET_SINGLE_EMP,GET_SINGLE_EMP_SUCCESS} from "./types";
import {Employee} from "./types";
import data from "../reducers/data";


export const  getEmployeeStart = () =>({
    type: GET_EMP_START
});

export const  getEmployeeSuccess = (data: Employee[]) =>({
    type: GET_EMP_SUCCESS,
    data
});



export const addEmployee = (user)=>
    (
        {
            type:ADD_EMPLOYEE,
            payload:user
        }
    )

export const editEmployee = (user) =>
    (
        {

            type:EDIT_EMPLOYEE,
            payload:user

        })

export const deleteEmployee = (userId) =>
    (
        {
            type:DELETE_EMPLOYEE,
            payload:userId
        }
    )

export const getSingleEmployee = (userId) =>
    (
        {
            type:GET_SINGLE_EMP,
            payload:userId
        }
    )

export const  getSingleEmployeeSuccess = (data: Employee) =>({
    type: GET_SINGLE_EMP_SUCCESS,
    data
});




