const services = {
  name: "services",
  title: "Services",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
  ],
  Preview: {
    select: {
      title: "title",
      description: "description",
    },
  },
};

export default services;
