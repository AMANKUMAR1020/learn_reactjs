
/*// NOTE-- this is important

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

*/




/*

import React from 'react';   // after 17th version we no need to write ' import React from 'react'; '  on line no. 28th
   //because it already mentioned 
import ReactDOM from 'react-dom';

import './Style.css'


function Fun1()     // NOTE--Always use first letter capital
{
  return (<div className='Design'>
  
  <h1>iNeuron India</h1>  
  <Blockchain/>
  <Blockchain/>
  <Blockchain/>
  <Blockchain/>
  <Reactjs/>
  </div>); // it have only one kind of indentation
}

const Blockchain = () => {
return <h4>Blockchain + react is Deadly </h4>
}

const Reactjs = () => {
return <h4> i like react js</h4>
}

ReactDOM.render(<Fun1/>, document.getElementById('root'));               // we can also write that   <fun1/>  and also like that    <fun1></fun1>
//,document.getElementById('root'));              //document.getElementById('root')); --help to attach with index due to 'root'

*/


// new project

/*
import React from 'react';
import  ReactDOM  from 'react-dom';
//import './Style.css';

function Aman()
{
  return (
    <section >
      <h1> we are give some to you</h1>
           <Book_name/>
           <Book_image/>
           <Auther_name/>
    </section>
  );
}

function Book_name(){
  return <h3>book name is abc</h3>
}

function Auther_name(){
  return <h3>hoo la la la</h3>
}

function Book_image(){
  return <img src="https://th.bing.com/th/id/OIP.dCWxY8VYOWFkU7VpexoaKwHaKX?pid=ImgDet&rs=1" alt="this was the photo"/>;
  }


ReactDOM.render(<Aman/>,document.getElementById('root'));

*/



/*
import React from 'react';
import  ReactDOM  from 'react-dom';
import './Style.css';

function Aman()
{
  return (
    <article className='Booklist'>
      <h1> we are give some to you</h1>
           <Book_name/>
           <Book_image/>
           <Auther_name/>
    </article>
  );
}

function Book_name(){
  return <h3>book name is abc</h3>
}

function Auther_name(){
  return <h3>hoo la la la</h3>
}

function Book_image(){
  let x= "this is 'x' vriable whish going to pass";
  return (<div >
    <h4>{x}</h4>
    <img src="https://th.bing.com/th/id/OIP.dCWxY8VYOWFkU7VpexoaKwHaKX?pid=ImgDet&rs=1" alt="this was the photo"/>
  </div>);
  }


ReactDOM.render(<Aman/>,document.getElementById('root'));
*/


/*

import React from 'react';
import  ReactDOM  from 'react-dom';
import './Style.css';

function Aman()
{
  return (
    <article className='Booklist'>
      <h1> we are give some to you</h1>
           <Book_image new_update1="new update is added"/>
           <Book_image new_update2="new update is added and also make diffent from other"/>
           <Book_image new_update3="This is also same"/>
           <Book_image/>
    </article>
  );
}


function Book_image(props){
  let x= "this is 'x' vriable whish going to pass";
  return (<div className='Book'>
    <h4>{x}</h4>
    <img src="https://th.bing.com/th/id/OIP.dCWxY8VYOWFkU7VpexoaKwHaKX?pid=ImgDet&rs=1" alt="this was the photo"/>
   
   <h3>book name is abc</h3>
   <h3>hoo la la la</h3>
   <p>{props.new_update1}</p>
   <p>{props.new_update2}</p>
   <p>{props.new_update3}</p>

  </div>);
  }


ReactDOM.render(<Aman/>,document.getElementById('root'));

*/


/*

import React from 'react';
import  ReactDOM  from 'react-dom';
import './Style.css';

function Aman()
{
  return (
    <article className='Booklist'>
      <h1> we are give some to you</h1>
           <Book_image/>
           <Book_image/>
           <Book_image/>
           <Book_image/>
    </article>
  );
}


function Book_image(props){
  let x= "this is 'x' vriable whish going to pass";
  let imgs="https://th.bing.com/th/id/OIP.dCWxY8VYOWFkU7VpexoaKwHaKX?pid=ImgDet&rs=1";
  let st1 = "book name is abc";
  let st2 = "hoo la la la";
  
  
  return (<div className='Book'>
   <p>{x}</p>
   <img src={imgs} alt='image mot found'/>
   <p>{st1}</p>   
  <p>{st2}</p>

  </div>);
  }


ReactDOM.render(<Aman/>,document.getElementById('root'));

*/


