import React, { useState } from 'react';
import ProgressBar from './components/ProgressBar';
import Card from './components/Card';
import CardContainer from './components/CardContainer';
import { Drawer } from 'antd';


function App() {


  return (
    <div className='w-full bg-black h-[100%]'>
      <div className="p-4 mx-auto max-w-[1200px]  pt-5 ">
        <ProgressBar />
        <div className='w-full h-10 text-center mt-[50px] py-5'>
          <h1 className='text-3xl md:text-5xl text-white'>Choose A Perfect Skip Size</h1>
          <h1 className='text-base text-white font-light mt-5'>Select the skip size that best suits your needs</h1>
        </div>


        <div className='pt-[150px]'>
          <CardContainer />

        </div>
      </div>
    </div>
  );
}

export default App;