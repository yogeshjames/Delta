const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/music', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('Connected to MongoDB');
  }).catch(err => {
    console.error('Error connecting to MongoDB', err);
  });

  const loginschema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    id:Number,
    liked:Array
   });
 const loginform = mongoose.models.login || mongoose.model('login',loginschema);

const playlistschema = new mongoose.Schema({

  user:Number,
  name:String,
  songs:{type:Array,default:[]},
  id:Number
});

const playlist = mongoose.models.playlists || mongoose.model('playlists',playlistschema);



 app.get('/auth', async (req,res)=>{

    try {
        const { username, password } = req.query; 
        const user = await loginform.findOne({ email: username, password: password });
        const name = user.name;// u can even use if statement and check saved passs is current pass
        console.log(name)
        if (user) {
          res.status(200)
          res.json({ success: true, message: 'Login successful', name:name , id: user.id});
          return;
        } else {
          res.status(201)
          res.json({ success: false, message: 'Invalid email or password' });
          return;
        }
      } catch (error) {
        res.status(500)
        res.json({ success: false, message: 'Server error', error });
      }
    });

var id=0;
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Check if the email already exists
        const existing = await loginform.findOne({ email: email });

        if (existing) {
            return res.status(400).json({ message: 'Email already exists' });
        }

        const newUser = {
            name: name,
            email: email,
            password: password,
            id: id
        };

        await loginform.insertMany(newUser);
        console.log(await loginform.find());

        res.status(200).json({ message: 'User registered successfully' });
        id++;
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

    app.get('/likedd', async (req,res)=>{

      const kk=req.query.id;
      try{
      const user = await loginform.findOne({ id: kk }); 
      res.status(200).json({ likedsongs: user.liked });

  
      }
      catch (err){
        console.log(err)
      }

    })


    app.post('/like', async (req, res) => {
      const { userId, songId } = req.body;
    
      try {
        const user = await loginform.findOne({ id: userId });
    
        if (!user) {
          res.status(404).json({ message: 'User not found' });
          return;
        }
    
        if (!user.liked.includes(songId)) {
          user.liked.push(songId);
          await user.save();
        }
    
        res.status(200).json({ message: 'Song liked successfully' });
      } catch (error) {
        console.error('Error liking song:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    });


    app.post('/unlike', async (req, res) => {
      const { userId, songId } = req.body;
    
      try {
        const user = await loginform.findOne({ id: userId });
    
        if (!user) {
          res.status(404).json({ message: 'User not found' });
          return;
        }
    
        if (user.liked.includes(songId)) {
          const index = user.liked.indexOf(songId);
         user.liked.splice(index, 1);//REMOVING THE SONG
         console.log(user.liked)
         await user.save();
        }
    
        res.status(200).json({ message: 'Song liked successfully' });
      } catch (error) {
        console.error('Error liking song:', error);
        res.status(500).json({ message: 'Internal Server Error' });
      }
    });



var count=0;
app.post('/newplaylist',  (req,res)=>{

      const { name,user} = req.body;
     
  try {
      const newplaylist = {
          name:name,
         user:user,// this is the user id (for future private playlist)
         id:count
      }
      playlist.insertMany(newplaylist);
       console.log(playlist.find());
       res.status(200)
       res.json({ message: 'playlist added'});
       count++
    } catch (error) {
      console.error('Error saving playlist:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })



 

  app.get('/playlists', async (req,res)=>{
    try{
    const user = await playlist.find(); 
    res.status(200).json(user);
    }
    catch (err){
      console.log(err)
    }

  })

 app.get('/playlistdetails', async (req, res)=> {
  try {
    const results = await playlist.find({});
    res.json(results);
    console.log(results)
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: ' Server Error' });
  }
}
) 

app.post('/addtoplaylist', async (req, res)=> {

  const { id , song}=req.body;
  try {
    
    const results = await playlist.find({_id:id});
 if(!(results[0].songs.some((songalr)=>(songalr.id==song.id)))){//prevsly song not exist
   // console.log(results)
    results[0].songs.push(song);
    results[0].save();
    console.log(results[0]);}
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: ' Server Error' });
  }
}
) 
    
/////SPOTIFY TOKEN AND ACCESS
    const client_id = '2d8593b4464f46a8897a8472948333d5';
    const client_secret = 'a7183a07150343c1935e362e596b0fba';
    
    app.use(bodyParser.json());
    
    app.post('/get-token', async (req, res) => {
      const authOptions = {
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        headers: {
          'Authorization': 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: 'grant_type=client_credentials'
      };
    
      try {
        const response = await axios(authOptions);
        res.json(response.data);
        console.log(res.json)
      } catch (error) {
        res.json({ error: error.message });
        console.log(error)
      }
    });
       
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
