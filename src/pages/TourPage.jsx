import React from 'react'
import TourHeader from '../component/usercomponents/tour/TourHeader'
import TourExperience from '../component/usercomponents/tour/TourExperience'
import TourFeatures from '../component/usercomponents/tour/TourFeatures'
import TourToggle from '../component/usercomponents/tour/TourToggle'

function TourPage() {
  return (
    <div className='overflow-hidden'>
      <TourHeader/>
      <TourExperience />
      <TourToggle />
      <TourFeatures />
    </div>
  )
}

export default TourPage
