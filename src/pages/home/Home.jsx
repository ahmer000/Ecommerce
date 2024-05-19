import React from 'react';
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/productCard/ProductCard';
import Tracks from '../../components/track/Tracks';
import Testimonial from '../../components/testimonial/Testimonial';


function Home() {
  
  return (
    <>  
      <Layout>
   <HeroSection/>
   <Filter />
   <ProductCard/>
   <Tracks/>
   <Testimonial/>
    </Layout>
   
    </>

  )
}

export default Home