import React,{useState,useEffect} from 'react';
import "./Blog.css";
import BlogCard from '../components/BlogCard';
const Blog = () => {
    const [blogs,setBlog]=useState([]);
    const fetchData=()=>{
      fetch('https://filmen2.onrender.com/data/blogData.json')
      .then(res => res.json())
      .then(data=>setBlog(data))
      .catch(e=>console.log(e.message));
  };

  useEffect(()=>{
      fetchData();
  },[]);
  return (
    <section id="blogs" className="blogs">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">Our Blog</h4>
        </div>
        <div className="row mt-5">
            {
              blogs  && blogs.length>0 && blogs.map(blog=>(
                <BlogCard key={blog._id} blog={blog}/>
              ))
            }
        </div>
      </div>
    </section>
  )
}

export default Blog;
