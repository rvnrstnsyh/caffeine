import { MongoClient } from '@mongo'

const client: MongoClient = new MongoClient()

// Connecting to a Local Database
await client.connect('mongodb://127.0.0.1:27017')

// Connecting to a Mongo Atlas Database
// await client.connect({
// 	db: '<db_name>',
// 	tls: true,
// 	servers: [
// 		{
// 			host: '<db_cluster_url>',
// 			port: 27017,
// 		},
// 	],
// 	credential: {
// 		username: '<username>',
// 		password: '<password>',
// 		db: '<db_name>',
// 		mechanism: 'SCRAM-SHA-1',
// 	},
// })

// Connect using srv url
// await client.connect('mongodb+srv://<username>:<password>@<db_cluster_url>/<db_name>?authMechanism=SCRAM-SHA-1')

export default client
