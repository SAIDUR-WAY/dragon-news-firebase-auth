import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Newscard from '../../News/Newscard';


const Category = () => {
     const {id} = useParams()

     const news = useLoaderData();
     // console.log(news)
     return (
          <div>
               <h2>This is a Category! {news.length}</h2>

               {
                    news.map(news => <Newscard
                    key={news._id}
                    news={news}
                    ></Newscard>)
               }
          </div>
     );
};

export default Category;