/*

import React from 'react';
import  ReactDOM  from 'react-dom';
import './Style.css';


  let x= "this is 'x' vriable whish going to pass";
  let imgs="https://th.bing.com/th/id/OIP.dCWxY8VYOWFkU7VpexoaKwHaKX?pid=ImgDet&rs=1";
  let st1 = "book name is abc";
  let st2 = "stepin houking";
  

function Aman()
{
  return (
    <article className='Booklist'>
      <h1> we are give some to you</h1>
           <Book_image/>
           <Book_image/>
           <Book_image/>
           <Book_image/>
    </article>
  );
}


function Book_image(props){
  
  return (<div className='Book'>
   <p>{x}</p>
   <img src={imgs} alt='image mot found'/>
   <p>{st1}</p>   
  <p>{st2}</p>

  </div>);
  }


ReactDOM.render(<Aman/>,document.getElementById('root'));
*/



/*
import React from 'react';
import  ReactDOM  from 'react-dom';
import './Style.css';

function Book1(){
  let x= "this is 'x' vriable whish going to pass";
  let imgs="https://www.bing.com/ck/a?!&&p=4d3b98269fab2844JmltdHM9MTY3NDA4NjQwMCZpZ3VpZD0zNjU3ZTVkYi1iY2EzLTZmMzUtMDZmNC1mN2RkYjhhMzY5NzAmaW5zaWQ9NTY1Ng&ptn=3&hsh=3&fclid=3657e5db-bca3-6f35-06f4-f7ddb8a36970&u=a1L2ltYWdlcy9zZWFyY2g_cT1Nb2JpbGUmRk9STT1JUUZSQkEmaWQ9RDdDNzhBNjQwMUE0OUIzNUVBQ0Q0RjUxOEVFMDYxQkNENjY1NUQ0Mw&ntb=1";
  let st1 = "i-phone";
  let st2 = "stepin houking";
}

function Book2(){
  let x= "this is 'x' vriable whish going to pass";
  let imgs="https://www.bing.com/ck/a?!&&p=72112a35e6eb0516JmltdHM9MTY3NDA4NjQwMCZpZ3VpZD0zNjU3ZTVkYi1iY2EzLTZmMzUtMDZmNC1mN2RkYjhhMzY5NzAmaW5zaWQ9NTY1MA&ptn=3&hsh=3&fclid=3657e5db-bca3-6f35-06f4-f7ddb8a36970&u=a1L2ltYWdlcy9zZWFyY2g_cT1Nb2JpbGUmRk9STT1JUUZSQkEmaWQ9OUUyNzI2NDlCRkNCRUE5NkEzRDNCN0VCNjNDMkQxNTMzOEI0QTMwRg&ntb=1";
  let st1 = "tuch-pad";
  let st2 = "stepin houking";
}

function Book3(){
  let x= "this is 'x' vriable whish going to pass";
  let imgs="https://www.bing.com/ck/a?!&&p=58691f31295839b3JmltdHM9MTY3NDA4NjQwMCZpZ3VpZD0zNjU3ZTVkYi1iY2EzLTZmMzUtMDZmNC1mN2RkYjhhMzY5NzAmaW5zaWQ9NTY1NA&ptn=3&hsh=3&fclid=3657e5db-bca3-6f35-06f4-f7ddb8a36970&u=a1L2ltYWdlcy9zZWFyY2g_cT1Nb2JpbGUmRk9STT1JUUZSQkEmaWQ9OTVBNUUyNEJBNUFFRTk2RkMxNDcwNTRCNUFGMzJFRUYxMUQzMUM5NQ&ntb=1";
  let st1 = "screen-touch";
  let st2 = "stepin houking";
}

function Book4(){
  let x= "this is 'x' vriable whish going to pass";
  let imgs="https://th.bing.com/th/id/OIP.dCWxY8VYOWFkU7VpexoaKwHaKX?pid=ImgDet&rs=1";
  let st1 = "book name is abc";
  let st2 = "stepin houking";
}

function Aman()
{
  return (
    <article className='Booklist'>
      <h1> we are give some to you</h1>
           <Book_image
           x1 = {Book1.x}
           photo = {Book1.imgs}
           talk1 = {Book1.st1}
           talk2 = {Book1.st2} >  </Book_image>
           <Book_image
           x1 = {Book2.x}
           photo = {Book2.imgs}
           talk1 = {Book2.st1}
           talk2 = {Book2.st2} >
           </Book_image>

           <Book_image
           x1 = {Book3.x}
           photo = {Book3.imgs}
           talk1 = {Book3.st1}
           talk2 = {Book3.st2} >
           </Book_image>

           <Book_image
           x1 = {Book4.x}
           photo = {Book4.imgs}
           talk1 = {Book4.st1}
           talk2 = {Book4.st2} >
           </Book_image>

         
    </article>
  );
}


function Book_image(props){

 const {x1,photo,talk1,talk2}=props;

   return (<div className='Book'>
   <p>{x1}</p>
   <img src={photo}/>
   <p>{talk1}</p>   
  <p>{talk2}</p>
  </div>);



  //   return (<div className='Book'>
  //  <p>{props.x1}</p>
  //  <img src={props.photo}/>
  //  <p>{props.talk1}</p>   
  // <p>{props.talk2}</p>
  // </div>);



  //   return (<div className='Book'>
  //  <p>{props.x}</p>
  //  <img src={props.imgs} alt='image mot found'/>
  //  <p>{props.st1}</p>   
  // <p>{props.st2}</p>

  //  </div>);


}


ReactDOM.render(<Aman/>,document.getElementById('root'));
*/




