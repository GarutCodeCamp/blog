const { createClient } = require('@astrajs/rest');
require('dotenv').config()
exports.handler = async (event, context, cb) => {
    const basePath = `http://${process.env.ASTRA_DB_ID}-${process.env.ASTRA_REGION}.apps.astra.datastax.com/api/rest/v2/schemas/blogdb/blogdb/tables`
    try {
        const table = await fetch(`${basePath}`, {
            method: 'POST',
            headers: {
                "X-Cassandra-Token": `${process.env.ASTRA_DB_APPLICATION_TOKEN}`,
                "Content-Type": 'application/json',
                Accept: 'application/json',
            },
            body: {
                name: "users",
                "columnDefintions": [
                    {
                        "name": "firstname",
                        "typeDefinition": "text"
                    },
                    {
                        "name": "lastname",
                        "typeDefinition": "text"
                    },
                    {
                        "name": "favorite_color",
                        "typeDefinition": "text"
                    }
                ],
                "primaryKey":
                {
                    "partitionKey": ["firstname"],
                    "clusteringKey": ["lastname"]
                }
            }
        }).then(res => res.json()).then(data => data);
        return {
            statusCode: 200,
            body: JSON.stringify(table)
        }
    } catch (e) {
        return {
            statusCode: 403,
            body: JSON.stringify("failed")
        }
    }
}