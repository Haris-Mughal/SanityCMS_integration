// import client from "sanity/lib/client";
import { createClient } from "next-sanity";

const fetchServices = async () => {
  const client = createClient({
    apiVersion: "2024-03-07",
    dataset: "production",
    projectId: "7tp7d19y",
    useCdn: false,
  });

  const services = await client.fetch(
    '*[_type == "services"]',
    {},
    {
      cache: "no-cache",
    }
  );
  // console.log("services", services);
  return services;
};

interface ServiceItems {
  title: string;
  description: string;
}

const Contact: React.FC = async () => {
  const services = await fetchServices();

  return (
    <>
      <div>Contact Page</div>
      {services.map((service: ServiceItems, i: number) => {
        return (
          <div key={i}>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
          </div>
        );
      })}
    </>
  );
};

export default Contact;
