import axios from "axios";

const LOG_REQUEST = 'LOG_REQUEST'
const LOG_FAIL = 'LOG_FAIL'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

const initialState = {
    user: null,
    isAuth: false,
    isFetching: true,
    error: null
}

export function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOG_REQUEST:
            return {...state, isFetching: true}

        case LOG_FAIL:
            return {...state, isFetching: false, error: action.payload.message}

        case LOGIN_SUCCESS:
            return {...state, isFetching: false, user: action.payload, isAuth: true}

        case LOGOUT_SUCCESS:
            return {...state, isFetching: false, isAuth: false}

        default:
            return state
    }
}

// ActionCreators

const logRequestAC = () => ({
    type: LOG_REQUEST,
})
const logFailAC = () => ({
    type: LOG_FAIL,
    error: true,
    payload: new Error('Ошибка авторизации'),
})
const loginSuccessAC = (username) => ({
    type: LOGIN_SUCCESS,
    payload: username,
})
const logoutSuccessAC = () => ({
    type: LOGOUT_SUCCESS,
})

export const login = () => (dispatch) => {
    dispatch(logRequestAC())

    //eslint-disable-next-line no-undef
    VK.Auth.login(response => {
        if (response.session) {
            let username = response.session.user.first_name
            console.log(response)
            dispatch(loginSuccessAC(username))
        } else {
            dispatch(logFailAC())
        }
    }, 4)
}
export const logout = () => (dispatch) => {
    //eslint-disable-next-line no-undef
    VK.Auth.logout(r => {
        if (r.session === null) {
            dispatch(logoutSuccessAC())
        } else {
            dispatch(logFailAC())
        }
    })
}


