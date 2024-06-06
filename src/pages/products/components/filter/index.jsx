import React from 'react'
import { Checkbox } from "antd";

const ProductsPageFilter = () => {
    return (
        <aside className='col-span-3 px-3'>
            <div className="mb-10">
                <p className='mb-3 text-xl font-medium'>Danh mục sản phẩm</p>
                <ul>
                    <li className='my-2'>
                        <Checkbox>Adidas</Checkbox>
                    </li>
                    <li className='my-2'>
                        <Checkbox>Nike</Checkbox>
                    </li>
                    <li className='my-2'>
                        <Checkbox>Puma</Checkbox>
                    </li>
                </ul>
            </div>

            <div className="mb-10">
                <p className='mb-3 text-xl font-medium'>Màu sắc</p>
                <ul>
                    <li className='my-2'>
                        <Checkbox>Trắng</Checkbox>
                    </li>
                    <li className='my-2'>
                        <Checkbox>Xanh</Checkbox>
                    </li>
                    <li className='my-2'>
                        <Checkbox>Đỏ</Checkbox>
                    </li>
                    <li className='my-2'>
                        <Checkbox>Vàng</Checkbox>
                    </li>
                    <li className='my-2'>
                        <Checkbox>Đen</Checkbox>
                    </li>
                </ul>
            </div>

            <div className="mb-10">
                <p className='mb-3 text-xl font-medium'>Kích cỡ</p>
                <ul>
                    <li className='my-2'>
                        <Checkbox>38</Checkbox>
                    </li>
                    <li className='my-2'>
                        <Checkbox>39</Checkbox>
                    </li>
                    <li className='my-2'>
                        <Checkbox>40</Checkbox>
                    </li>
                    <li className='my-2'>
                        <Checkbox>41</Checkbox>
                    </li>
                    <li className='my-2'>
                        <Checkbox>42</Checkbox>
                    </li>
                    <li className='my-2'>
                        <Checkbox>43</Checkbox>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default ProductsPageFilter