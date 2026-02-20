const fs=require('fs');

const fs1=require('fs').promises;

function dataWrite(){
    let statusmsg="";
    try{
        fs.writeFileSync('studentdata.txt',"Welcome to FS module in node js");
        console.log("data written successfully!!!!");
        statusmsg="data written successfully!!!!";

    }
    catch(err){
        console.log(err);
        statusmsg="Error: " + err;
    }

    return statusmsg;   
}

dataWrite();


function dataread(){
    let statusmsg="";
    try{
        
        const fdata=fs.readFileSync('studentdata.txt',{encoding:'utf-8'});
        statusmsg=fdata;
    }
    catch(err){
        statusmsg=err;
    }
    return statusmsg;
}

function daleteFile(){
    statusmsg="";
    try{
        fs.unlinkSync('studentdata.txt');
        statusmsg="File deleted successfully!!!";
    }
    catch(err){
        statusmsg=err;
        console.log(statusmsg);
    }
    return statusmsg;
}

async function deleteFileAsync(){
    statusmsg="";
    try{
        statusmsg=await fs1.readFile('student.json',{encoding:'utf-8'})
    }
    catch(err){
        statusmsg=err;

    }
    return statusmsg;
}
// const obj={}
module.exports={dataWrite,dataread,daleteFile,deleteFileAsync};