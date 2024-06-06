import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";

const LINKS = [
	{
		label: "Trang chủ",
		href: "/home",
	},
	{
		label: "Sản phẩm",
		href: "/products",
	},
	{
		label: "Phụ kiện",
		href: "/accessory",
	},
	{
		label: "Liên hệ",
		href: "/contact",
	},
];

const HeaderNavigation = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

	return (
		<nav className="grid grid-cols-12 container m-auto gap-3 sticky top-10 py-7">
			<ul className="col-span-5 flex items-center gap-10 px-3">
				{LINKS.map((link) => (
					<li
						key={link.href}
						className={`inline-block text-xl font-medium hover:text-blue-500 ${
							pathname === link.href
								? "text-blue-500"
								: "text-black"
						}`}
					>
						<Link to={link.href}>{link.label}</Link>
					</li>
				))}
			</ul>
			<p className="col-span-2 text-center text-blue-600 text-3xl font-bold">
				Shoes
            </p>
            
            <ul className="col-span-5 flex items-center gap-10 justify-end px-3">
				<li><IoSearch className="text-2xl cursor-pointer"/></li>
				<li onClick={() => navigate("/cart")}><FiShoppingCart className="text-2xl cursor-pointer"/></li>
				<li><LuUser2 className="text-2xl cursor-pointer"/></li>
			</ul>
		</nav>
	);
};

export default HeaderNavigation;