/*

import React from 'react';
import  ReactDOM  from 'react-dom';
import './Style.css';

const Book1={
   x:"this is 'x' vriable whish going to pass",
   imgs:"https://www.bing.com/ck/a?!&&p=4d3b98269fab2844JmltdHM9MTY3NDA4NjQwMCZpZ3VpZD0zNjU3ZTVkYi1iY2EzLTZmMzUtMDZmNC1mN2RkYjhhMzY5NzAmaW5zaWQ9NTY1Ng&ptn=3&hsh=3&fclid=3657e5db-bca3-6f35-06f4-f7ddb8a36970&u=a1L2ltYWdlcy9zZWFyY2g_cT1Nb2JpbGUmRk9STT1JUUZSQkEmaWQ9RDdDNzhBNjQwMUE0OUIzNUVBQ0Q0RjUxOEVFMDYxQkNENjY1NUQ0Mw&ntb=1",
   st1:"i-phone",
   st2:"stepin houking"
};

const Book2={
   x:"this is 'x' vriable whish going to pass",
   imgs:"https://www.bing.com/ck/a?!&&p=72112a35e6eb0516JmltdHM9MTY3NDA4NjQwMCZpZ3VpZD0zNjU3ZTVkYi1iY2EzLTZmMzUtMDZmNC1mN2RkYjhhMzY5NzAmaW5zaWQ9NTY1MA&ptn=3&hsh=3&fclid=3657e5db-bca3-6f35-06f4-f7ddb8a36970&u=a1L2ltYWdlcy9zZWFyY2g_cT1Nb2JpbGUmRk9STT1JUUZSQkEmaWQ9OUUyNzI2NDlCRkNCRUE5NkEzRDNCN0VCNjNDMkQxNTMzOEI0QTMwRg&ntb=1",
   st1:"tuch-pad",
   st2:"stepin houking"
}

const Book3={
  x:"this is 'x' vriable whish going to pass",
  imgs:"https://www.bing.com/ck/a?!&&p=58691f31295839b3JmltdHM9MTY3NDA4NjQwMCZpZ3VpZD0zNjU3ZTVkYi1iY2EzLTZmMzUtMDZmNC1mN2RkYjhhMzY5NzAmaW5zaWQ9NTY1NA&ptn=3&hsh=3&fclid=3657e5db-bca3-6f35-06f4-f7ddb8a36970&u=a1L2ltYWdlcy9zZWFyY2g_cT1Nb2JpbGUmRk9STT1JUUZSQkEmaWQ9OTVBNUUyNEJBNUFFRTk2RkMxNDcwNTRCNUFGMzJFRUYxMUQzMUM5NQ&ntb=1",
  st1:"screen-touch",
  st2:"stepin houking"
};

const Book4={
  x:"this is 'x' vriable whish going to pass",
  imgs:"https://th.bing.com/th/id/OIP.dCWxY8VYOWFkU7VpexoaKwHaKX?pid=ImgDet&rs=1",
  st1:"book name is abc",
  st2:"stepin houking"
};

const name = "aman kumar ";
function Aman()
{
  return (
    <article className='Booklist'>
      <h1> we are give some to you</h1>
        <Book_image
           x1 = {Book1.x}
           photo = {Book1.imgs}
           talk1 = {Book1.st1}
           talk2 = {Book1.st2}
           names = {name}> 
        </Book_image>

        <Book_image
           x1 = {Book2.x}
           photo = {Book2.imgs}
           talk1 = {Book2.st1}
           talk2 = {Book2.st2}> <p>Aman is a full stack java developer</p>
        </Book_image>

        <Book_image
           x1 = {Book3.x}
           photo = {Book3.imgs}
           talk1 = {Book3.st1}
           talk2 = {Book3.st2}> 
        </Book_image>

        <Book_image
           x1 = {Book4.x}
           photo = {Book4.imgs}
           talk1 = {Book4.st1}
           talk2 = {Book4.st2}> 
        </Book_image>         
    </article>
  );
}


function Book_image(props){
return(
  <div className='Book'>
    <p>{props.x1}</p>
    <img src={props.photo}/>
    <p>{props.talk1}</p>
    <p>{props.talk2}</p>
    <p>{props.names}</p>
    <p>{props.childrean}</p>
  </div>
);
  
//  const {x1,photo,talk1,,name}=props;

//    return (<div className='Book'>
//    <p>{x1}</p>
//    <img src={photo}/>
//    <p>{talk1}</p>   
//   <p>{talk2}</p>
//   </div>);

}


ReactDOM.render(<Aman/>,document.getElementById('root'));

*/



