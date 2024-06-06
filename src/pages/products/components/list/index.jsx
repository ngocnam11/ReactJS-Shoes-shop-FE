import React from 'react'
import ProductCard from '../../../../components/product/card';

const ProductsPageList = () => {
    return (
        <div className='col-span-9'>
            <div className='grid grid-cols-12 gap-10'>
                <div className="col-span-4">
                    <ProductCard/>
                </div>
                <div className="col-span-4">
                    <ProductCard/>
                </div>
                <div className="col-span-4">
                    <ProductCard/>
                </div>
                <div className="col-span-4">
                    <ProductCard/>
                </div>
                <div className="col-span-4">
                    <ProductCard/>
                </div>
                <div className="col-span-4">
                    <ProductCard/>
                </div>
                <div className="col-span-4">
                    <ProductCard/>
                </div>
                <div className="col-span-4">
                    <ProductCard/>
                </div>
            </div>
        </div>
    )
}

export default ProductsPageList;