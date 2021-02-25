const SET_GROUPS = 'SET_GROUPS'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGIN_FAIL = 'LOGIN_FAIL'

const initialState = {
    user: 'User Name',
    groupsData: []
}

export function pageReducer(state = initialState, action) {
    switch (action.type) {
        case SET_GROUPS:
            return {...state, groupsData: [...action.groupsData]}

        case LOGIN_SUCCESS:
            return {...state, isFetching: false, name: action.payload}

        case LOGIN_FAIL:
            return {...state, isFetching: false, error: action.payload.message}

        default:
            return state
    }
}

// ActionCreators

const setGroupsAC = (groupsData) => ({
    type: SET_GROUPS,
    groupsData
})
const loginSuccessAC = (username) => ({
    type: LOGIN_SUCCESS,
    payload: username,
})
const loginFailAC = () => ({
    type: LOGIN_FAIL,
    error: true,
    payload: new Error('Ошибка авторизации'),
})

export const getGroups = (query) => (dispatch) => {
    let groupsArr = []
    //eslint-disable-next-line no-undef
    VK.Api.call(
        'groups.search',
        { q: query, sort: 0, v: '5.80' },
        r => {
            try {
                groupsArr = groupsArr.concat(r.response.items)
                dispatch(setGroupsAC(groupsArr))
            } catch (e) {
                console.log(e)
            }
        }
    )
}


