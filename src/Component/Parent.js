import React from 'react';
import Child from './Child';
import Child2 from './Child2';
import Child3 from './child3';
import ApiIntegration from './FakeApiIntegration/ApiIntegration';
import Apiwithfetch from './FakeApiIntegration/Apiwithfetch'
import { Routes, Route } from "react-router-dom";

function parent() {
  return (
   <div className='mt-5 text-center'>
    <h2 className='mt-5'>Here we are going to learn React</h2>
     <Routes path="/parent">
        <Route path="fetchApi" element={<Apiwithfetch />} />
        <Route path='axiosAPi' element={<ApiIntegration />} />
        <Route path='ContextApiObject' element={<Child />} />
        <Route path='ContextApiarray' element={<Child2 />} />
        <Route path='ContextApiNumber' element={<Child3 />} />
    </Routes>
   </div>
  )
}

export default parent