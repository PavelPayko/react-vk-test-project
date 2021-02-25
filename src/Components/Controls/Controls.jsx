import React from 'react'
import Button from "../commonComponents/Button/Button";
import {camera, link, pencil, search, video} from "../../svg/svg";
import classes from './Controls.module.css'

const Controls = props => {

    const FilterItem = props => <div className={classes.filterItem}><span className={classes.filterItemContent}>{props.img}</span></div>
    const SortItem = props => <div className={classes.sortItem}><span className={classes.sortItemContent}>{props.title}</span></div>
    return <div>
        <h2 className={classes.title}>Lenta</h2>
        <hr/>
        <div className={classes.sort}>
            <SortItem title='Лайки'/>
            <SortItem title='Репосты'/>
            <SortItem title='Комментарии'/>
            <SortItem title='Дата'/>
        </div>
        <div className={classes.filter}>
            <FilterItem img={pencil} />
            <FilterItem img={camera} />
            <FilterItem img={link} />
            <FilterItem img={video} />
            <FilterItem img={search} />
        </div>
    </div>
}

export default Controls