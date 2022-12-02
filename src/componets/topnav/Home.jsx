import React, { useEffect } from "react";
import Navbar from "./Navbar";
import "./Home.css";
// import { CommentPost, likePost, dislikePostAction } from "../Actions/Actions";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PostAnswer from "./PostAnswer";
// import { RiHeart3Line } from "react-icons/ri";
// import { HiThumbDown } from "react-icons/hi";
// import { FaRegCommentDots } from "react-icons/fa";
import { fetchPosts } from "../features/Posts/postSlice";


function Home() {
  const  posts  = useSelector((state) => state.posts.posts);
  console.log(posts);

  console.log(posts);
  const dispatch = useDispatch();

  const [OpenModal,setOpenModal] = useState (false)
  
  

  // const handleCommentPost = (id) => {
  //   dispatch(CommentPost(id));
  // };

  // const handleDisikePost = (id) => {
  //   dispatch(dislikePostAction(id));
  // };

  // const handleLikePost = (id) => {
  //   dispatch(likePost(id));
  // };

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="bp">
        <div className="side">
          <div className="mac">
            <h3 className="other">Others</h3>
            <Link to="/EveraskedQ" className="hp">
              {" "}
              Eversked Questions
              <span>{5}</span>
            </Link>
            <Link to="/Question" className="hp">
              Post a question
            </Link>
          </div>
        </div>

        <div className="main">
          <h3 className="posty">Posted questions and answers !! </h3>

          {posts?.map((post) => {
            return (
              <div className="mag" key={post.id}>
                <div className="heady">
                    <h3 className="postee">posted question </h3>
                    <p className="posty">answers <span>{0}</span></p>
                </div>
                    
                        {post.postQuestion}
                         <div className="icons">
                          <button className="btn" onClick={()=>setOpenModal(true)}>post answer</button>
                          <button className="btn">delete post</button>
                          <div className="mode">
                          <PostAnswer open={OpenModal} onClose={()=>setOpenModal(false)}/>
                          </div>
                         

                         

                          {/* <div className="ico">
                          <RiHeart3Line onClick={() => handleLikePost(post?.id)}/>
                            <HiThumbDown onClick={() => handleDisikePost(post?.id)}/>
                            <FaRegCommentDots onClick={() => handleCommentPost(post?.id)} />
                          </div> */}
                            
                         </div>
              </div>    
            );
             })}

        </div>
      </div>

    </div>
  );
}

export default Home
