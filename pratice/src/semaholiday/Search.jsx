// import React,{useState,useEffect} from 'react'

// function Search() {
//     const [data,setData] =useState([]);
//     const [searchApiData,setSearchApiData] = useState([]);
//     const [filterVal,setFilterVal] = useState('')

// useEffect(()=>{
//     const fetchData=()=>{
//         fetch('https://dummyjson.com/users')
// .then(res => res.json())
// .then(json => {setData(json)
//     setSearchApiData(json)
// // console.log(Data)
// })
// }
//     fetchData();
// },[])

// const handleFilter=(e)=>{
//     if(e.target.value === ''){
//         setData(searchApiData)
//     } else {
//        const filterResult = searchApiData.filter(item => item.firstname.toLowerCase().includes(e.target.value.toLowerCase()))
//         setData(filterResult)}
    
//         setFilterVal(e.target.value);

// }

//   return (<><div>Search</div>
  
//   <div>
//     <input placeholder='Search' value={filterVal} onInput={(e)=>handleFilter(e)}/>
//    // onInput={handleFilter} is equal to onInput={(e) =>handleFilter(e)}
//   </div>

//   <div>
//     <table>
//         {
//         data.reduce(item =>{
//             return(
//                 <tr key={item.id}>
//                     <td>{item.firstName}</td>
//                     <td>{item.lastNam}</td>
//                     <td>{item.email}</td>
//                     <td>{item.age}</td>
//                 </tr>
//             )
//         })
//     }
//     </table>
//   </div>
//   </>)
// }

// export default Search



import React,{useState,useEffect} from 'react'

function Search() {
    const [Data,setData] =useState([]);
    const [searchApiData,setSearchApiData] = useState([]);
    const [filterVal,setFilterVal] = useState('')
useEffect(()=>{
    const fetchData=()=>{
        fetch('https://dummyjson.com/users')
.then(res => res.json())
.then(json => {setData(json)
    setSearchApiData(json)
 console.log("setData(json)",setData(json))
 console.log("setSearchApiData(json)",setSearchApiData(json))
})
    }
    fetchData();
},[])

const handleFilter=(e)=>{
    if(e.target.value === ''){
        setData(searchApiData)
    } else {
       const filterResult = searchApiData([searchApiData.filter(item => item.firstname.toLowerCase().includes(e.target.value.toLowerCase()))])
        setData(filterResult)}
{/*searchApiData([searchApiData.filter(item => item.firstname.toLowerCase().includes(e.target.value.toLowerCase()))])*/} 
        setFilterVal(e.target.value);

}

  return (<><div>Search</div>
 <input placeholder='Search' value={filterVal} onInput={(e)=>handleFilter(e)}/>
  <div>
    <table>
        {
        Data.map((item,key) =>{
            return(
                <tr key = {key}>
                    <td>{item.firstName}</td>
                    <td>{item.lastNam}</td>
                    <td>{item.email}</td>
                    <td>{item.age}</td>
                </tr>
            )
        })
    }
    </table>
  </div> 
  </>)
}

export default Search



// import React,{useState,useEffect} from 'react'

// function Search() {
//     const [data,setData] =useState([]);
// //    const [searchApiData,setSearchApiData] = useState([]);
// //    const [filterVal,setFilterVal] = useState('')
// const url = 'https://dummyjson.com/users'
// useEffect(()=>{
//         fetch(url).then(res => res.json())
// .then(json => {console.log("json",json)
// setData(json)
// }).catch(e =>{
//     console.log("e",e)
// })
// },[])

//   return (<><div>Search</div>
//   <div>
//     {
//         data.map((item) =>{
//             console.log(item.email);
//             return (<div></div>
//             )
//         })
//     }
//   </div> 
//   </>)
// }

// export default Search
