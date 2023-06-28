import React from 'react'
import { motion } from 'framer-motion'

const Shop = () => {
  return (
    <div className='shop'>
    <h2 className='shoph'>SHOP WITH US</h2>
    <div >
      <motion.h1><motion.span 
               initial={{ x:-300, scale: 0.5 }} 
               animate={{ x: 0, scale: 1 }} 
               transition = {{duration: 1.5}}
      >
        ECOMMERCE
        </motion.span> 
        <motion.div
              initial={{ x:300, scale: 0.5 }} 
              animate={{ x: 0, scale: 1 }} 
              transition = {{duration: 1.5}}
        >
        ON OUR VARIOUS PRODUCTS
        </motion.div>
        </motion.h1>
    </div>
    </div>

  )
}

export default Shop