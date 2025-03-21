import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CardItem from "./CardItem";
import "../App.css";
import { Navigation } from "swiper/modules";

const TabItem = ({ items }) => {
	return (
		<Swiper
			modules={[Navigation]}
			slidesPerView={3}
			spaceBetween={30}
			grabCursor={true}
			centeredSlides={false}
			navigation={{
				prevEl: ".nav-arr:first-child",
				nextEl: ".nav-arr:last-child",
				disabledClass: "navDisabled",
			}}
		>
			{items.map((element, index) => (
				<SwiperSlide key={index}>
					<CardItem data={element} />
				</SwiperSlide>
			))}

			<div className="my-8 flex gap-4 items-center justify-center">
				<span className="nav-arr">&lsaquo;</span>
				<span className="nav-arr">&rsaquo;</span>
			</div>
		</Swiper>
	);
};

export default TabItem;
