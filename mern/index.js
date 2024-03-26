//  const fs = require('fs');

//  fs.readFile('./read/text1.txt','utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
//  })

//  //exit on uncaought errors
//  process.on('uncaughtException',err=>{
//     console.error(`There was an uncought error: $(err)`);
//     process.exit(1);
//  })


//  const fs = require('fs');
//  const path = require('path');

//  fs.readFile(path.join(__dirname,'read','text1.txt'),'utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
//  })

//  //exit on uncaought errors
//  process.on('uncaughtException',err=>{
//     console.error(`There was an uncought error: ${err}`);
//     process.exit(1);
//  })


//  const fs = require('fs');
//  const path = require('path');

//  fs.writeFile(path.join(__dirname,'read','reply.txt'),'this message is going to store',(err)=>{
//     if(err) throw err;
//     console.log("this is comminted by me");
//  })

//   fs.appendFile(path.join(__dirname,'read','reply.txt'),' this message is going to  appened',(err)=>{
//     if(err) throw err;
//     console.log("file is appened");
//  })

//  //exit on uncaought errors
//  process.on('uncaughtException',err=>{
//     console.error(`There was an uncought error: ${err}`);
//     process.exit(1);
//  })



// 
//  const fsPromises = require('fs').Promises;
//  const path = require('path');

// const fileOps = async ()=>{
//    try{
//       const data = await fsPromises.readFile(path.join(__dirname,'read','text1.txt'),'utf8')
//       console.log(data);
//       await fsPromises.writeFile(path.join(__dirname,'read','text2.txt'),data);
//       await fsPromises.appendFile(path.join(__dirname,'read','text2.txt'),'\n Nice to meet you');
//       await fsPromises.rename(path.join(__dirname,'read','text1.txt'),path.join(__dirname,'read','promisecomplete.txt'));
//       const newData = await fsPromises.readFile(path.join(__dirname,'read','text1.txt'),'utf8')
//       console.log(newData);
//    }catch(err){
//       console.error(err);
//    }
// }
//  //exit on uncaought errors
//  process.on('uncaughtException',err=>{
//     console.error(`There was an uncought error: ${err}`);
//     process.exit(1);
//  })



// LECTURE - 3
// const { format } = require('date-fns');
// console.log(format(new Date(), 'yyyyMMdd\tHH:mm:ss'))
// console.log("hey there ");

//LECTURE - 4
//const { EventEmitter } = require('stream');
const logEvents = require('./logEvents')
const EventEmitter = require('events');

class MyEmitter extends EventEmitter { };

//initialize object
const myEmitter = new MyEmitter();

//add listener for the log event
myEmitter.on('log',(msg)=>{
   logEvents(msg)
})

setTimeout(()=>{
   //Emit event
   myEmitter.emit('log','Log event emitted\n');
},2000)