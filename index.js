const express = require('express');
const app = express();
const cors = require('cors')
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World awesome node paico ok!')
  })

  const users=[
    { id:1,  name: 'alamin',  phon:903798346, city:'dhjaka', bd:'bangladesh'},
    {name: 'akon', id:2, phon:903798346, city:'dhjaka', bd:'bangladesh'},
    {name: 'vai', id:3, phon:903798346, city:'dhjaka', bd:'bangladesh'}
  ]
  
// use quary pramiter

 app.get('/users',(req, res)=>{
   const search=req.query.search;
   if(search){
     const searchresult=users.filter(user=> user.name.toLocaleLowerCase().includes(search));

     res.send(searchresult);

     
   }
   else{
     res.send(users);
   }
 })
  // app method
 app.post('/users',(req, res)=>{
  const newuser=req.body;
  newuser.id=users.length;
  users.push(newuser);

   console.log('hitting the ', req.body)
  //  res.send(JSON.stringify(newuser))
  res.json(newuser);
 })

//  use dinamic api

  app.get('/users/:id', (req, res)=>{
    const id =req.params.id;
    const user=users[id]
    res.send(user);
   
  })

  app.get('/users/fruits/fujli',(req, res)=>{
    res.send('saed mango')


  })

 app.get('/users/fruits',(req, res)=>{
   res.send('hi hi sob pari')
 });


  app.listen(port, () => {
    console.log('helooo  hi',port)
  });