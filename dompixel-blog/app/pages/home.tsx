import React from 'react';
import { Navbar } from '../componenets/organisms/navbar/navbar';


const HomePage: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen w-full h-[100vh] bg-brand-primary-10'>
        <Navbar/>
    </div>
  );
};

export default HomePage;