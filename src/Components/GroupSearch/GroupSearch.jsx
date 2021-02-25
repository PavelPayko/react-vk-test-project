import React, {useState} from 'react'
import classes from './GroupSearch.module.css'

const GroupSearch = props => {
    //hooks
    const [inputValue, setInputValue] = useState('')

    //handlers
    const setInputValueHandler = (e) => setInputValue(e.target.value)
    const getGroupsHandler = () => props.getGroups(inputValue)
    const chooseGroupHandler = groupId => props.getNewsFeed(groupId)

    let content = props.groupsData.map(item => (
        <div key={item.id} onClick={() => chooseGroupHandler(item.id)} className={classes.itemWrapper}>
            <img src={item.photo_100} alt="logo"/>
            <div className={classes.itemDescription}>
                <span>{item.name}</span>
            <span>{item.screen_name}</span>
            </div>
        </div>
    ))
    return <div>
        <input type="text"
               value={inputValue}
               placeholder='search group'
               onChange={setInputValueHandler}
        />
        <button onClick={getGroupsHandler}>Search</button>
        <div>
            {content}
        </div>
    </div>
}

export default GroupSearch