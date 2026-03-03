import React from 'react'
import Header from '../component/usercomponents/home/Header'
import AboutUs from '../component/usercomponents/home/AboutUs'
import WhyChooseUs from '../component/usercomponents/home/WhyChooseUs'
import MyTeam from '../component/usercomponents/home/MyTeam'
import OurServices from '../component/usercomponents/home/OurServices'
import Reviews from '../component/usercomponents/home/Reviews'
import Faq from '../component/usercomponents/home/Faq'

function HomePage() {
  return (
    <div className='overflow-x-hidden'>
      <Header/>
      <WhyChooseUs/>
      <AboutUs/>
      <MyTeam/>
      <OurServices/>
      <Reviews/>
      <Faq/>
    </div>
  )
}

export default HomePage