/*
import React from 'react';
import  ReactDOM  from 'react-dom';
import './Style.css';

const Book1={
   x:"this is 'x' vriable whish going to pass",
   imgs:"https://www.bing.com/ck/a?!&&p=4d3b98269fab2844JmltdHM9MTY3NDA4NjQwMCZpZ3VpZD0zNjU3ZTVkYi1iY2EzLTZmMzUtMDZmNC1mN2RkYjhhMzY5NzAmaW5zaWQ9NTY1Ng&ptn=3&hsh=3&fclid=3657e5db-bca3-6f35-06f4-f7ddb8a36970&u=a1L2ltYWdlcy9zZWFyY2g_cT1Nb2JpbGUmRk9STT1JUUZSQkEmaWQ9RDdDNzhBNjQwMUE0OUIzNUVBQ0Q0RjUxOEVFMDYxQkNENjY1NUQ0Mw&ntb=1",
   st1:"i-phone",
   st2:"stepin houking"
};

const Book2={
   x:"this is 'x' vriable whish going to pass",
   imgs:"https://www.bing.com/ck/a?!&&p=72112a35e6eb0516JmltdHM9MTY3NDA4NjQwMCZpZ3VpZD0zNjU3ZTVkYi1iY2EzLTZmMzUtMDZmNC1mN2RkYjhhMzY5NzAmaW5zaWQ9NTY1MA&ptn=3&hsh=3&fclid=3657e5db-bca3-6f35-06f4-f7ddb8a36970&u=a1L2ltYWdlcy9zZWFyY2g_cT1Nb2JpbGUmRk9STT1JUUZSQkEmaWQ9OUUyNzI2NDlCRkNCRUE5NkEzRDNCN0VCNjNDMkQxNTMzOEI0QTMwRg&ntb=1",
   st1:"tuch-pad",
   st2:"stepin houking"
}

const Book3={
  x:"this is 'x' vriable whish going to pass",
  imgs:"https://www.bing.com/ck/a?!&&p=58691f31295839b3JmltdHM9MTY3NDA4NjQwMCZpZ3VpZD0zNjU3ZTVkYi1iY2EzLTZmMzUtMDZmNC1mN2RkYjhhMzY5NzAmaW5zaWQ9NTY1NA&ptn=3&hsh=3&fclid=3657e5db-bca3-6f35-06f4-f7ddb8a36970&u=a1L2ltYWdlcy9zZWFyY2g_cT1Nb2JpbGUmRk9STT1JUUZSQkEmaWQ9OTVBNUUyNEJBNUFFRTk2RkMxNDcwNTRCNUFGMzJFRUYxMUQzMUM5NQ&ntb=1",
  st1:"screen-touch",
  st2:"stepin houking"
};

const Book4={
  x:"this is 'x' vriable whish going to pass",
  imgs:"https://th.bing.com/th/id/OIP.dCWxY8VYOWFkU7VpexoaKwHaKX?pid=ImgDet&rs=1",
  st1:"book name is abc",
  st2:"stepin houking"
};

const name = "aman kumar ";
function Aman()
{
  return (
    <article className='Booklist'>
      <h1> we are give some to you</h1>
        <Book_image
           x1 = {Book1.x}
           photo = {Book1.imgs}
           talk1 = {Book1.st1}
           talk2 = {Book1.st2}
           names = {name}> 
        </Book_image>

        <Book_image
           x1 = {Book2.x}
           photo = {Book2.imgs}
           talk1 = {Book2.st1}
           talk2 = {Book2.st2}> <p>Aman is a full stack java developer</p>
        </Book_image>

        <Book_image
           x1 = {Book3.x}
           photo = {Book3.imgs}
           talk1 = {Book3.st1}
           talk2 = {Book3.st2}> 
        </Book_image>

        <Book_image
           x1 = {Book4.x}
           photo = {Book4.imgs}
           talk1 = {Book4.st1}
           talk2 = {Book4.st2}> 
        </Book_image>         
    </article>
  );
}


function Book_image(props){
return(
  <div className='Book'>
    <p>{props.x1}</p>
    <img src={props.photo}/>
    <p>{props.talk1}</p>
    <p>{props.talk2}</p>
    <p>{props.names}</p>
    <p>{props.children}</p>{//here we access the component which is middle <>--here--</> the Book_image}
  </div>
);

// function Book_image({x1,photo,talk1,talk2,names,children}){
// return(
//   <div className='Book'>
//     <p>{props.x1}</p>
//     <img src={props.photo}/>
//     <p>{props.talk1}</p>
//     <p>{props.talk2}</p>
//     <p>{props.names}</p>
//     <p>{props.children}</p>{//here we access the component which is middle <>--here--</> the Book_image}
//   </div>
// );
// }


//  const {x1,photo,talk1,,name}=props;

//    return (<div className='Book'>
//    <p>{x1}</p>
//    <img src={photo}/>
//    <p>{talk1}</p>   
//   <p>{talk2}</p>
//   </div>);

}

ReactDOM.render(<Aman/>,document.getElementById('root'));
*/



