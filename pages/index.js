import React , {Fragment , useEffect,useState} from "react"
import MeetupList from "../components/meetups/MeetupList"
import Layout from "../components/layout/Layout"
import {MongoClient} from "mongodb"



const MEETUPS = [
    {
        id : 'm1',
        title : "First Meetup",
        image : "https://pix10.agoda.net/geo/city/15470/1_15470_02.jpg",
        address : "Paris"

    },
    {
        id : 'm2',
        title : "Second Meetup",
        image : "https://pix10.agoda.net/geo/city/15470/1_15470_02.jpg",
        address : "Paris"
    }
]





function Home(props) {
    return <Fragment>
        <MeetupList meetups = {props.meetups}/>
    </Fragment>
}



export async function getStaticProps() {

    const client = await MongoClient.connect('mongodb+srv://admin-wai:waiwai@cluster0.vzint.mongodb.net/meetup');
    const db = client.db();
    const meetupsCollection = db.collection('meetups')
    const meetups = await meetupsCollection.find().toArray();
    console.log("STATIC")
    return {
        props : {
            meetups : meetups.map(meetup => ({
                title : meetup.title,
                address : meetup.address,
                image : meetup.image,
                id : meetup._id.toString()
            }))
        },
        revalidate: 10
    }
}



export default Home