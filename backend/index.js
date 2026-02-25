const http=require('http');
const fs=require('fs').promises;
const PORT=4004;
const apidata=require('./apiCalling')
const {dataWrite,dataread,daleteFile,deleteFileAsync}=require('./usefsmodule')
const server=http.createServer(async (req,res)=>{

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
// res.setHeader('Content-Type','application/json');
// res.end("<h2 style=color:red>Welcome to Node Server</h2>");
if(req.url=="/msg" && req.method=="GET"){
   res.setHeader("Content-Type","text/html");
   res.end("<h2>Greeting of the day!!!</h2>") 
}
else if(req.url=="/data" && req.method=="POST"){
res.setHeader("Content-Type","application/json");
const jsondata={
    name:"rahul",
    branch:"CS",
    college:"ABES Engineering College"
}
res.end(JSON.stringify({msg:jsondata}))

}
else if(req.url=="/data" && req.method=="GET"){
res.setHeader("Content-Type","application/json");
      const jsondata=await apidata();
res.end(JSON.stringify({msg:jsondata}))

}

else if(req.url=="/datawrite" && req.method=="GET"){
res.setHeader("Content-Type","application/json");
      const jsondata=dataWrite();
res.end(JSON.stringify({msg:jsondata}))

}


else if(req.url=="/dataread" && req.method=="GET"){
res.setHeader("Content-Type","application/json");
      const jsondata=dataread();
res.end(JSON.stringify({msg:jsondata}))

}

else if(req.url=="/deletefile" && req.method=="GET"){
res.setHeader("Content-Type","application/json");
      const jsondata=daleteFile();
res.end(JSON.stringify({msg:jsondata}))

}

else if(req.url=="/datareadasync" && req.method=="GET"){
res.setHeader("Content-Type","application/json");
      const jsondata=await deleteFileAsync();
res.end(JSON.stringify({msg:jsondata}))

}


// fetch the data and store the data in a file  
else if(req.url=="/register" && req.method=="POST"){

    let arr=[];
    let body="";
    req.on('data',chunks=>{
        body+=chunks;
    })

    req.on('end', async ()=>{
        const {name,email,password}=JSON.parse(body); // parse is used to convert the chunk data into json format
        // arr.push({name,email,password});
        // dataWrite(arr);
        // console.log(name + " " + email + " " + password);
        const fdata=await fs.readFile('Student.json',{encoding:'utf-8'})
        arr=JSON.parse(fdata)

        const status=arr.find(ele=>ele.email==email)
        if(status){
            res.end(JSON.stringify({msg:"User already exists"}))
        }else{
            arr.push({name,email,password})
            await fs.writeFile('Student.json',JSON.stringify(arr,null,2))
            res.end(JSON.stringify({msg:"User registered successfully"}))
        }


    })



}

else if(req.url=="/login" && req.method=="POST"){
    let arr=[];
    let body="";
    req.on('data',chunks=>{
        body+=chunks;
    })
    req.on('end', async ()=>{
        const {email,password}=JSON.parse(body); // parse is used to convert the chunk data into json format
        // arr.push({name,email,password});
        // dataWrite(arr);
        // console.log(name + " " + email + " " + password);
        const fdata=await fs.readFile('Student.json',{encoding:'utf-8'})
        arr=JSON.parse(fdata)
        const status=arr.find(ele=>ele.email==email && ele.password==password)
        if(status){
            res.setHeader("Content-Type","application/json");
            res.end(JSON.stringify({msg:"Login successful"}))
        }else{
            res.setHeader("Content-Type","application/json");
            res.end(JSON.stringify({msg:"Invalid email or password"}))
        }


    })

}

else{
res.setHeader("Content-Type","text/html");
   res.end("<h2 style=color:red>Invalid request</h2>") 

}

})

server.listen(PORT,()=>{
    console.log("Server is listening on "+PORT)
})