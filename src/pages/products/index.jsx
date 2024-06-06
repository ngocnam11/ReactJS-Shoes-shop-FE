import React from 'react'
import ProductsPageList from './components/list'
import ProductsPageFilter from './components/filter'

const ProductsPage = () => {
    return (
        <div className='grid grid-cols-12 gap-3 container m-auto mt-10'>
            <ProductsPageFilter/>
            <ProductsPageList/>
        </div>
    )
}

export default ProductsPage