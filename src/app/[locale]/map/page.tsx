import MapComponent from '@/components/MapComponent'
import { getUserLoc } from '@/services/map'
import React from 'react'
const map = async () => {
  const location = await getUserLoc();
  
  return (
    <div className='mt-30'>
      <h2>Map</h2>
      <MapComponent location={location}/>
    </div>
  )
}

export default map