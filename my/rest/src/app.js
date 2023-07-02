// // const express = require("express");
// // const app = express();
// // const port = process.env.PORT || 3000;

// // app.get("/",(req,res)=>{
// //     res.send("hello from the other sides.");
// // })
// // app.post("/students",(req,res)=>{
// //     res.send("hello from the other sides");
// // })

// // app.listen(port,()=>{
// //     console.log(`connection is setup at ${port}`);
// // })


// const express = require("express");
// require("../db/conn");
// const Student = require("../models/students");

// const app = express();
// const port = process.env.PORT || 3000;

// app.get("/",(req,res)=>{
//     res.send("hello from the other sides.");
// })

// app.post("/students",(req,res)=>{
//     console.log(req.body);
//     const user = new Student(req.body);
//         user.save().then(()=>{
//             res.send(user);
//         }).catch((e)=>{
//             res.send(e);
//         })
// })

// app.listen(port,()=>{
//     console.log(`connection is setup at ${port}`);
// })




const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send("hello from the other sides.");
})

app.post("/students",(req,res)=>{
    res.send("hello from the other sides.");
})
app.post("/temp",(req,res)=>{
    res.send("hello from the other sides.");
})

app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
})
