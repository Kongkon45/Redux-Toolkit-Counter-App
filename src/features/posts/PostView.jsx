import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './postSlice';

const PostView = () => {
    const {posts, isLoading, error} = useSelector((state)=>state.post);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchPosts())
    },[])
  return (
    <div>
        <h1>All Posts</h1>
        {isLoading && <h1>Post is loading ...</h1>}
        {error && <p>{error}</p>}
        {posts && posts?.map((post)=>{
            const {id, name, email, body} = post;
            return <div key={id}>
                <h1>{name}</h1>
                <p>{email}</p>
                <p>{body}</p>
            </div>
        })}
    </div>
  )
}

export default PostView