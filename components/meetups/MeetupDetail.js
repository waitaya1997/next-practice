import React , {Fragment} from "react"
import {useRouter} from "next/router"
import classes from  "./MeetupDetail.module.css"



function Detail(props) {

    const router = useRouter()
    const link = router.query.meetupId

    return <section className={classes.detail}>
        
        <img src = {props.image} />
        <h1 className={classes.title}>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.description}</p>

    </section>
}




export default Detail