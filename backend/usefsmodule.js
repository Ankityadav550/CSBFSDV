const fs=require('fs');

const fs1=require('fs').promises;

function dataWrite(){
    let statusmsg="";
    try{
        fs.writeFileSync('studentdata.text',"Welcome to FS module in node js");
        console.log("data written successfully!!!!");
        statusmsg="data written successfully!!!!";

    }
    catch(err){
        console.log(err);
        statusmsg="Error: " + err;
    }
    

}

dataWrite();

module.exports=dataWrite;