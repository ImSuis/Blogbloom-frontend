import React from 'react';
import { useParams } from 'react-router-dom';
import BlogPosts from '../components/BlogPost';
import Sidebar from '../components/Sidebar';

const HomePage = () => {
  const { pageNumber } = useParams();
  
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-9">
          <BlogPosts pageNumber={pageNumber} /> {/* Pass the pageNumber to the BlogPosts component */}
        </div>
        <div className="col-md-3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
