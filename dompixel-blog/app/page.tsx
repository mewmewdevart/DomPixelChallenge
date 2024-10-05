import React from 'react';
import RecentPost from './componenets/organisms/post-recent/post-recent';
import CardsSectionComponent from './componenets/organisms/cards/cards';


const HomePage: React.FC = () => {
  return (
    <div className='flex flex-col w-full bg-brand-secondary-10'>
        <RecentPost />
        <CardsSectionComponent />
    </div>
  );
};

export default HomePage;