/*
import React from 'react';
import  ReactDOM  from 'react-dom';
import './Style.css';

const Book1={
   x:"this is 'x' vriable whish going to pass",
   imgs:"https://www.photo.net/gallery/image/5290404-eurasian-spoonbill/?context=widget",
   str1:"i-phone",
   str2:"stepin houking"
};

const Book2={
   x:"this is 'x' vriable whish going to pass",
   imgs:"https://www.photo.net/gallery/image/5290414-a80312b0-d8d5-4246-8f8a-a64a50b7b51djpeg/?context=widget",
   str1:"tuch-pad",
   str2:"stepin houking"
}

const Book3={
  x:"this is 'x' vriable whish going to pass",
  imgs:"https://www.photo.net/gallery/image/5290472-winter/?context=widget",
  str1:"screen-touch",
  str2:"stepin houking"
};

const Book4={
  x:"this is 'x' vriable whish going to pass",
  imgs:"https://www.photo.net/gallery/image/5290425-untitled/?context=widget",
  str1:"book name is abc",
  str2:"stepin houking"
};

const name = "aman kumar ";
function Aman()
{
  return (
    <article className='Booklist'>
      <h1> we are give some to you</h1>
        <Book_image
           x = {Book1.x}
           imgs = {Book1.imgs}
           str1 = {Book1.st1}
           str2 = {Book1.st2}> 
        </Book_image>         

        <Book_image
           x = {Book2.x}
           imgs = {Book2.imgs}
           str1 = {Book2.st1}
           str2 = {Book2.st2}><p>Aman is a full stack java developer</p>  
        </Book_image>         

        <Book_image
           x = {Book3.x}
           imgs = {Book3.imgs}
           str1 = {Book3.st1}
           str2 = {Book3.st2}>
        </Book_image>

        <Book_image
           x = {Book4.x}
           imgs = {Book4.imgs}
           str1 = {Book4.st1}
           str2 = {Book4.st2}> 
        </Book_image>         
    </article>
  );
}



function Book_image({x,imgs,str1,str2,name,children}){
return(
  <div className='Book'>
    <p>{x}</p>
    <img src={imgs}/>
    <p>{str1}</p>
    <p>{str2}</p>
    <p>{name}</p>
    <p>{children}</p>{//here we access the component which is middle <>--here--</> the Book_image}
  </div>
);
}

ReactDOM.render(<Aman/>,document.getElementById('root'));
*/




