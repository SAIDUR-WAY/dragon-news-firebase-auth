import React from 'react';
import { useLoaderData } from 'react-router-dom';

const News = () => {
     const news = useLoaderData()
     console.log('newsData', news)
     return (
          <div>
               <h2>News cooming soon!</h2>
          </div>
     );
};

export default News;