import React, { useEffect ,useState } from 'react'
import { useLoaderData } from 'react-router'

function Github() {

    const data = useLoaderData();


    // const [data, setData] = useState([]);
    // useEffect(() => {
    //   fetch('https://api.github.com/users/AlishaVyas')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data);

    //   })
    // }, [])
    
  return (
    <div>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture"/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const rsp = await fetch('https://api.github.com/users/AlishaVyas')
    return rsp.json()
}



