// npm init -y
// npm i nodemon
// npm start

const apidata=require('./apicalling');


const http = require('http');
const PORT=4004; 

const server=http.createServer(async(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    // res.setHeader('Content-type','application/json');
    // res.end(JSON.stringify({message:"Welcome to CSBFSDV Backend"}));

   if(req.url=="/msg" && req.method=="GET"){
        res.setHeader('Content-type','text/html');
        res.end("<h1>Welcome to CSBFSDV Backend</h1>");
    }

    else if(req.url=="/data" && req.method=="POST"){
        res.setHeader("Content-type",'application/json');
        const jsondata ={
            name:"Akash",
            age:22,
            city:"Pune"
        }
        res.end(JSON.stringify({msg:jsondata}));
    }

    else if(req.url=="/data" && req.method=="GET"){
        res.setHeader("Content-type",'application/json');
        const jsondata =await apidata(20,200);
        res.end(JSON.stringify({msg:jsondata}));
    }



    else{
        res.setHeader('Content-type','text/html');
        res.end("<h1 style='color:red'>Welcome to CSBFSDV Backend</h1>");
    }
})

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});


