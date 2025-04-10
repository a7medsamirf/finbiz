"use client";
import React from 'react';
import PricingCard from './PricingCard';
import {useTranslations} from 'next-intl';
import SectionHrader from '@/components/SharesComponent/SectionHrader';

const Pricing = () => {
  const tFeatures = useTranslations('Features');
  const t = useTranslations('Pricing');
  // Array of pricing plans
  const pricingPlans = [
    {
      title: t('basicTitle'),
      price: "$499",
      description: t('basicDescription'),
      features: [
        tFeatures('fullWebsite'),
        tFeatures('webflow'),
        tFeatures('limitedSupport'),
      ],
      buttonLink: "#",
      label: t('getStarted'),
      planType: "basic",
    },
    {
      title: t('proTitle'),
      price: "$499",
      description: t('proDescription'),
      features: [
        tFeatures('fullWebsite'),
        tFeatures('webflow'),
        tFeatures('limitedSupport'),
        tFeatures('standardIntegrations'),
        tFeatures('emailSupport'),
      ],
      popular: true,
      buttonLink: "",
      label: t('getStarted'),
      planType: "pro",
    },
    {
      title: t('enterpriseTitle'),
      price: "$999",
      description: t('enterpriseDescription'),
      features: [
        tFeatures('fullWebsite'),
        tFeatures('webflow'),
        tFeatures('limitedSupport'),
        tFeatures('standardIntegrations'),
        tFeatures('emailSupport'),
        tFeatures('emailSupport'),
      ],
      buttonLink: "#",
      label: t('getStarted'),
      planType: "enterprise",
    },
  ];

  return (
    <>
    <section className="mt-20">
      <div className="container mx-auto p-5">
        <div className='mx-auto max-w-screen px-4 py-5 sm:px-6 lg:px-8'> 
          
        {/* Section Hrader */}
         <SectionHrader namespace="Pricing" />

        <div className="mx-auto max-w-screen w-full md:w-5/6 px-4 py-5 sm:px-6 lg:px-8 rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-3 md:items-center items-center gap-4 md:gap-8">
          {pricingPlans.map((plan, index) => (
                <PricingCard 
                  key={index} 
                  {...plan as { 
                    title: string; 
                    price: string; 
                    description: string; 
                    features: string[]; 
                    buttonLink: string; 
                    label: string; 
                    planType: "basic" | "pro" | "enterprise";
                    popular?: boolean;
                  }} 
                />
              ))}
          </div>
        </div>
        </div>
       </div>
    </section>

    </>
      

  
  );
};

export default Pricing;
