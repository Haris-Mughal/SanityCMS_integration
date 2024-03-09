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

const Home: React.FC = async () => {
  const services = await fetchServices();

  return (
    <>
      <div className="flex flex-col justify-center items-start p-12">
        <div className="text-[32px] font-semibold flex text-center mx-auto">
          Services
        </div>
        <div className="flex flex-row flex-wrap items-start justify-center py-4">
          {services.map((service: ServiceItems, i: number) => (
            <div key={i}>
              <div className="p-7 m-2 border-black border-[1px] rounded-[20px] flex flex-col justify-center items-start w-[420px]">
                <div className="text-[24px] font-semibold text-center">
                  {service.title}
                </div>
                <div className="text-[12px] font-normal text-start">
                  {service.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
