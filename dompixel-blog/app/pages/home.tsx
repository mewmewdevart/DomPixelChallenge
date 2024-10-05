import React from 'react';
import { Navbar } from '../componenets/organisms/navbar/navbar';
import { Footer } from '../componenets/organisms/footer/footer';
import RecentPost from '../componenets/organisms/post-recent/post-recent';
import CardsSectionComponent from '../componenets/organisms/cards/cards';


const HomePage: React.FC = () => {
  return (
    <div className='flex flex-col w-full bg-brand-secondary-10'>
        <Navbar/>
        <RecentPost />
        <CardsSectionComponent />
        <Footer/>
    </div>
  );
};

export default HomePage;