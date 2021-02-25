import React, {useEffect} from 'react';
import {connect} from "react-redux";
import App from "./App";
import {login, logout} from "../../store/reducers/loginReducer";
import {getGroups} from "../../store/reducers/pageReducer";

const ContainerApp = props => <App {...props}/>

const mapStateToProps = state => ({
    userName: state.login.user,
    groupsData: state.page.groupsData,
    isAuth: state.login.isAuth
})
const mapDispatchToProps = {login, logout, getGroups }

export default connect(mapStateToProps,mapDispatchToProps)(ContainerApp);
