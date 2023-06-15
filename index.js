import { MongoClient} from "mongodb";//getting function from library
import { mongoURI } from "./secrets.js";//getting our secret connection string

//connect to mongoDB cluster using secret connection string
const connection = new MongoClient(mongoURI);

await connection.connect();//openng conection to cluster

const db = connection.db('Cluster0');//connecting to the specific cluster

await db.collection('students').insertOne({name: 'John Therlonge', age:26 });//add student

const results = await db.collection('students').findOne({name: 'John Therlonge'});//get student

console.log(results);

connection.close();//disconnect