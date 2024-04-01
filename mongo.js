import { MongoClient, ServerApiVersion } from "mongodb"

export async function getMongoClient(event) {
    const key = event.mongo_key
    console.log("mongo key - " + key)

    const uri2 = `mongodb+srv://team19:${key}@userdata.fstrmtf.mongodb.net/?retryWrites=true&w=majority&appName=UserData`

    const uri = "mongodb+srv://team19:cjmaPassword%9@userdata.fstrmtf.mongodb.net/?retryWrites=true&w=majority&appName=UserData"

    console.log("uri - " + uri)

    let client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    })

    try {
        // connect
        await client.connect()
        console.log("connected to mongo db")
        // ping to see if working
        await client.db("UserData").command({ping: 1})

        return client
    }
    catch (e) {
        return null
    }
}