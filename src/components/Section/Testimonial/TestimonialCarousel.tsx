"use client"; // Required for Next.js 15 (app router)
import { useRef , useState , useEffect } from "react";
import Image from "next/image";
import {useTranslations} from 'next-intl';
import { Quote , ArrowLeft , ArrowRight , MessageSquare   } from 'lucide-react';

// Swiper
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

// Components
import StarRating from "@/components/SharesComponent/StarRating";

// images
import img1 from "../../../../public/assets/images/Testimonial/1.png";
import img2 from "../../../../public/assets/images/Testimonial/2.png";
import img3 from "../../../../public/assets/images/Testimonial/3.png";

// Testimonial Data
const items = [
  {
    id: 1,
    src: img1, // ✅ use 'src' as key
    /* src: "../assets/images/Testimonial/1.png", */
    text: "I really like the system at this management, I love recommending this software to you guys",
    name: "Alper Kamu",
    rating: 1,
  },
  {
    id: 2,
    src: img2,
    text: "We align our success with the success of our customers which is why our offering transcends our software.",
    name: "Alper Kamu",
    rating: 5,
  },
  {
    id: 3,
    src: img3,
    text: "I really like the system at this management, I love recommending this software to you guys",
    name: "Alper Kamu",
    rating: 3,
  },
  {
    id: 4,
    src: img1,
    text: "I really like the system at this management, I love recommending this software to you guys",
    name: "Alper Kamu",
    rating: 5,
  },
  {
    id: 5,
    src: img1,
    text: "I really like the system at this management, I love recommending this software to you guys",
    name: "Alper Kamu",
    rating: 5,
  },
  {
    id: 6,
    src: img3,
    text: "I really like the system at this management, I love recommending this software to you guys",
    name: "Alper Kamu",
    rating: 1,
  },
];


const TestimonialCarousel = () => {
  const t = useTranslations('Testimonial');

  const [isRTL, setIsRTL] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);


  useEffect(() => {
    const dir = document.documentElement.getAttribute("dir");
    setIsRTL(dir === "rtl");
  }, []);


  return (


<section className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
<div className="containe mx-auto px-4">
<div className="max-w-3xl mx-auto text-center mb-16">
      <div className="mb-5 flex justify-center">
        <div className="relative flex rounded-full px-2 py-1 text-sm/6 bg-white dark:text-primary border dark:border-primary/30 dark:bg-primary/5 gap-3">
                <a href="" className="flex items-center text-sm/6 font-semibold dark:text-primary"> 
                <MessageSquare />
                <span className="mx-3">
                {t('suptitle')}
                </span>

                </a>
                </div>
              </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 dark:text-white"> {t('title')} </h2>
                <p className="text-gray-600 dark:text-gray-400">
                {t('description')}
                </p>
            </div>
<div className="Gallery-slider wow fadeInUp slow gap-1" data-wow-delay="0.2s">
<Swiper
        modules={[Navigation, Pagination, Autoplay]}
        onSwiper={(swiper: any) => (swiperRef.current = swiper)}
        spaceBetween={10}
        slidesPerView={1}
        navigation={true}
        loop 
        centeredSlides={true}
        pagination={false}
        scrollbar={{ draggable: false }}
        autoplay={{ delay: 2000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
          1920: { slidesPerView: 5 },
        }}
        className="mySwiper"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id} className="text-left rtl:text-right">

    <div className="flex flex-wrap -m-4">
      <div className="p-4 w-full h-full">
        <div className=" bg-white dark:bg-gray-900 p-8 rounded-xl ">
         
          
          <p className="leading-relaxed mb-6 h-20">{item.text}</p>
          <div className="flex justify-between">

            <div>
            <a className="inline-flex items-center">
                <Image
                          src={item.src}
                          alt={item.name}
                          width={96}
                          height={96}
                          className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                        />

            <span className="flex-grow flex flex-col  ltr:pl-4 rtl:pr-4">
              <span className="title-font font-medium  text-gray-900 dark:text-white">Alper Kamu</span>
              <span className="text-gray-500 text-sm">
                     <StarRating rating={item.rating} />
              </span>
            </span>
          </a>
            </div>
            <div className="">
            <Quote className="text-gray-300 dark:text-gray-500 size-10 opacity-75 stroke-1"  />
          </div>

          </div>
         
        </div>
      </div>
    </div>


          </SwiperSlide>
        ))}
      </Swiper>
   {/* Swiper Buttons */}
   <div className="max-w-3xl mx-auto text-center pt-16 space-x-4">
   <button
      onClick={() => swiperRef.current?.slidePrev()}
      className="bg-white dark:bg-gray-800 text-black dark:text-white py-3 px-3 hover:bg-primary hover:text-black transition ease-in-out rounded-full"
    >

     {isRTL ? <ArrowRight /> : <ArrowLeft />}

    </button>

          <button
      onClick={() => swiperRef.current?.slideNext()}
      className="bg-white dark:bg-gray-800 text-black dark:text-white py-3 px-3 hover:bg-primary hover:text-black transition ease-in-out rounded-full "
    >

    {isRTL ? <ArrowLeft /> : <ArrowRight />}

    </button>
   </div>


      {/* Swiper container */}
            </div>

</div>

    </section>

    
  );
};

    export default TestimonialCarousel;




