import { client } from "sanity/lib/client";

const fetchServices = async () => {
  const services = await client.fetch(
    '*[_type == "services"]',
    {},
    {
      cache: "no-cache",
    }
  );
  console.log("services", services);
};

async function Contact() {
  await fetchServices();

  return (
    <>
      <div>Contact Page</div>
    </>
  );
}

export default Contact;
