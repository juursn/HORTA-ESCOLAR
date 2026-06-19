import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

interface CardsProps {
	textos: string[]
	bgColor?: string
	textColor?: string
}

export const Cards = ({
	textos,
	bgColor = "#5eff8b",
	textColor = "#1a4225",
}: CardsProps) => {
	return (
		<div className="min-w-48 max-w-65 h-full">
			<Swiper
				className="h-full"
				modules={[Pagination]}
				pagination={{ clickable: true }}
				spaceBetween={5}
				slidesPerView={1}
				centeredSlides
			>
				{textos.map((texto, index) => (
					<SwiperSlide
						key={index}
						className="rounded-[22px] px-3 pt-3 pb-8 flex flex-col justify-center items-center border border-emerald-200/20 min-h-45"
						style={{
							backgroundColor: bgColor,
							color: textColor,
						}}
					>
						{texto}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
