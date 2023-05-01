import React from 'react'
import qZone1 from '../../assets/qZone1.png';
import qZone2 from '../../assets/qZone2.png';
import qZone3 from '../../assets/qZone3.png';

const Qzone = () => {
  return (
    <div className='bg-secondary text-center py-2 rounded'>
      <h5 className='text-white'>Q-Zone</h5>
      <img src={qZone1} alt="Image" />
      <img src={qZone2} alt="Image" />
      <img src={qZone3} alt="Image" />
    </div>
  )
}

export default Qzone
