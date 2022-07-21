import React, {useState} from 'react'
import Comment from "./Comment"
import App from './App'

function Cat({cat, setUpdate}) {
    console.log(cat)
    const {name, image_url, description, comments} = cat
    const [newComment, setNewComment] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        fetch("/newcomment", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                description: newComment,
                cat_id: cat.id,
            })
        }).then(setUpdate(v => v+1))
    }

    


  return (
    <div>
        <h1>Cats</h1>
        <img src={image_url} alt="cat" />
        <h1>{name}</h1>
        <p>{description}</p>
        {comments.map((comment, i) => (
            <Comment key={i} comment={comment} setUpdate={setUpdate}/>
        ))}
        <form onSubmit={handleSubmit}> 
            <input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)}/> 
        </form>

    </div>
  )
}

export default Cat