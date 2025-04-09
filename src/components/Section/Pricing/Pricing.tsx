"use client";
import React from 'react';
import PricingCard from './PricingCard';
import {useTranslations} from 'next-intl';
import SectionHrader from '@/components/SharesComponent/SectionHrader';

const pricingPlans = [
  {
    title: 'Basic',
    price: '$499',
    description: 'Get a professional website designed according to your needs.',
    features: ['Get a fully designed Website.', 'Webflow Development', 'Limited Support'],
    buttonLink: '#',
    label: 'Get started',
    planType: 'basic'
  },
  {
    title: 'Pro',
    price: '$499',
    description: 'Get a professional website designed according to your needs.',
    features: ['Get a fully designed Website.', 'Webflow Development', 'Limited Support', 'Standart integrations', 'Email support'],
    popular: true,
    buttonLink: '',
    label: 'Get started',
    planType: 'pro'
  },
  {
    title: 'Enterprise',
    price: '$999',
    description: 'Get a professional website designed according to your needs.',
    features: ['Get a fully designed Website.', 'Webflow Development', 'Limited Support', 'Standart integrations', 'Email support', 'Email support'],
    buttonLink: '#',
    label: 'Get started',
    planType: 'enterprise'
  },
];

const Pricing = () => {
    const t = useTranslations('Pricing');
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
