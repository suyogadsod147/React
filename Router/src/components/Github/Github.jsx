import React, { useEffect, useState } from 'react'

function Github() {

    const [data , setData] = useState([])
    useEffect(()=>{
        fetch('http://api.github.com/users/gurukamble')
        .then((response)=>response.json()
        .then(data=>{
            console.log(data);
            setData(data)

        }))

    } , [])


  return (
    <div className=' text-center m-4 p-4 bg-gray-700 text-3xl text-white'>
      Github follower: {data.followers}
    <img src={data.avatar_url} alt="Github DP"  width={300}/>

    </div>
  )
}

export default Github
