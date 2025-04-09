
import React from 'react';
import { Check } from 'lucide-react';
import Button from '@/components/SharesComponent/Button';
import {useTranslations} from 'next-intl';

import { Sparkle } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  label?: string; // <-- Added label prop
  popular?: boolean;
  buttonLink?: string;
  planType: 'basic' | 'pro' | 'enterprise';
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  label = 'Get started',
  popular = false,
  buttonLink = '#',
  planType,
}) => {
    const tPricing = useTranslations('Pricing');
    const tButton = useTranslations('Button');
  return (
    <div className="flex flex-col bg-white border border-gray-200 text-center rounded-2xl p-4 md:p-8 dark:bg-gray-950 dark:border-neutral-800 hover:border-primary ease-in-out transition-all duration-300 h-full">
 <div className="flex flex-col h-full">
 <div className="mb-3 md:text-right md:rtl:text-left min-h-[50px]">
    {/* Popular badge */}
      {popular && (
        <div className="mb-3 md:text-right md:rtl:text-left">
            <div className="inline-flex items-center relative rounded-full px-2 py-1 text-sm/6 bg-white dark:text-midnight border-2 dark:border-midnight/30 dark:bg-cyan-950/50 gap-3">
                  <a href="" className="flex items-center text-sm/6 font-semibold dark:text-midnight"> 
                  <Sparkle className='size-4'  />
                  <span className="mx-2">
                     {tPricing('Popular')}
                  </span>

                  </a>
                  </div>

        </div>
      )}
         </div>
        {/* Card content */}
        <div className="flex flex-col flex-grow">
                 <h4 className={`font-medium text-lg ${
                    planType === 'basic' 
                      ? 'text-gray-400 dark:text-gray-400'
                      : planType === 'pro'
                      ? 'dark:text-primary'
                      : 'dark:text-primary'
                  }`}>
                    {title}
                  </h4>
                  <p className="mt-2 text-sm text-gray-500 dark:text-neutral-500">{description}</p>
             
            <div className='py-10'>
            <p className="mt-5 gap-x-2 text-3xl md:text-4xl xl:text-5xl">
                    <span className="text-5xl font-semibold tracking-tight text-white"> {price}</span>
                    <span className="text-base text-gray-400">/Month</span>
                  </p>

            </div>
           
            <hr className="h-px bg-gray-400 border-none dark:bg-gray-800"></hr>

      <ul className="my-10 space-y-2.5 text-sm flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex gap-x-2">
            <Check className="shrink-0 mt-0.5 size-4 text-white" />
            <span className="text-gray-800 dark:text-neutral-400">{feature}</span>
          </li>
        ))}
      </ul>

      </div>
      <div className="mt-auto pt-5 w-full">
      {planType === 'basic' && (
          <Button
            className="w-full"
            label={tButton('RequestDemo')}
            variant="DarkBtn"
            size="lg"
          />
        )}
        {planType === 'pro' && (
          <Button
            className="w-full"
            label={tButton('RequestDemo')}
            variant="secondary"
            size="lg"
          />
        )}
        {planType === 'enterprise' && (
          <Button
            className="w-full"
            label={tButton('RequestDemo')}
            variant="primary"
            size="lg"
          />
        )}
      </div>
    </div>
    </div>
  );
};

export default PricingCard;
