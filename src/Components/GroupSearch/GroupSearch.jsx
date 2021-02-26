import React, {useState} from 'react'
import classes from './GroupSearch.module.css'
import ContentBox from "../commonComponents/ContentBox/ContentBox";

const GroupSearch = props => {
    //hooks
    const [inputValue, setInputValue] = useState('')

    //handlers
    const setInputValueHandler = (e) => setInputValue(e.target.value)
    const chooseGroupHandler = groupId => props.getNewsFeed(groupId)
    const submitHandler = e => {
        e.preventDefault()
        props.getGroups(inputValue)
    }

    let content = props.groupsData.map(item => (
        <ContentBox>
            <div key={item.id} onClick={() => chooseGroupHandler(item.id)} className={classes.itemWrapper}>
                <img src={item.photo_100} alt="logo" className={classes.itemImg}/>
                <div className={classes.itemDescription}>
                    <span>{item.name}</span>
                    <span>{item.screen_name}</span>
                </div>
            </div>
        </ContentBox>
    ))
    return <div>
        <form action="#" onSubmit={submitHandler} className={classes.form}>
            <input type="text"
                   value={inputValue}
                   placeholder='search group'
                   onChange={setInputValueHandler}
                   className={classes.input}
            />
            <button className={classes.button}>Search</button>
        </form>
        <div>
            {content}
        </div>
    </div>
}

export default GroupSearch