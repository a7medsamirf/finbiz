"use client";
import { useState , useEffect } from "react";
import React from 'react'
import Image from "next/image";
import { ArrowLeft , ArrowRight  } from 'lucide-react';
import {useTranslations} from 'next-intl';

import Button from '../../SharesComponent/Button';

// images
import img1 from "../../../../public/assets/images/Testimonial/1.png";
import img2 from "../../../../public/assets/images/Testimonial/2.png";
import img3 from "../../../../public/assets/images/Testimonial/3.png";

// Testimonial Data
const items = [
  {
    id: 1,
    src: img1, // ✅ use 'src' as key
    name: "img 1",
  },
  {
    id: 2,
    src: img2,
    name: "img 2",
  },
  {
    id: 3,
    src: img3,
    name: "img 3",
  },
  {
    id: 4,
    src: img1,
    name: "img 1",
  }
];
const Header = () => {
  const t = useTranslations('Header');
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    const dir = document.documentElement.getAttribute("dir");
    setIsRTL(dir === "rtl");
  }, []);


  return (
    <>


 <div className="bg-gray-100 dark:bg-gray-900">

<div className="relative isolate px-6 pt-14 lg:px-8">
  <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
    <div className="mb-8 flex justify-center">


      <div className="relative flex rounded-full px-2 py-1 text-sm/6 bg-white dark:text-primary  border dark:border-primary/30 border-b-0 dark:bg-primary/5 gap-3">
      <a href="" className="font-semibold text-white bg-primary shadow-lg shadow-primary/20 rounded-full px-3 py-1">
             {t('ButtonNew')}
        </a>

        <a href="" className="flex items-center text-sm/6 font-semibold dark:text-primary"> 
        {t('suptitle')}
         <span className="mx-3 text-primary">
         {isRTL ? (
                     <ArrowLeft className="size-4" />
                  ) : (
                  
                     <ArrowRight className="size-4" />
                  )
                  }
         </span>
         </a>

      </div>
    </div>
    <div className="text-center">
      <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 dark:text-white sm:text-7xl">
      {t('title')}
      </h1>
      <p className="my-8 text-gray-500 dark:text-gray-400 sm:text-xl/8">
      {t('description')}
      </p>

      <form className="hidden sm:block">
        <div className="mx-auto max-w-2xl sm:flex sm:space-x-3 p-3 bg-white border border-gray-200 rounded-full shadow-lg shadow-gray-100 dark:bg-gray-900 dark:border-neutral-700 dark:shadow-gray-900/20">
          <div className="w-full pb-2 sm:pb-0">
            <input type="text" placeholder={t('placeholder')} className="rounded-full py-2.5 sm:py-3 px-4 block w-full border-transparent
             dark:text-white dark:placeholder-gray-200 focus:outline-none"  />
          </div>
   
          <div className="whitespace-nowrap pt-2 sm:pt-0 grid sm:block">
            
          <Button className="w-full" label={t('ButtonBookaDemo')} variant="secondary" size="md"  />
        


          </div>
        </div>
      </form>



  <div className="mt-10 flex items-center justify-center">
    <div className="">
      <div className="shrink-0 pb-5">

        <div className="flex justify-center -space-x-3">
              {items.map((item) => (
                    <Image
                              src={item.src}
                              alt={item.name}
                              key={item.id}
                              width={96}
                              height={96}
                              className="inline-block size-8 rounded-full ring-2 ring-white dark:ring-neutral-900"
                             />
                   ))}
        </div>
   
      </div>

      <div className="pt-5 sm:pt-0 sm:ps-5">
        <div className="text-sm text-gray-500 dark:text-neutral-500">1,200+ reviews (4.9 of 5)</div>
      </div>
    </div>
    </div>

    </div>
    
  </div>

</div>
</div>





    </>
  )
}

export default Header
