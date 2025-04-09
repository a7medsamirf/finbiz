
import React from 'react'
import {useTranslations} from 'next-intl';
import Image from "next/image";
import Button from '../SharesComponent/Button';

const Cta = () => {
  const t = useTranslations('Cta');
  return (
    <>
    <section className=" ">

  <div className="container mx-auto p-5">
  <div className="mx-auto max-w-screen mt-20 px-4 py-5 sm:px-6 lg:px-8 bg-white dark:bg-gray-950 rounded-3xl">
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 md:items-center items-center gap-4 md:gap-8">
      <div className='col-span-1 md:col-span-2 text-center p-5'>
        <div className="max-w-lg md:max-w-none w-12/12 lg:w-9/12  md:text-left md:rtl:text-right">
          <h2 className="leading-tight text-3xl sm:text-5xl lg:text-6xl mb-4 font-semibold text-gray-900 dark:text-white ">
            {t('title')}
          </h2>

          <div className="md:flex grid gap-2 my-5 md:mt-10">
            <Button className='w-full' label={t('RequestDemo')} variant="primary" size="lg"  />
            <Button className='w-full' label={t('WatchVideo')} variant="secondary" size="lg"  />
          </div>
        </div>
      </div>

      <div className='relative rounded overflow-hidden bg-cover bg-no-repeat'>


      <Image
            src="/assets/images/Rectangle.png"
            alt="Logo White"
            width={500}
            height={500}
            className="object-cover object-center rounded transition duration-300 ease-in-out hover:scale-110" 
        /> 

      </div>
    </div>
  </div>

  </div>
</section>
    </>
  )
}

export default Cta