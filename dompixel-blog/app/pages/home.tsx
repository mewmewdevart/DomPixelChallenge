import React from 'react';
import { Navbar } from '../componenets/organisms/navbar/navbar';
import { Footer } from '../componenets/organisms/footer/footer';
import RecentPost from '../componenets/organisms/post-recent/post-recent';


const HomePage: React.FC = () => {
  return (
    <div className='flex flex-col min-h-screen w-full h-[100vh] bg-brand-secondary-10'>
        <Navbar/>
        <RecentPost />
        <div className="flex-grow" />
        <Footer/>
    </div>
  );
};

export default HomePage;