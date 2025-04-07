import { getTranslations } from "next-intl/server";
import TestimonialCarousel from "@/components/Section/Testimonial/TestimonialCarousel";
import Header from "@/components/Section/Header/Header";
import Cta from "@/components/Section/Cta";

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

     <TestimonialCarousel />


    <Cta />



    </>

  );
}
