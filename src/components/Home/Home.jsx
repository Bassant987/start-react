import React, { useState } from 'react'
import Feed from '../Feed/Feed'

export default function Home() {
  const [name, setname] = useState('')
  const [comment, setcomment] = useState('')
  const [allcomment, setallcomment] = useState([])
   const [upd, setupd] = useState(null)
  function handleComment(e){
  e.preventDefault()
  if (upd){
    const update=allcomment
    update[upd]={name,comment}
    setallcomment([...update])
    setupd(null)
  }else {
    const arrTest=allcomment
  arrTest.push({name,comment})
  setallcomment([...arrTest])
  }
  
  setname('')
  setcomment('')
}
function deleteComment(index){
  const afdel=allcomment.filter((_,i)=> i !== index)
  setallcomment([...afdel])
}
function Update(index){
  setname(allcomment[index].name)
  setcomment(allcomment[index].comment)
  setupd(index)
}

  return (<>
    <div className='container flex-col items-center'>Home</div>
    <div>
<h1>comments here</h1>
<form onSubmit={handleComment}>
<div className='my-2'>
    <label htmlFor="name" className='form-label'>Name:</label>
  <input type="text" id='name' className='form-control' placeholder='Enter your name' onChange={(e)=>setname(e.target.value)} value={name}/>
</div>
<div>
    <label htmlFor="comment" className='form-label'>comment:</label>
  <textarea type="text" id='comment' className='form-control' placeholder='Write your comment' onChange={(e)=>setcomment(e.target.value)} value={comment}/>
</div>
<button type='submit'>{upd ? 'Update':'Add'}</button>
</form>
<div className='container'>
  <div className='row'>
  {allcomment.map((feed ,key)=> <div className='col-3' key={key}>
<h1>{feed.name}</h1>
<p>{feed.comment}</p>
<div className='flex g-4'>
<button className='btn btn success' onClick={()=>Update(key)}>Update</button>
<button className='btn btn danger' onClick={()=>deleteComment(key)}>Delete</button>
</div>
  </div>)}
</div>
</div>

    </div>
    </>
  )
}

// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Bassant987/start-react.git
// git push -u origin main