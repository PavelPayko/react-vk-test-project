import React from 'react'
import {comment, like, repost} from "../../svg/svg";
import classes from './PageContent.module.css'

const PageContent = props => {

    //handlers

    const formatDate = timestamp => {
        const itemDate = new Date(timestamp * 1000);
        let date = itemDate.getDate()
        let month = itemDate.getMonth() + 1
        if (month < 10) {
            month = '0' + month
        }
        let year = itemDate.getFullYear().toString().substring(2)
        let hours = itemDate.getHours()
        let minutes = itemDate.getMinutes()
        return `${date}.${month}.${year} / ${hours}:${minutes}`;
    }

    let content = props.newsFeed.map(item => {
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
                        <video src={item.player}/>
                    </div>
                }
                return console.log(item)

            })

        }
        const formattedDate = formatDate(item.date)
        return <div key={item.id} className={classes.postWrapper}>
            <div className={classes.postInfoWrapper}>
                <span className={classes.date}>{formattedDate}</span>
                <div className={classes.interaction}>
                    <div className={classes.postInfo}>
                        <div className={classes.postInfoImg}>{like}</div>
                        <span>{item.likes.count}</span>
                    </div>
                    <div className={classes.postInfo}>
                        <div className={classes.postInfoImg}>{repost}</div>
                        <span>{item.reposts.count}</span>
                    </div>
                    <div className={classes.postInfo}>
                        <div className={classes.postInfoImg}>{comment}</div>
                        <span>{item.comments.count}</span>
                    </div>
                </div>
            </div>
            <h2>{item.name}</h2>
            <p>{item.text}</p>
            <div className={classes.attachments}>{attachments}</div>
        </div>
    })
    return <div>
        {content}
    </div>
}

export default PageContent