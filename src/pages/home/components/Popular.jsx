import React from 'react'
import ProductCard from '../../../components/product/card'

const Popular = () => {
    return (
        <>
          <p className='text-2xl font-medium text-center mb-5'>Sản phẩm phổ biến</p>
          <div className='grid grid-cols-12 gap-10 px-3'>
              <div className="col-span-3">
                  <ProductCard/>
              </div>
              <div className="col-span-3">
                  <ProductCard/>
              </div>
              <div className="col-span-3">
                  <ProductCard/>
              </div>
              <div className="col-span-3">
                  <ProductCard/>
              </div>
              <div className="col-span-3">
                  <ProductCard/>
              </div>
              <div className="col-span-3">
                  <ProductCard/>
              </div>
              <div className="col-span-3">
                  <ProductCard/>
              </div>
              <div className="col-span-3">
                  <ProductCard/>
              </div>
          </div>
        </>
    )
}

export default Popular