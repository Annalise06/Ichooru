import React from 'react';
import Heropage from './Heropage';
import "./heropage.css"
import Nav from '../Nav';
import Navi from './navi';

const Helper = () => {
  return (
    <>
      <div className='background'>
        <Navi/>
          <Heropage/>
      </div>
    </>
    
  )
}

export default Helper;