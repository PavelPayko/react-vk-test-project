import React from 'react';
import './App.css';
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
            <PageContent getGroups={props.getGroups}
                         groupsData={props.groupsData}
                         getNewsFeed={props.getNewsFeed}
                         newsFeed={props.newsFeed}
            />
        </div>
    );
}

export default App;
