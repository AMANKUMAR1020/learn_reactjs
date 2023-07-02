import React from 'react'
import {Outlet,useSearchParams} from 'react-router-dom';

function User() {
  const [searchParams,setSearchParams] = useSearchParams()
  const showActiveUsers = searchParams.get('filter') === 'active'
  return (<>
    <div>User1</div>
    <div>User2</div>
    <div>User3</div>
    <Outlet/>
    <div>
      <button onClick={()=>{setSearchParams({filter:'active'})
    }}>Active User</button>
      <button onClick={()=>{setSearchParams({})}}>Reset Filter</button>
    </div>
    {
      showActiveUsers ? (<h2>Showing active users</h2>) : (<h2>showing all users</h2>) 
    }
  </>)
}

export default User