// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import '../style.css'

// function Home() {
//   let user=[
//     {id:1, name:"Arun"},
//     {id:2, name:"Krun"},
//     {id:3, name:"Brun"},
//     {id:4, name:"tarun"},

//   ]
//   const name="FullStack"
//   const navigate = useNavigate();
  
//   const HandleNavigate=() =>{
//     navigate('/pageC',{state:{'Data':`${name}`}})
//   }
//   return (
//     <div>Home<br/>
//       <Link to="/pageA">A page</Link><br/>
//       <Link to="/pageB">B page</Link><br/>
//       <Link to="/pageC">C page</Link><br/>
//       {user.map((item) => (
//   <div>
//     <Link to={"/user/" + item.id}>{item.name}</Link>
//   </div>
// ))}

//       {/* <Link to="/user/google">Google</Link> */}

//       {/* <button onClick={() => navigate("/pageC")}>Click Me!!</button> */}
//       <button onClick={HandleNavigate}>Click Me!!</button>
//     </div>
//   )
// }

// export default Home

import { Link } from "react-router-dom";

function Blog() {
  const posts = [
    { id: 1, title: "First post", content: "Lorem ipsum dolor sit amet" },
    { id: 2, title: "Second post", content: "Consectetur adipiscing elit" },
    { id: 3, title: "Third post", content: "Sed do eiusmod tempor incididunt" },
  ];

  return (
    <div>
      <h1>My Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;


