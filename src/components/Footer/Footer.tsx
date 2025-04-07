import React from 'react'
import {useTranslations} from 'next-intl';
/* import Button from '../SharesComponent/NewButton';  */
import SocialMedia from './SocialMedia';
import Logo from '../SharesComponent/Logo';
import Newsletter from './Newsletter';


const Footer = () => {

    const t = useTranslations('Footer');
  return (
    <> 

<footer className="bg-gray-200 dark:bg-gray-950 pt-20">

    {/*   <Button label="Click Me" variant="primary" size="md" onClick={() => alert("Clicked!")} />
    <Button label="Secondary" variant="secondary" size="lg" />
    <Button label="Outline" variant="outline" size="sm" disabled />
    <Button label="Outline" variant="outline" size="sm"  /> */}

  <div className="container mx-auto p-5">
      <div className="lg:flex py-10">
          <div className="w-full -mx-6 lg:w-2/5">
              <div className="px-6">
                   {/* Logo  */}
                    <a href="/">
                    <Logo /> 
                    </a>
               
                

                  <p className="max-w-sm mt-5 text-gray-600 dark:text-gray-400">{t('title')}</p>

                    {/* Social Media  */}
                    <SocialMedia />
              </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                      <h3 className="text-gray-700 capitalize dark:text-white">{t('CompanyTitle')}</h3>
                      <a href="" className="block mt-2 text-sm text-gray-600 dark:text-gray-400">{t('ServiceLink')}</a>
                      <a href="" className="block mt-2 text-sm text-gray-600 dark:text-gray-400">{t('ResourcesLink')}</a>
                      <a href="" className="block mt-2 text-sm text-gray-600 dark:text-gray-400">{t('AboutUsLink')}</a>
                  </div>

                  <div>
                      <h3 className="text-gray-700 capitalize dark:text-white">{t('HelpTitle')}</h3>
                      <a href="" className="block mt-2 text-sm text-gray-600 dark:text-gray-400">{t('CustomerSupportLink')}</a>
                      <a href="" className="block mt-2 text-sm text-gray-600 dark:text-gray-400">{t('TermsConditionsLink')}</a>
                      <a href="" className="block mt-2 text-sm text-gray-600 dark:text-gray-400">{t('PrivacyPolicyLink')}</a>
                  </div>

            {/* Newsletter  */}
                  <div>
                     <Newsletter />
                  </div>
              </div>
          </div>
      </div>

      <hr className="h-px bg-gray-400 border-none dark:bg-gray-700" />

      <div className='p-5'>
          <p className="text-center text-gray-500 dark:text-gray-400">{t('Copyright')} </p>
      </div>
  </div>
</footer>





    </>
  )
}

export default Footer