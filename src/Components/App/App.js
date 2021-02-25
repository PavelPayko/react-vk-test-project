import React, {useEffect} from 'react';
import './App.css';
import {auth} from "../../API/API";
import axios from "axios";
import VK, {Auth} from 'react-vk';
import Header from "../Header/Header";
import Controls from "../Controls/Controls";
import PageContent from "../PageContent/PageContent";

function App(props) {
    return (
        <div className="App">
            <Header name={props.name}
                    login={props.login}
                    logout={props.logout}
                    isAuth={props.isAuth}
            />
            <Controls/>
            <PageContent getGroups={props.getGroups}/>
        </div>
    );
}

export default App;
