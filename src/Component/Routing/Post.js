// import React from 'react'
// import { useParams } from 'react-router-dom'

// export const User = () => {
//     const params= useParams();
//     console.log(params)
//   return (
//     <div>
//       {params.user.name}
//       <br/>
//       {params.user.id}
    
//     </div>
//   )
// }

import { useParams } from "react-router-dom";

function Post() {
  const { id } = useParams();

  const post = {
    id: 1,
    title: "Post title",
    content: "Lorem ipsum dolor sit amet",
  };

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default Post;