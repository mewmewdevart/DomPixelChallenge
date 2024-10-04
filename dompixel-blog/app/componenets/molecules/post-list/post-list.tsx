import React from "react";

const PostList: React.FC = () => {
  return (
    <div>
      <ul className="flex flex-col">
          <li className='flex flex-col min-h-[42px]'>
            <div>
              <a href="">Lorem ipsum</a>
              <hr className="border-b-1 border-[#e7e7e7] "/>
            </div>
          </li>
          <li className='flex flex-col min-h-[42px]'>
            <div>
              <a href="">Lorem ipsum</a>
              <hr className="border-b-1 border-[#e7e7e7] "/>
            </div>
          </li>
          <li className='flex flex-col min-h-[42px]'>
            <div>
              <a href="">Lorem ipsum</a>
              <hr className="border-b-1 border-[#e7e7e7] "/>
            </div>
          </li>
          <li className='flex flex-col min-h-[42px]'>
            <div>
              <a href="">Lorem ipsum</a>
              <hr className="border-b-1 border-[#e7e7e7] "/>
            </div>
          </li>
          <li className='flex flex-col min-h-[42px]'>
            <div>
              <a href="">Lorem ipsum</a>
              <hr className="border-b-1 border-[#e7e7e7] "/>
            </div>
          </li>
      </ul>
    </div>
  );
};

export default PostList;