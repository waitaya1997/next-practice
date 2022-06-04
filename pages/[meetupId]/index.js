import React , {Fragment} from "react"
import Detail from "../../components/meetups/MeetupDetail"
import {useRouter} from "next/router"
import {MongoClient, ObjectId} from "mongodb"



function DetailPage(props) {

    

    return <Detail
        image = {props.image}
        title = {props.title}
        address = {props.address}
        description = {props.description}
    />
}

export async function getStaticPaths(){
    const client = await MongoClient.connect('mongodb+srv://admin-wai:waiwai@cluster0.vzint.mongodb.net/meetup');
    const db = client.db();
    const meetupsCollection = db.collection('meetups')
    const meetups = await meetupsCollection.find({},{_id: 1}).toArray();
    const link = meetups.map((meetup) => ({
        params : {meetupId: meetup._id.toString()}
    }))
    
    return {
        paths : link,
        fallback : false
    }
}

export async function getStaticProps(context){


    const meetupid = context.params.meetupId;
    console.log(meetupid)
    var selectId = new ObjectId(meetupid)
    console.log(selectId)

    const client = await MongoClient.connect('mongodb+srv://admin-wai:waiwai@cluster0.vzint.mongodb.net/meetup');
    const db = client.db();
    const meetupsCollection = db.collection('meetups')

    const selectedMeetUp = await meetupsCollection.findOne({_id : selectId})

    
    return {
        props : {
            id : meetupid,
            image : selectedMeetUp.image,
            title : selectedMeetUp.title,
            address : selectedMeetUp.address,
            description : selectedMeetUp.description
        }
    }
}

export default DetailPage