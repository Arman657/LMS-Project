import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectDB from './configs/mongodb.js';
import { clerkWebhooks } from './controllers/webhooks.js';



//Initialize Express
const app = express();

//connect to the database
await connectDB()



//Middlewares
app.use(cors());



//Routes
app.get('/', (req, res) => res.send('api working'))
app.post('/clerk', express.json(), clerkWebhooks)


//PORT
const PORT = process.env.PORT || 5000;


//listen
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})