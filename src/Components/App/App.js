import React from 'react';
import './App.css';
import Header from "../Header/Header";
import Controls from "../Controls/Controls";
import PageContent from "../PageContent/PageContent";
import GroupSearch from "../GroupSearch/GroupSearch";

function App(props) {
    return (
        <div className="App">
            <Header name={props.userName}
                    login={props.login}
                    logout={props.logout}
                    isAuth={props.isAuth}
            />
            <main>
                <Controls currentGroupName={props.currentGroupName}
                          searchGroupModeSwitch={props.searchGroupModeSwitch}
                          sortNewsFeed={props.sortNewsFeedHandler}
                          activeSortMethod={props.activeSortMethod}
                          sortBy={props.sortBy}
                          sortIcon={props.sortIcon}
                          filterNewsFeed={props.filterNewsFeed}
                          filteredBy={props.filteredBy}
                />
                {props.searchGroupMode
                    ? <GroupSearch getGroups={props.getGroups}
                                   groupsData={props.groupsData}
                                   getNewsFeed={props.getNewsFeed}
                    />
                    : <PageContent newsFeed={props.newsFeed}
                                   filteredNewsFeed={props.filteredNewsFeed}
                    />
                }
            </main>
        </div>
    )
        ;
}

export default App;
