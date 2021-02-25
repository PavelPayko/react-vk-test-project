import React, {useState} from 'react'

const PageContent = props => {
    const [inputValue, setInputValue] = useState('')
    const setInputValueHandler = (e) => setInputValue(e.target.value)
    const getGroupsHandler = () => props.getGroups(inputValue)
    return <div>
        <input type="text"
               value={inputValue}
               placeholder='search group'
               onChange={setInputValueHandler}
        />
        <button onClick={getGroupsHandler}>Search</button>
    </div>
}

export default PageContent