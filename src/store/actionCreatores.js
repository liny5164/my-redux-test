

import { CHANGE_INPUT, ADD, DEL, GET_LIST, GET_MY_LIST } from './actionTypes'

export const changeInputAction = (data) => (
    {
        type: CHANGE_INPUT,
        value: data

    }
)
export const addAction = () => (
    {
        type: ADD

    }
)
export const delAction = (index) => (
    {
        type: DEL,
        index

    }
)
export const getListAction = (data) => (
    {
        type: GET_LIST,
        value: data

    }
)
export const getMyListAction = () => (
    {
        type: GET_MY_LIST
    }
)