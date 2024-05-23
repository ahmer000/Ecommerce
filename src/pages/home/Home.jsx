import React from 'react';
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/heroSection/HeroSection';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/productCard/ProductCard';
import Tracks from '../../components/track/Tracks';
import Testimonial from '../../components/testimonial/Testimonial';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteFromCart } from '../../redux/cartSlice';


function Home() {
  const dispatch = useDispatch();
  const cartItem = useSelector((state)=> state.cart)

  console.log(cartItem);
  const addCart = ()=>{
    dispatch(addToCart("shirt"));
  }
  const deleteCart = () =>{
    dispatch(deleteFromCart("shirt"));
  }
  return (
    <>  
      <Layout>
        <div className='flex gap-5 justify-center'>
          <button className='bg-blue' onClick={()=> addCart()}>Add</button>
          <button className='bg-red' onClick={()=> deleteCart()}>Delete</button>
        </div>
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