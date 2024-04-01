import { getMongoClient } from "./mongo.js";
import { getMqttClient } from "./mqtt.js";
import event from "./event.js";

// for test commit

async function handler(event) {
    console.log("started handler function")

    let mqttClient = await getMqttClient(event)
    let mongoClient = await getMongoClient(event)
    
    console.log(mongoClient == null)
}

await handler(event)