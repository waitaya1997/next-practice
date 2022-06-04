import router from "next/router";
import React , {Fragment} from "react"
import NewMeetupForm from "../../components/meetups/NewMeetupForm"

function NewMeetup() {

    async function addMeetupHandler(enterData) {
        // console.log(enterData)
        const response = await fetch('/api/new-meetup' , {
            method : 'POST' ,
            body : JSON.stringify(enterData),
            header : {
                "content-Type" : 'application/json'
            }
        })
        const data = await response.json();
        console.log(data)
        router.push("/")
    }
    

    return <NewMeetupForm onAddMeetup = {addMeetupHandler}/>
}

export default NewMeetup