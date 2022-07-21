import React from 'react'

function Comment({comment, setUpdate})  {

  function handleDelete(e){
    fetch(`/deletecomment/${comment.id}`, {
      method: 'DELETE' 
    }).then(setUpdate(v => v+1))
  }

  function handleUpdate(){
    fetch(`/comment/${comment.id}`, {
      method: 'PATCH'
      
    }).then(setUpdate(v => v+1))

  }

  return (
    <div>
      <div>{comment.description}</div>
      <button onClick={handleDelete}>x</button>
      <button onClick={handleUpdate}>reverse</button>
    </div>
    

  )
}

export default Comment