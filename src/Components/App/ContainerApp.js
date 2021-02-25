import React from 'react';
import {connect} from "react-redux";
import App from "./App";
import {login, logout} from "../../store/reducers/loginReducer";
import {getNewsFeed, getGroups} from "../../store/reducers/pageReducer";

const ContainerApp = props => <App {...props}/>

const mapStateToProps = state => ({
    userName: state.login.user,
    isAuth: state.login.isAuth,
    groupsData: state.page.groupsData,
    newsFeed: state.page.newsFeed
})
const mapDispatchToProps = {login, logout, getGroups, getNewsFeed }

export default connect(mapStateToProps,mapDispatchToProps)(ContainerApp);
