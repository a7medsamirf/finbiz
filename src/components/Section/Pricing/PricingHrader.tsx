import React from 'react'
import { motion } from 'framer-motion';
import { Tag  } from 'lucide-react';
import {useTranslations} from 'next-intl';

const PricingHrader = () => {
    const t = useTranslations('Pricing');
  return (
    <>
            <div className="max-w-3xl mx-auto text-center mb-16">
        <div className="mb-5 flex justify-center">
          <div className="relative flex rounded-full px-2 py-1 text-sm/6 bg-white dark:text-primary border dark:border-primary/30 dark:bg-primary/5 gap-3">
                  <a href="" className="flex items-center text-sm/6 font-semibold dark:text-primary"> 
                  <Tag className='size-4'  />
                  <span className="mx-3">
                  {t('suptitle')}
                  </span>

                  </a>
                  </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: -70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0, duration: 0.5 }}
                    viewport={{ once: false, amount: 0.5 }} //  حدوث الرسوم المتحركة مرة واحدة فقط - يتم تشغيله عندما يكون 20% من العنصر مرئيًا.
                  >
                    <h2 className="text-3xl md:text-4xl font-bold capitalize text-gray-900 mb-4 dark:text-white">
                      {t('title')}
                    </h2>
                  </motion.div>
                              

                  <p className="text-gray-600 dark:text-gray-400">
                  {t('description')}
                  </p>
              </div>
    </>
  )
}

export default PricingHrader