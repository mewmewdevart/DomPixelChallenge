import React from 'react';
import { Navbar } from '../componenets/organisms/navbar/navbar';
import { Footer } from '../componenets/organisms/footer/footer';


const HomePage: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen w-full h-[100vh] bg-brand-primary-10'>
        <Navbar/>
        <h1>o</h1>
        <Footer/>
    </div>
  );
};

export default HomePage;