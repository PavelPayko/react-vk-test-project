import React, {useState} from 'react'

const PageContent = props => {
    //hooks
    const [inputValue, setInputValue] = useState('')

    //handlers
    const setInputValueHandler = (e) => setInputValue(e.target.value)
    const getGroupsHandler = () => props.getGroups(inputValue)
    const chooseGroupHandler = groupId => props.getNewsFeed(groupId)

    let content
    if (props.groupsData) {
        content = props.groupsData.map(item => (
            <div key={item.id} onClick={() => chooseGroupHandler(item.id)}>
                <span>{item.name}</span>
                <img src={item.photo_100} alt="logo"/>
            </div>
        ))
    } else if (props.newsFeed) {
        content = props.newsFeed.map(item => {
            let attachments = null
            if (item.attachments) {
                attachments = item.attachments.map(item => {
                    if (item.type === 'photo') {
                        return <div>
                            <img src={item.photo.sizes[3].url} alt="a"/>
                        </div>
                    }
                    if (item.type === 'link') {
                        return <div>
                            <a href={item.src}>{item.title}</a>
                        </div>
                    }
                    if (item.type === 'video') {
                        return <div>
                            <video src={item.player} />
                        </div>
                    }
                    return console.log(item)

                })

            }
//             let timestamp = item.date
//             var itemDate = new Date(timestamp * 1000);
//             var hours = itemDate.getHours();
//             var minutes = "0" + itemDate.getMinutes();
//             var seconds = "0" + itemDate.getSeconds();
//
// // Will display time in 10:30:23 format
//             var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
//
//             console.log(formattedTime);
            return <div key={item.id}>
                <span>Date: {item.date}</span>
                <span>Commmments: {item.comments.count}</span>
                <span>Likes: {item.likes.count}</span>
                <span>Reposts: {item.reposts.count}</span>
                <h2>{item.name}</h2>
                <p>{item.text}</p>
                {attachments}
            </div>
        })
    }
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

export default PageContent