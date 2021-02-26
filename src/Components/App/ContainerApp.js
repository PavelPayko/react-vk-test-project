import React from 'react';
import {connect} from "react-redux";
import App from "./App";
import {login, logout} from "../../store/reducers/loginReducer";
import {
    getNewsFeed,
    getGroups,
    searchGroupModeSwitch,
    sortNewsFeed,
    ascendingOrder, descendingOrder, filterNewsFeed
} from "../../store/reducers/pageReducer";

const ContainerApp = props => {
    let getSortIcon = () => {
        if(props.activeSortMethod === ascendingOrder){
            return'controlSortArrowUp'
        }
        if(props.activeSortMethod === descendingOrder){
            return 'controlSortArrowDown'

        }
    }
    const sortNewsFeedHandler = (sortBy) => {
        let method = null
        if(props.activeSortMethod === ascendingOrder){
            method = descendingOrder
        }
        if(props.activeSortMethod === descendingOrder){
            method = ascendingOrder

        }
        props.sortNewsFeed(sortBy, method)
    }
    return  <App sortNewsFeedHandler={sortNewsFeedHandler} sortIcon={getSortIcon()} {...props}/>
}

const mapStateToProps = state => ({
    userName: state.login.user,
    isAuth: state.login.isAuth,
    groupsData: state.page.groupsData,
    newsFeed: state.page.newsFeed,
    searchGroupMode: state.page.searchGroupMode,
    currentGroupName: state.page.currentGroupName,
    activeSortMethod: state.page.activeSortMethod,
    sortBy: state.page.sortBy,
    filteredNewsFeed: state.page.filteredNewsFeed,
    filteredBy: state.page.filteredBy
})
const mapDispatchToProps = {login, logout, getGroups, getNewsFeed, searchGroupModeSwitch,sortNewsFeed, filterNewsFeed }

export default connect(mapStateToProps,mapDispatchToProps)(ContainerApp);
