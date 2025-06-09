import { getTranslations } from "next-intl/server";
import TestimonialCarousel from "@/components/Section/Testimonial/TestimonialCarousel";
import Header from "@/components/Section/Header/Header";
import Cta from "@/components/Section/Cta";
import Pricing from "@/components/Section/Pricing/Pricing";
/* import Chart from "@/components/Section/Chart";
import NavScroll from "@/components/Navbar/NavScroll"; */

export async function generateMetadata() {

  const t = await getTranslations("Navbar"); 

  return {
      title: ` ${t("link.home")} | ${t("Metadata.title")} `
  }
}

export default function Home() {
  return (
    <>

      <Header />
 {/*      <NavScroll /> */}

    {/*   <Chart /> */}
     <TestimonialCarousel />

     <Pricing />
    <Cta />



    </>

  );
}
