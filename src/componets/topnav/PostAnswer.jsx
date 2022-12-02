import React from 'react'
import { useDispatch } from "react-redux";
import { useState } from "react";
import { createNewPost } from "../features/Posts/AnswerSlice";
import { fetchPosts } from "../features/Posts/postSlice";

const PostAnswer = ({open,onClose})=> {
  
  
  const DEFAULT_INPUT={
    answer: ""
  }
  
  const [AnswerForm, setAnswerForm] = useState(DEFAULT_INPUT);
  const dispatch = useDispatch();
  
  const onSubmit=(e)=>{
    e.preventDefault()
    const id= Math.ceil(Math.random()*1000000)
    const newPost={...AnswerForm, id}
    console.log(AnswerForm);
    console.log(newPost);
    dispatch(createNewPost(newPost))
    dispatch(fetchPosts());

    // dispatch(fetchPosts())
  }
  const HandlerChange=(e)=>{
    setAnswerForm((prev)=>({...prev, [e.target.name]: e.target.value}))
  }
  
  if(!open) return null



  return (
    <div className='overLay' >
      <div className="modalCont">
      <p onClick={onClose}>X</p>
      <h4>posted answer</h4>
        <form  className="modal-form" onSubmit={onSubmit}>
          <textarea name="answer" id="" cols="30" rows="10" placeholder='post your answer here' value={AnswerForm.answer} onChange={HandlerChange} >
        </textarea>
        <button className='btn' >Add</button>

        </form>
      </div>
       
        
    </div>
  )

}
export default PostAnswer