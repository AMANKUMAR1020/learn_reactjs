/*
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

//another method to importing and exporting

export default Book_image
*/


const UserStateCounter = () =>{
  const[value,setValue] = React.useState(0);

  return(
    <>
    <section>
      <h2>React Counter </h2>
    </section>
    </>
  )
}

export default UserStateCounter;