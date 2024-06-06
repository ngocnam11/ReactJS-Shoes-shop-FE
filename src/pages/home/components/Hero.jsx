import React from 'react'
import {Button} from "antd"

const HomePageHero = () => {
    return (
        <div className="home__hero text-white">
            <div className="container m-auto h-full pt-16 px-3">
                <p className="home__hero-sneakers text-[60px]">Shoes - Flash Sale</p>
                <p className="text-[20px] mt-4">
                    Trở nên nổi bật với những bộ sưu tập giày
                </p>
                <div className="h-[60px]"></div>
                <Button
                    href="/products"
                    type="primary"
                    style={{ width: "290px", height: 50 }}
                >
                    <p className="h-full flex items-center justify-center gap-3">
                        Khám phá ngay
                    </p>
                </Button>
            </div>
        </div>
    );
}

export default HomePageHero