import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Grid, Navigation } from "swiper/modules";

function TabItemGal({ images }) {
	return (
		<Swiper
			modules={[Grid, Navigation]}
			grid={{
				rows: 2,
			}}
			spaceBetween={20}
			slidesPerView={4}
			navigation={{
				prevEl: ".nav-arr:first-child",
				nextEl: ".nav-arr:last-child",
				disabledClass: "navDisabled",
			}}
		>
			{images.map((img, index) => (
				<SwiperSlide key={index}>
					<img
						src={img}
						alt={`img-${index}`}
						className="h-64 w-full object-cover rounded-md"
					/>
				</SwiperSlide>
			))}

			<div className="my-8 flex gap-4 items-center justify-center">
				<span className="nav-arr">&lsaquo;</span>
				<span className="nav-arr">&rsaquo;</span>
			</div>
		</Swiper>
	);
}

export default TabItemGal;
