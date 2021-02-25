import React from 'react';
import './App.css';
import Header from "../Header/Header";
import Controls from "../Controls/Controls";
import PageContent from "../PageContent/PageContent";
import GroupSearch from "../GroupSearch/GroupSearch";

function App(props) {
    return (
        <div className="App">
            <Header name={props.name}
                    login={props.login}
                    logout={props.logout}
                    isAuth={props.isAuth}
            />
            <Controls/>
            {props.searchGroupMode
                ? <GroupSearch getGroups={props.getGroups}
                               groupsData={props.groupsData}
                               getNewsFeed={props.getNewsFeed}
                />
                : <PageContent newsFeed={props.newsFeed}
                />
            }
        </div>
    );
}

export default App;
