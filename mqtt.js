import mqtt, { connect } from 'mqtt';//imports library and credetials neccessary for the program to use
// const client = connect('mqtt://test.mosquitto.org'); 

//Test wether the client has successfully connected to the broker
// client.on('connect', () => {
// console.log('Connected to HiveMQ');//will output a simple message if successful
// });

export function buildConnectionProfile(event) {
  return {
    host: event.mqtt_host,
    port: event.mqtt_port,
    username: event.mqtt_app_id,
    password: event.mqtt_app_key,
    protocol: event.mqtt_protocol,
    connectTimeout: event.mqtt_connect_timeout
  }
}

export async function getMqttClient(event) {
  let connectionParams = buildConnectionProfile(event)
  let client = await mqtt.connectAsync(connectionParams)

  return client
}



const sendNotification = (topic, message) => {
  client.publish(topic, message, (error) => {
    if (error) {
      console.error('Error publishing notification:', error);
    } else {
      console.log('Notification published successfully');
    }
  });
};

// app.post('/send-notification', (req, res) => {
  // const { topic, message } = req.body;
  // sendNotification(topic, message);
  // res.send('Notification sent');
// });

// client.on('connect', () => {
  // client.subscribe('notification-topic', (error) => {
    // if (!error) {
      // console.log('Subscribed to notification-topic');
    // }
  // });
// });

//Once client is connect and has a topic
// client.on('message', (topic, message) => {
  // console.log('Received message:', message.toString());
  // Display notification
// });
