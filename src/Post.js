import React, { useState } from 'react'

export default function Post() {

    const [post, setPost] = useState()
    async function getpost(){
      await fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(json => setPost(json))
    }
    return (
        <div>
            Title that you would get again after changing for Docker test:
            {post? <p> {post.title}</p>: null}
            <br/>
            <button onClick={getpost}>Get Title</button>
        </div>
    )
}
