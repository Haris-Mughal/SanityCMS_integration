// import React, { useEffect, useState } from "react";
import client from "./lib/contentfulClient";
// import Image from "next/image";

const fetchServices = async () => {
  const response = await client.getEntries({ content_type: "services" });
  // console.log("response", response.items[0].fields.title);

  const services = response.items.map((item: any) => {
    return {
      title: item.fields.title,
      description: item.fields.description,
      // image: item.fields.image.fields.file.url,
    };
  });

  return services;
};

interface Service {
  title: string;
  description: string;
  // image: string;
}

interface Services {
  service: Service;
}

const Home: React.FC<Services> = async () => {
  const services = await fetchServices();

  return (
    <>
      <div className="flex flex-col justify-center items-start p-12">
        <div className="text-[32px] font-semibold flex text-center mx-auto">
          Services
        </div>
        <div className="flex flex-row flex-wrap items-start justify-center py-4">
          {services.map((service: Service, i: number) => (
            <div key={i}>
              <div className="p-7 m-2 border-black border-[1px] rounded-[20px] flex flex-col justify-center items-start w-[420px]">
                <div className="text-[24px] font-semibold text-center">
                  {service.title}
                </div>
                <div className="text-[12px] font-normal text-start">
                  {service.description}
                </div>
                {/* <div>
                <Image src={service.image} alt={service.title} />
              </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
