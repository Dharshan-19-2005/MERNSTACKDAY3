import { useEffect, useState } from "react";
import axios from 'axios'
const UseEffectAPI = () => {
    var [post,setPost] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts/").then((res) => {setPost(res.data)}).catch((err) => console.log(err))
        
    },[])
    return (
        <div>
            <h2>This page is ment </h2>
            <h3>The contents inside my json placeholder</h3>
            <ol>
                {post.map((post) => (
                    <li key ={post.id}>{post.title}</li>
                ))}
            </ol>
        </div>
    )
}
export default UseEffectAPI;