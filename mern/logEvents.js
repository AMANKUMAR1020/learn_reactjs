const { format } = require('date-fns');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async(message)=>{
   const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss\n')}`;
   const logItem = `${dateTime}\t${message}`;
   console.log(logItem);
   try{
      if(!fs.existsSync(path.join(__dirname,"logs"))){
         await fsPromises.mkdir(path.join(__dirname,'logs'))
      }
      await fsPromises.appendFile(path.join(__dirname,'logs','eventlog.txt'),logItem)
   }catch(err){
      console.log(err);
   }
}

module.exports = logEvents;