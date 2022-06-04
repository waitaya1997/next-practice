import {MongoClient} from "mongodb"



async function handler(req,res){    
if(req.method === "POST"){
    const data = req.body;
    const incomeData = JSON.parse(data)
    console.log(incomeData.title)

    const client = await MongoClient.connect('mongodb+srv://admin-wai:waiwai@cluster0.vzint.mongodb.net/meetup');
    const db = client.db();
    const meetupsCollection = db.collection('meetups')
    const result = await meetupsCollection.insertOne(incomeData)
    console.log(result)
    }
}

export default handler