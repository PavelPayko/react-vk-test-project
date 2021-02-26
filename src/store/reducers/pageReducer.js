const SET_GROUPS = 'SET_GROUPS'
const SET_NEWS_FEED = 'SET_NEWS_FEED'
const SORT_NEWS_FEED = 'SORT_NEWS_FEED'
const FILTER_NEWS_FEED = 'FILTER_NEWS_FEED'
const SET_GROUP_MODE_SWITCH = 'SET_GROUP_MODE_SWITCH'

export const ascendingOrder = 'ascending'
export const descendingOrder = 'descending'


const initialState = {
    groupsData: [],   //array
    newsFeed: [], //array
    searchGroupMode: true,
    activeSortMethod: ascendingOrder,
    sortBy: null,
}

export function pageReducer(state = initialState, action) {
    switch (action.type) {

        case SET_GROUPS:
            return {
                ...state,
                groupsData: [...action.groupsData],
                searchGroupMode: true
            }

        case SET_NEWS_FEED:
            return {
                ...state,
                newsFeed: action.newsFeed,
                currentGroupName: action.name,
                searchGroupMode: false
            }

        case SORT_NEWS_FEED:
            return {
                ...state,
                newsFeed: action.newsFeed,
                activeSortMethod: action.method,
                sortBy: action.sortBy

            }

        case FILTER_NEWS_FEED:
            return {
                ...state,
                filteredNewsFeed: action.filteredNewsFeed,
                filteredBy: action.filteredBy

            }

        case SET_GROUP_MODE_SWITCH:
            return {
                ...state,
                searchGroupMode: true,
                currentGroupName: null
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
const setNewsFeedAC = (newsFeed, name) => ({
    type: SET_NEWS_FEED,
    newsFeed,
    name
})
const sortNewsFeedAC = (newsFeed, method, sortBy = 'likes') => ({
    type: SORT_NEWS_FEED,
    newsFeed,
    method,
    sortBy
})
const filterNewsFeedAC = (filteredNewsFeed, filteredBy) => ({
    type: FILTER_NEWS_FEED,
    filteredNewsFeed,
    filteredBy
})
export const searchGroupModeSwitch = () => ({
    type: SET_GROUP_MODE_SWITCH
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
        {owner_id: "-" + groupId, count: 10, extended: 1, fields: 'name', v: '5.80'},
        response => {
            try {
                const newsFeed = response.response.items
                const name = response.response.groups[0].name
                dispatch(setNewsFeedAC(newsFeed, name))
            } catch (e) {
                console.log(e)
            }
        }
    )
}

export const sortNewsFeed = (sortBy, method) => (dispatch, getState) => {

    let newsFeed = getState().page.newsFeed

    let mapped = newsFeed.map((item, index) => ({
        index, value: item[sortBy].count
    }))
    switch (method) {
        case ascendingOrder:
            mapped.sort((a, b) => b.value - a.value)
            break
        case descendingOrder:
            mapped.sort((a, b) => a.value - b.value)
            break
        default :
            break
    }

    let result = mapped.map(item => newsFeed[item.index])
    console.log(result)
    dispatch(sortNewsFeedAC(result, method, sortBy))
}
export const filterNewsFeed = (filterBy) => (dispatch, getState) => {
    if (filterBy === 'reset') {
        dispatch(filterNewsFeedAC(null, null))
    } else {
        let newsFeed = getState().page.newsFeed

        let filtered = newsFeed.filter(item => {
                let mapped = []
                if (item.attachments) {
                    mapped = item.attachments.map(i => i.type === filterBy)
                }
                return mapped.includes(true)
            }
        )

        console.log(filtered)
        dispatch(filterNewsFeedAC(filtered, filterBy))
    }

}