/*

import React from 'react';
import  ReactDOM  from 'react-dom';
import './Style.css';

const Book= [{//this is array of object
  id:1,
   x:"this is 'x' vriable whish going to pass",
   imgs:"https://www.photo.net/gallery/image/5290404-eurasian-spoonbill/?context=widget",
   str1:"i-phone",
   str2:"stepin houking"
},

{
  id:2,
   x:"this is 'x' vriable whish going to pass",
   imgs:"https://www.photo.net/gallery/image/5290414-a80312b0-d8d5-4246-8f8a-a64a50b7b51djpeg/?context=widget",
   str1:"tuch-pad",
   str2:"stepin houking"
},

{
  id:3,
  x:"this is 'x' vriable whish going to pass",
  imgs:"https://www.photo.net/gallery/image/5290472-winter/?context=widget",
  str1:"screen-touch",
  str2:"stepin houking"
},

{
  id:4,
  x:"this is 'x' vriable whish going to pass",
  imgs:"https://www.photo.net/gallery/image/5290425-untitled/?context=widget",
  str1:"book name is abc",
  str2:"stepin houking"
}];

function Aman()
{
  return (
    <article className='Booklist'>{Book.map((itr) =>
      {
        const {imgs,x,str1,str2}=itr;
        return(
          <Book_image key = {itr.id} itr_by_Book_image={itr}></Book_image>
        )})}
    </article>
  );
}

function Book_image(props){
const {x,imgs,str1,str2} = props.itr_by_Book_image
  return(
  <div className='Book'>
    <p>{x}</p>
    <img src={imgs} alt=" this was photo"/>
    <p>{str1}</p>
    <p>{str2}</p>
  </div>
);
}

// function Aman()
// {
//   return (
//     <article className='Booklist'>{Book.map((book) =>
//       {
//         return 'hello '
//       }
//       )}</article>
//   );
// }

// NOTE:-- we can pass array in Int, string, etc but not object of array

///*
const name = "aman kumar ";
const arr =[" amna "," kumar ", " chouhan "];
function Aman()
{
  return (
    <article className='Booklist'>{arr}
      // <h1> we are give some to you</h1>
      //<Book_image
      //     x = {Book1.x}
      //     imgs = {Book1.imgs}
      //     str1 = {Book1.st1}
      //     str2 = {Book1.st2}> 
      //  </Book_image>         

    </article>
  );
}
//*//*



// function Book_image({x,imgs,str1,str2,name,children}){
// return(
//   <div className='Book'>
//     <p>{x}</p>
//     <img src={imgs}/>
//     <p>{str1}</p>
//     <p>{str2}</p>
//     <p>{name}</p>
//     <p>{children}</p>{//here we access the component which is middle <>--here--</> the Book_image}
//   </div>
// );
// }

ReactDOM.render(<Aman/>,document.getElementById('root'));

*/





