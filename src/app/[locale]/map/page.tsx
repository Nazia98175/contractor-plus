import MapComponent from '@/components/MapComponent'
import { getUserLoc } from '@/services/map'
import React from 'react'
const map = () => {
  return (
    <div className='mt-30'>
      <h2>Map</h2>
      <MapComponent/>
    </div>
  )
}

export default map