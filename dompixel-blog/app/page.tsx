import React from 'react';

import RecentPostComponent from './components/organisms/post-recent-section/post-recent';
import CardsSectionComponent from './components/organisms/cards/cards';

import dataPost from "@utils/data";

const HomePage: React.FC = () => {
  return (
    <div className='flex flex-col w-full bg-brand-secondary-10'>
        <RecentPostComponent posts={dataPost}/>
        <CardsSectionComponent title="Most popular posts" posts={dataPost}/>
    </div>
  );
};

export default HomePage;