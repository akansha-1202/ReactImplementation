// import React from 'react'
// import { Routes, Route} from 'react-router-dom';
// import Home from './Home';
// import A from './A'
// import B from './B'
// import C from './C'
// import { PageNotFound } from './PageNotFound';
// import { User } from './User';


// export const RoutingFiles = () => {
//   return (
//     <Routes>
//         <Route path="/" element = {<Home/>}/>
//         <Route path="/pageA" element = {<A/>}/>
//         <Route path="/pageB" element = {<B/>}/>
//         <Route path="/pageC" element = {<C/>}/>     
//         <Route path="/user/:Name/:Id" element = {<User/>}/>
//         <Route path="*" element = {<PageNotFound/>}/>
//     </Routes> 
//    )
// }


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./Blog";
import Post from "./Post";

function RoutingFiles() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Post/>} />
        <Route path="/post/:id" element={<Blog/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutingFiles;
