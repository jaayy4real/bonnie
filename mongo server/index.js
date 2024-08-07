const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors");
const User = require('./models/user.model')


const app = express()
app.use(express.json())

app.use(cors());

// You can also configure CORS with specific options
const corsOptions = {
  origin: "http://127.0.0.1:5500", // Replace with the allowed origin(s)
  methods: ["GET", "POST"], // Allowed methods
//   allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
};

// Use CORS with the specified options
app.use(cors(corsOptions));


app.get('/', (req, res) => {
    res.send('hello')
})

app.post('/api/user', async (req, res) => {
    try {
        const body = req.body
        console.log(body);
       const user=  await User.create(req.body)
        res.status(200).json({message:'successful'})

    } catch (error) {

        res.status(500).json({ message: error.message})
        
    }
})

mongoose.connect(
  "mongodb+srv://ekpojeffrey:tGpZ0SM6MrYz6Ord@backend.nxmd8.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=backend"
)
.then(()=>{console.log('connected successfully');
    app.listen(3000, ()=> {console.log('listening')})
}) 
.catch(()=> console.log('FAILED'))