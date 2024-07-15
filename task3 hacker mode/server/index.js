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
    isartist:{type:Boolean,default:0},
    liked:Array,
    friendRequest:Array,
    friends:Array
   });
 const loginform = mongoose.models.login || mongoose.model('login',loginschema);////its like accesing the login collection we will
                                                                                  /// use this loginform evrwhere to acces this collection

const playlistschema = new mongoose.Schema({

  user:Number,
  name:String,
  songs:{type:Array,default:[]},
  id:Number
});

const playlist = mongoose.models.playlists || mongoose.model('playlists',playlistschema);

const privateschema = new mongoose.Schema({
  name: String,
  artist: String,
  preview_url: String,
  image: String,
});
const Private = mongoose.models.Privates || mongoose.model('Privates', privateschema);

 app.get('/auth', async (req,res)=>{

    try {
        const { username, password } = req.query; 
        const user = await loginform.findOne({ email: username, password: password });
        const name = user.name;
        console.log(name)
        if (user) {
          res.status(200)
          res.json({ success: true, message: 'Login successful', name:name , id: user.id, isartist:user.isartist});
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


    app.get('/giveuser', async (req,res)=>{

      try {
          const { user} = req.query; 
          const getuser = await loginform.findOne({ name:user});
          console.log(getuser)
          if (getuser) {
            res.status(200)
            res.json(getuser);
            return;
          } else {
            res.status(201)
            res.json({  message: 'NO such user' });
            return;
          }
        } catch (error) {
          res.status(500)
          res.json({ success: false, message: 'Server error', error });
        }
      });

      app.post('/sendrequest', async (req, res) => {
        const { senderid, receiverid } = req.body;
      
        const sender = await loginform.findOne({id:senderid});////dont use find coz it gives array remebnrer
        const receiver = await loginform.findOne({id:receiverid});
        
        const a = receiver.friends.some(friend => friend.id === sender.id);
        const b = receiver.friendRequest.some(request => request.id === sender.id);
// i=they shld be frieddnds also friendrequest should not be already sent
    if(!a && !b){
          try { 
         ///frind request is now a array of objects
          receiver.friendRequest.push({name:sender.name,id:sender.id,email:sender.email});//i can even send the full sender but password all are there
          await receiver.save();
          res.status(200).json({ message: 'Friend request sent' });
        } catch (error) {
          res.status(500).json({ message: 'Server error', error });
        }
      }
      });


      app.get('/friendrequests', async (req, res) => {//gives the request that receeived
        console.log(req.query)
        const id = req.query.id;
      
        try {
          const user = await loginform.findOne({id:id});
          console.log(user.friendRequest);
          res.status(200).json({ friendRequest: user.friendRequest });///sending back all the request that received
        } catch (error) {
          res.status(500).json({ message: 'Server error', error });
        }
      });
      


      app.post('/acceptrequest', async (req, res) => {
        const { receiverid, senderid } = req.body;
      
        try {
          const sender = await loginform.findOne({id:senderid});
          const receiver = await loginform.findOne({id:receiverid});

          receiver.friends.push({name:sender.name,id:sender.id,email:sender.email});
          sender.friends.push({name:receiver.name,id:receiver.id,email:receiver.email});
      ///once i accept this i hv to delete the frend request ryt
      receiver.friendRequest = receiver.friendRequest.filter((x) => x.id !== sender.id);
          await receiver.save();
          await sender.save();
      
          res.status(200).json({ message: 'Friend request accepted',friends: receiver.friends  });//sending this added frind
        } catch (error) {
          res.status(500).json({ message: 'Server error', error });
        }
      });

      
      app.get('/friends', async (req, res) => {
        const userid = req.query.id;
      
        try {
          const user = await loginform.findOne({id:userid})
          res.status(200).json({ friends: user.friends });//sending all the friends
        } catch (error) {
          res.status(500).json({ message: 'Server error', error });
        }
      });
      

      app.get('/getprivsongs', async (req, res) => {
        try {
          const songs = await Private.find({});
          res.json({ songs });
        } catch (error) {
          console.error('Error:', error);
          res.status(500).json({ error: ' server error' });
        }
      });
      
      app.post('/uploadsong', async (req, res) => {
        try {
          const { name, artist, preview_url, image } = req.body;
          console.log(req.body);
          console.log(name)
          const yu = {////////ALt way  const newSong = new PrivateSong({ name, artist, preview_url, image });
                      /////await newSong.save();
          name:name,
          artist: artist,
          preview_url:preview_url,
          image:image
        }
          Private.insertMany(yu);
        } catch (error) {
          console.error('Error uploading song:', error);
          res.status(500).json({ error: 'Internal server error' });
        }
      });



var id=0;
app.post('/register',  (req,res)=>{

        const { name, email, password,artist } = req.body;
        console.log(artist)
        if (!name || !email || !password) {
        res.json({ message: 'All fields are required' });
          return res.status(400)
          
        }
   
    try {
        const newUser = {
            name:name,
          email: email,
          password: password,
          id:id,
          isartist:artist
        }
        loginform.insertMany(newUser);
         console.log(loginform.find());
         res.status(200)
         res.json({ message: 'User registered successfully'});
         id++;
      } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    })


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
        // console.log(user.liked)
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

      const { name,id,user} = req.body;
     
  try {
      const newplaylist = {
          name:name,
         user:user,// this is the user id (for future private playlist)
         id:id
      }
      playlist.insertMany(newplaylist);
      // console.log(playlist.find());
       res.status(200)
       res.json({ message: 'playlist added'});

    } catch (error) {
      console.error('Error saving playlist:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })

  app.post('/likedplaylist',  async (req,res)=>{

    const { name,user,songs} = req.body;
   
try {
    const newplaylist = {
        name:name,
       user:user,// this is the user id (for future private playlist)
       id:100,
       songs:songs
    }
      await playlist.deleteMany({id:100})/// for the liked playlist i follow diff method from public priv
  //i delete the liked playlist evertume create a new one once the user logs in from the liked songs
      await playlist.create(newplaylist);

  ///****  ITRIED ALL WAYS BUT 2 LIKED DOCUMNETS ARE CREATED THATS THE INLY ISUUSE */    
    // console.log(playlist.find());
     res.status(200)
     res.json({ message: 'liked playlist added'});
  } catch (error) {
    console.error('Error saving playlist:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})


 

  app.get('/playlists', async (req,res)=>{

    const {id}= req.query;

    const party = await  playlist.findOne({name:"party"});//await is impp
 //console.log(party);
    if ( !party) {
      console.log(1)
      partyPlaylist = {
        name: "party",
        id: 200, ///using 200 coz i use it for public
        songs: []
      };
      playlist.create(partyPlaylist); 
    }
    try{

    const user = await playlist.find({$or:[{id:200},{id:id},{id:100}]}); //getting common playlist and private playlist and liked playlist
    res.status(200).json(user);
    }
    catch (err){
      console.log(err)
    }

  })

 app.get('/playlistdetails', async (req, res)=> {
  const {id}=req.query;
  try {
    const results = await playlist.find({$or:[{id:200},{id:id}]});//should not include liked playlist
    res.json(results);
    //console.log(results)
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
    if(!(results[0].songs.some((songalr)=>(songalr.id==song.id)))){
  //  console.log(results)
    results[0].songs.push(song);
    results[0].save();
   // console.log(results[0]);
   }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: ' Server Error' });
  }
}
) 
var noofplaylistadded=0
app.post('/partymode',async(req,res)=>{

  if(noofplaylistadded<2){
  const {partyplaylist}=req.body;
const l = await playlist.findOne({name:partyplaylist})///getting songs from given playlsit
const x= await playlist.findOne({name:"party"});
//console.log(x)// getting the party playlist
const updatedSongs = [...x.songs, ...l.songs];
x.songs=updatedSongs;
x.save();
noofplaylistadded++;
res.status(200).json({
  message: 'Playlist updated with new songs',
});
  }
  else{
    const x = await playlist.findOne({name:"party"});
    console.log(3434)
    console.log(noofplaylistadded)
    x.songs=[];
    x.save(); 
    noofplaylistadded=0;
  }
})

app.get('/lyrics', async (req, res) => {
  const { artist, song } = req.query;
  const query = `${song} ${artist}`;
  if (!artist || !song) {
    res.status(400).json({ error: 'Artist and song parameters are required' });
  }

  try {
    const url = `https://paxsenixofc.my.id/server/getLyricsMusix.php?q=${query}&type=default`;
    const response = await axios.get(url);
     res.json(response.data.trim().replace(/\[\d{2}:\d{2}\.\d{2}\]/g, '').substring(0,700) || 'no lyric found')
     //// the replace is i copied from internet to remove the timestamps
     //// if u want full lyrics just change the psoition  fixed from audioplayer( so it wont overlap) and remove substring
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error' });
  }
});
    
/////SPOTIFY TOKEN AND ACCESS from the website directly
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