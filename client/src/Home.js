import React, {useState, useEffect} from 'react'
import Cat from "./Cat"

function Home(){
    const [cats, setCats] = useState([])
    const [update, setUpdate] =useState(0);
    

    useEffect(() => {
        fetch("/cats")
        .then((response) => response.json())
        .then(setCats)
    },[update])



  return (
    <div>
      
        {cats.map((cat, i) => (
            <Cat key={i} cat={cat} setUpdate={setUpdate}/>
        ))}

    </div>
  )
}

export default Home