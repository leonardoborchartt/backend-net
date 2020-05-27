const port = 3000
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const User = require('./User')

const app = express();


mongoose.connect('mongodb+srv://migrate:migrate@mongodb-caszl.gcp.mongodb.net/test_clients?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true })
 


app.use(express.json());// receber info do front
app.use(cors());// usa o cors para o front poder chamar o back


/////////////////////////////////////////////////////////
app.get('/users', async (req, res) => {
    const users = await User.find();
    return res.json(users);
});

app.get('/users/:id', async (req, res) => {
    const users = await User.findById(req.params.id);
    return res.json(users);
});

app.post('/users', async (req, res) => {
    const users = await User.create(req.body);
    console.log("criou o user " + users.name);
    return res.json(users);
});

app.put('/users/:id', async (req, res) => {
    const users = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.json(users);
});

app.delete('/users/:id', async (req, res) => {
    const users = await User.findByIdAndDelete(req.params.id);
    console.log("Deletou " + users.name);

    return res.json();

});



app.listen(process.env.PORT || port, () => {
    console.log(`Server is RUNNING on port: ${port}`)
  })

