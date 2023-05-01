import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Leftnavbar = () => {
     const [categorys, setCategorys] = useState([])

     useEffect(()=>{
          fetch('http://localhost:5000/category')
          .then(res => res.json())
          .then(data => setCategorys(data))
          .catch(error=> console.log(error))
     }, [])

     return (
          <div>
               <h4>All Category</h4>
               {
                    categorys.map(category => <p 
                         key={category.id}
                         ><Link 
                         className='text-decoration-none'
                         to={`/category/${category.id}`}
                         >{category.name}</Link></p>)
               }
          </div>
          
     );
};

export default Leftnavbar;