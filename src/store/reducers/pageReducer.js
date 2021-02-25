const SET_GROUPS = 'SET_GROUPS'
const SET_NEWS_FEED = 'SET_NEWS_FEED'


const initialState = {
    groupsData: [],   //array
    newsFeed: [], //array
    searchGroupMode: true
}

export function pageReducer(state = initialState, action) {
    switch (action.type) {

        case SET_GROUPS:
            return {...state,
                groupsData: [...action.groupsData],
                searchGroupMode: true
            }

        case SET_NEWS_FEED:
            return {...state,
                newsFeed: action.newsFeed,
                searchGroupMode: false
            }

        default:
            return state
    }
}

// Action Creators

const setGroupsAC = (groupsData) => ({
    type: SET_GROUPS,
    groupsData
})
const setNewsFeedAC = (newsFeed) => ({
    type: SET_NEWS_FEED,
    newsFeed
})

// thunk creators
export const getGroups = (query) => (dispatch) => {
    let groupsArr = []
    //eslint-disable-next-line no-undef
    VK.Api.call(
        'groups.search',
        {q: query, sort: 0, v: '5.80'},
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
export const getNewsFeed = (groupId) => (dispatch) => {
    //eslint-disable-next-line no-undef
    VK.Api.call(
        'wall.get',
        {owner_id: "-"+groupId,count: 10, v: '5.80'},
        response => {
            try {
                const newsFeed = response.response.items
                dispatch(setNewsFeedAC(newsFeed))
            } catch (e) {
                console.log(e)
            }
        }
    )
}


