import React from 'react'
import Profile from './Profile'
import './gallery.css'

function Gallery() {
  const student=
  [{
    pic:'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    myname:"Ankit Yadav",
    mybranch:"CS",
    mysection:"b",
    mycollege:"ABES Engineering College"
  },
  {
    pic:'',
    myname:"Ansh",
    mybranch:"CS",
    mysection:"b",
    mycollege:"ABES Engineering College"
  },
  {
    pic:'',
    myname:"Aman",
    mybranch:"CS",
    mysection:"b",
    mycollege:"ABES Engineering College"
  }
]
  




  return (
    <div>
      {/* <div><Profile name="Ankit Yadav" branch="CS" section="b" college="ABES Engineering College"/></div>
      <div><Profile name="Ansh" branch="CS" section="b" college="ABES Engineering College"/></div>
      <div><Profile name="Ansh" branch="CS" section="b" college="ABES Engineering College"/></div> */}
      {/* <div><Profile/></div> */}

      {/* <Profile data={student}/>       */}

      {
        student.map((item,index)=>{
          return <Profile key={index} data={item}/>
        })
      }
    </div>
  )
}

export default Gallery
