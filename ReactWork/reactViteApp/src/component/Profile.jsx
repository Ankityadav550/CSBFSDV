import React from 'react'
import './profile.css'

function Profile({data}) {
  return (
    <div className='parent'>

        <h2>Profile Page</h2>
        {/* <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" /> */}
        <img src={data.pic} alt="" />
        <h3>Name:{data.myname}</h3>
        <h3>Branch:{data.mybranch}</h3>
        <h3>Section:{data.mysection}</h3>
        <h3>College:{data.mycollege}</h3>
        
    </div>
  )
}

export default Profile
