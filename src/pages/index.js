import dynamic from "next/dynamic";
import BannerOne from "@/components/BannerOne/BannerOne";
import BlogOne from "@/components/BlogOne/BlogOne";
import Script from 'next/script'
const BrandOneWithNoSSR = dynamic(
  () => import("@/components/BrandOne/BrandOne"),
  { ssr: false }
);
import CtaOne from "@/components/CtaOne/CtaOne";
import CtaAbout from "@/components/CtaAbout/CtaAbout";
import CtaThree from "@/components/CtaThree/CtaThree";
import CtaTwo from "@/components/CtaTwo/CtaTwo";
import FunFactOne from "@/components/FunFactOne/FunFactOne";
import Layout from "@/components/Layout/Layout";
import PricingOne from "@/components/PricingOne/PricingOne";
import ServiceOne from "@/components/ServiceOne/ServiceOne";
import TestimonialsOne from "@/components/TestimonialsOne/TestimonialsOne";
import React from "react";
import { useState } from "react";

const Home = () => 

  {
    const [firstName, setFirstName] = useState("");
  
    const resetInputFields = () => {
      setTimeout(() => {
        setFirstName("");
      }, 3000);
    };
  
    const submitHandler = async (e) => {
      e.preventDefault();
      try {
        const body = {firstName};
        await fetch("/api/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
      console.log('bbebebeebe');
    
      alert('aaaa')
     
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <Layout pageTitle="Software for Magazine Publishers . Magazinecrm">
      <script data-goatcounter="https://magazinecrm.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>
     <BannerOne/>
    
<ServiceOne /> 
     <CtaThree />
    
      <PricingOne />
   
      <BrandOneWithNoSSR />
      <BrandOneWithNoSSR />
    
      <BlogOne totalBlogs={1} isScrollActive />
   
      <CtaOne isScrollActive />
      
    </Layout>

  );
};

export default Home;
