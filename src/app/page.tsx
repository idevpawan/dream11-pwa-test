"use client";

import { useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Sheet } from "react-modal-sheet";

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="p-4">
      <p>Carousel</p>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        initialSlide={1}
        loop={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 10,
          depth: 100,
          modifier: 3.5,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className=""
      >
        <SwiperSlide>
          <img
            alt=""
            width={300}
            height={300}
            className="rounded-lg"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt=""
            width={300}
            height={300}
            className="rounded-lg"
            src="https://swiperjs.com/demos/images/nature-2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt=""
            width={300}
            height={300}
            className="rounded-lg"
            src="https://swiperjs.com/demos/images/nature-3.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt=""
            width={300}
            height={300}
            className="rounded-lg"
            src="https://swiperjs.com/demos/images/nature-4.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt=""
            width={300}
            height={300}
            className="rounded-lg"
            src="https://swiperjs.com/demos/images/nature-5.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt=""
            width={300}
            height={300}
            className="rounded-lg"
            src="https://swiperjs.com/demos/images/nature-6.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt=""
            width={300}
            height={300}
            className="rounded-lg"
            src="https://swiperjs.com/demos/images/nature-7.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt=""
            width={300}
            height={300}
            className="rounded-lg"
            src="https://swiperjs.com/demos/images/nature-8.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            alt=""
            width={300}
            height={300}
            className="rounded-lg"
            src="https://swiperjs.com/demos/images/nature-9.jpg"
          />
        </SwiperSlide>
      </Swiper>

      {/* bottom sheet */}
      <div>
        <p className="py-4">Bottom Sheet</p>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={() => setOpen(true)}
        >
          Open Bottom Sheet
        </button>
      </div>

      <Sheet
        snapPoints={[600, 400, 100, 0]}
        initialSnap={1}
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>drag down to close</Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>

      {/* progress bar */}
      <div className="py-4">
        <p>Progress Bar</p>
        <div className="space-y-5 mt-4">
          <div className="flex items-center gap-x-3 whitespace-nowrap">
            <div
              className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden"
              role="progressbar"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500"
                style={{ width: "25%" }}
              ></div>
            </div>
            <div className="w-10 text-end">
              <span className="text-sm text-gray-800">25%</span>
            </div>
          </div>

          <div className="flex items-center gap-x-3 whitespace-nowrap">
            <div
              className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden"
              role="progressbar"
              aria-valuenow={50}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500"
                style={{ width: "50%" }}
              ></div>
            </div>
            <div className="w-10 text-end">
              <span className="text-sm text-gray-800">50%</span>
            </div>
          </div>

          <div className="flex items-center gap-x-3 whitespace-nowrap">
            <div
              className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden"
              role="progressbar"
              aria-valuenow={75}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500"
                style={{ width: "75%" }}
              ></div>
            </div>
            <div className="w-10 text-end">
              <span className="text-sm text-gray-800">75%</span>
            </div>
          </div>

          <div className="flex items-center gap-x-3 whitespace-nowrap">
            <div
              className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden"
              role="progressbar"
              aria-valuenow={100}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500"
                style={{ width: "100%" }}
              ></div>
            </div>
            <div className="w-10 text-end">
              <span className="text-sm text-gray-800">100%</span>
            </div>
          </div>

          <div className="flex items-center gap-x-3 whitespace-nowrap">
            <div
              className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden"
              role="progressbar"
              aria-valuenow={80}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="flex flex-col justify-center rounded-full overflow-hidden bg-red-500 text-xs text-white text-center whitespace-nowrap transition duration-500"
                style={{ width: "80%" }}
              ></div>
            </div>
            <span className="sr-only">80%</span>
            <div className="w-10 text-end">
              <span className="shrink-0 ms-auto size-4 flex justify-center items-center rounded-full bg-red-500 text-white">
                <svg
                  className="shrink-0 size-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </span>
            </div>
          </div>

          <div className="flex items-center gap-x-3 whitespace-nowrap">
            <div
              className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden"
              role="progressbar"
              aria-valuenow={100}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="flex flex-col justify-center rounded-full overflow-hidden bg-teal-500 text-xs text-white text-center whitespace-nowrap transition duration-500"
                style={{ width: "100%" }}
              ></div>
            </div>
            <span className="sr-only">100%</span>
            <div className="w-10 text-end">
              <span className="shrink-0 ms-auto size-4 flex justify-center items-center rounded-full bg-teal-500 text-white">
                <svg
                  className="shrink-0 size-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* shimmers */}
      <div className="py-4">
        <p>Shimmers</p>
        <div className="flex mt-4 animate-pulse">
          <div className="shrink-0">
            <span className="size-12 block bg-gray-200 rounded-full dark:bg-neutral-700"></span>
          </div>

          <div className="ms-4 mt-2 w-full">
            <p
              className="h-4 bg-gray-200 rounded-full dark:bg-neutral-700"
              style={{ width: "40%" }}
            ></p>

            <ul className="mt-5 space-y-3">
              <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
              <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
              <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
              <li className="w-full h-4 bg-gray-200 rounded-full dark:bg-neutral-700"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
