import React from 'react'
import {camera, link, pencil, search, video} from "../../svg/svg";
import classes from './Controls.module.css'
import ContentBox from "../commonComponents/ContentBox/ContentBox";

const Controls = props => {

    const sortNewsFeedHandler = arg => {
        arg && props.sortNewsFeed(arg)
    }

    const FilterItem = props => {
        const isActive = (props.filteredBy === props.arg)
        return <div className={classes.filterItem + (isActive ? ` ${classes.filterActive}` : '')}
                    onClick={() => props.filter(isActive ? 'reset' : props.arg)}>
            <span className={classes.filterItemContent}>{props.img}</span>
        </div>
    }

    const SortItem = props => {
        const isActive = (props.sortBy === props.arg)
        return <div className={classes.sortItem + (isActive ? ` ${classes.sortActive}` : '')}

                    onClick={() => sortNewsFeedHandler(props.arg)}>
            <button className={classes.sortItemContent} onMouseDown={false} onselectstart={false}>{props.title}</button>
            <div className={isActive && classes[props.sortIcon]}> </div>
        </div>
    }

    return <ContentBox>
        <div className={classes.controlWrapper}>
            <h2 className={classes.title}>
                {props.currentGroupName
                    ? props.currentGroupName
                    : 'Лента'
                }
            </h2>
            <hr/>
            <div className={classes.returnWrapper}>
                {props.currentGroupName &&
                <span className={classes.return}
                      onClick={props.searchGroupModeSwitch}>Вернуться к поиску сообществ</span>
                }</div>
            <div className={classes.sort}>
                <SortItem title='Лайки' arg='likes' sortBy={props.sortBy} sortIcon={props.sortIcon}/>
                <SortItem title='Репосты' arg='reposts' sortBy={props.sortBy} sortIcon={props.sortIcon}/>
                <SortItem title='Комментарии' arg='comments' sortBy={props.sortBy} sortIcon={props.sortIcon}/>
                <SortItem title='Дата' arg='data' sortBy={props.sortBy} sortIcon={props.sortIcon}/>
            </div>
            <div className={classes.filter}>
                <FilterItem img={pencil} arg='text' filteredBy={props.filteredBy} filter={props.filterNewsFeed}/>
                <FilterItem img={camera} arg='photo' filteredBy={props.filteredBy} filter={props.filterNewsFeed}/>
                <FilterItem img={link} arg='link' filteredBy={props.filteredBy} filter={props.filterNewsFeed}/>
                <FilterItem img={video} arg='video' filteredBy={props.filteredBy} filter={props.filterNewsFeed}/>
                <FilterItem img={search} arg='search' filteredBy={props.filteredBy} filter={props.filterNewsFeed}/>
            </div>
        </div>
    </ContentBox>
}

export default Controls