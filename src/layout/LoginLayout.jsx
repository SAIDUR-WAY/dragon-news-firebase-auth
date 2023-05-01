import React from 'react';
import Header from '../pages/Shared/Header';
import { Outlet } from 'react-router-dom';
import Navigation from '../pages/Shared/Navigation';

const LoginLayout = () => {
     return (
          <div>
               <Navigation></Navigation>
               <Outlet></Outlet>
          </div>
     );
};

export default LoginLayout;