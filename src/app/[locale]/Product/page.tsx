
import { getTranslations } from "next-intl/server";

import Image from "next/image";

export async function generateMetadata() {

  const t = await getTranslations("Navbar"); 

  return {
      title: t("link.Product"),
  }
}


export default async function AboutPage() {

  return (
    <div>

  <div className="relative isolate px-6 pt-14 lg:px-8">
    <div className="flex justify-center mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
                  <Image
                    src="/assets/images/coming-soon.png"
                    alt="Logo White"
                    width={500}
                    height={500}
                    className=""
                  />
     
  
        </div>

        </div>

    </div>
  );
}