/*
import React from 'react';
import  ReactDOM  from 'react-dom';
import './Style.css';

const Book= [{//this is array of object
  id:1,
   x:"this is 'x' vriable whish going to pass",
   imgs:"https://www.photo.net/gallery/image/5290404-eurasian-spoonbill/?context=widget",
   str1:"i-phone",
   str2:"stepin houking"
},

{
  id:2,
   x:"this is 'x' vriable whish going to pass",
   imgs:"https://www.photo.net/gallery/image/5290414-a80312b0-d8d5-4246-8f8a-a64a50b7b51djpeg/?context=widget",
   str1:"tuch-pad",
   str2:"stepin houking"
},

{
  id:3,
  x:"this is 'x' vriable whish going to pass",
  imgs:"https://www.photo.net/gallery/image/5290472-winter/?context=widget",
  str1:"screen-touch",
  str2:"stepin houking"
},

{
  id:4,
  x:"this is 'x' vriable whish going to pass",
  imgs:"https://www.photo.net/gallery/image/5290425-untitled/?context=widget",
  str1:"book name is abc",
  str2:"stepin houking"
}];

function Aman()
{
  return (
    <article className='Booklist'>{Book.map((itr) =>
      {
        const {imgs,x,str1,str2}=itr;
        return(
//          <Book_image key = {itr.id}itr_by_Book_image={itr}></Book_image>
          <Book_image key = {itr.id}  {...itr}></Book_image>  // here we remove 'itr_by_Book_image='

)})}
    </article>
  );
}

//function Book_image({x,imgs,str1,str2}) //<Book_image key = {itr.id}  {...itr}></Book_image>  // here we 'removeitr_by_Book_image='
//from above that we can remove -->  const {x,imgs,str1,str2} = props



function Book_image(props){
//const {x,imgs,str1,str2} = props.itr_by_Book_image
const {x,imgs,str1,str2} = props //here no need to write itr_by_Book_image due to {...itr}

return(
  <div className='Book'>
    <p>{x}</p>
    <img src={imgs} alt=" this was photo"/>
    <p>{str1}</p>
    <p>{str2}</p>
  </div>
);
}

ReactDOM.render(<Aman/>,document.getElementById('root'));
*/



/*
import React from 'react';
import  ReactDOM  from 'react-dom';
import './Style.css';

const Book= [{//this is array of object
  id:1,
   x:"this is 'x' vriable whish going to pass",
   imgs:"https://www.photo.net/gallery/image/5290404-eurasian-spoonbill/?context=widget",
   str1:"i-phone",
   str2:"stepin houking"
},

{
  id:2,
   x:"this is 'x' vriable whish going to pass",
   imgs:"https://www.photo.net/gallery/image/5290414-a80312b0-d8d5-4246-8f8a-a64a50b7b51djpeg/?context=widget",
   str1:"tuch-pad",
   str2:"stepin houking"
},

{
  id:3,
  x:"this is 'x' vriable whish going to pass",
  imgs:"https://www.photo.net/gallery/image/5290472-winter/?context=widget",
  str1:"screen-touch",
  str2:"stepin houking"
},

{
  id:4,
  x:"this is 'x' vriable whish going to pass",
  imgs:"https://www.photo.net/gallery/image/5290425-untitled/?context=widget",
  str1:"book name is abc",
  str2:"stepin houking"
}];

function Aman()
{
  //Event means onClick //onMouseOver

  return (
    <article className='Booklist'>{Book.map((itr) =>
      {
        const {imgs,x,str1,str2}=itr;
        return(
          <Book_image key = {itr.id}  {...itr}></Book_image>  // here we 'removeitr_by_Book_image='
      )})}
    </article>
  );
}

function Book_image({x,imgs,str1,str2}){

  const clickEvent = () =>{
    alert('hey aman !');
  }

  return(
  <div className='Book'>
    <p>{x}</p>
    <img src={imgs} alt=" this was photo"/>
    <p onClick={()=>console.log(str1)}>{str1}</p>
    <p>{str2}</p>
    <button type='button' onClick={clickEvent}>Example</button>
  </div>
);
}

ReactDOM.render(<Aman/>,document.getElementById('root'));
*/



/*
import React from 'react';
import  ReactDOM  from 'react-dom';
import './Style.css';
import { Book } from './Book_Aman';//way to import
import Book_image_2 from './Book_Aman_two';//Book_image_2 is ame as Book_image


function Aman()
{
  //Event means onClick //onMouseOver

  return (
    <article className='Booklist'>{Book.map((itr) =>
      {
        const {imgs,x,str1,str2}=itr;
        return(
//          <Book_image key = {itr.id}  {...itr}></Book_image>  // here we 'removeitr_by_Book_image='
          <Book_image_2 key = {itr.id}  {...itr}></Book_image_2>  // here we replace the name of Book_image to Book_image_2

)})}
    </article>
  );
}

ReactDOM.render(<Aman/>,document.getElementById('root'));

*/


/*
import React from 'react';
import  ReactDOM  from 'react-dom/client';
import './Style.css';
import App from './App';

const root = ReactDOM.render(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
  <App />

  </React.StrictMode>
)

*/



import React from 'react';
import  ReactDOM  from 'react-dom/client';
import App1 from './UseSateArray';

const root = ReactDOM.render(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <App1>
    
  </App1>
  </React.StrictMode>
)
