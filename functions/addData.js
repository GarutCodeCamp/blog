const { createClient } = require('@astrajs/collections');
require('dotenv').config();

exports.handler = async (event, context) => {
    const astraClient = await createClient({
        astraDatabaseId: process.env.ASTRA_DB_ID,
        astraDatabaseRegion: process.env.ASTRA_DB_REGION,
        applicationToken: process.env.ASTRA_DB_APPLICATION_TOKEN,
    });
    const messageCollection = astraClient.namespace("blogdb").collection("messages");
    try {
        // const newUser = await messageCollection
        const testMessage = await messageCollection.create("blog", {
            test: "this is a test Message",
            name: "ahmad junaedi",
            desc: "ini desct",
        });
        return {
            statusCode: 200,
            body: JSON.stringify(testMessage)
        }
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify("error")
        }
    }
}