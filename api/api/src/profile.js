import React from 'react';

const Profile=({details})=>{
   return(
    <>
    {/* here question mark '?' is very important */}
    <img src={details.picture?.large} postion="center"/>
    <span>{details.name?.title}</span><br/>
    <span>{details.name?.name}</span><br/>
    <span>{details.name?.last}</span><br/>
    </>
   )}

export default Profile;