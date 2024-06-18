import React, { useEffect, useState } from "react";

export default function Project() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const updateImageUrl = () => {
      if (window.matchMedia("(min-width: 700px)").matches) {
        setImageUrl(true);
      } else {
        setImageUrl(false);
      }
    };

    updateImageUrl(); // Initial check
    window.addEventListener("resize", updateImageUrl); // Update on resize

    return () => window.removeEventListener("resize", updateImageUrl);
  }, []);

  const projectList = [
    {
      title: "1) eKart - E-commerce Platform",
      github: "https://github.com/Atveek/MERN-Ecommerce-Project",
      siteUrl: "https://mern-ekart-project.vercel.app/",
      img: "./eKart.png",
      tech: [
        "React JS",
        "Redux JS",
        "Node JS",
        "Express JS",
        "Mongoose",
        "MongoDB",
      ],
      description: [
        "Developed a full-stack e-commerce web application using Node.js, Express.js, and React.js.",
        "Implemented user authentication with JWT tokens, enabling secure user registration and login processes.",
        "Created robust product management features, including CRUD operations for products, categories, and brands.",
        "Integrated user cart functionality, allowing users to add products, update quantities, and proceed to checkout with Stripe payment processing.",
        "Built comprehensive order management systems to handle order history, status updates, and payment intents, with email notifications for order confirmations.",
        "Utilized Redux for state management and React Router for seamless navigation, enhancing the front-end experience.",
      ],
    },
    {
      title: "1) eKart - E-commerce Platform",
      github: "https://github.com/Atveek/MERN-Ecommerce-Project",
      siteUrl: "https://mern-ekart-project.vercel.app/",
      img: "./eKart.png",
      tech: [
        "React JS",
        "Redux JS",
        "Node JS",
        "Express JS",
        "Mongoose",
        "MongoDB",
      ],
      description: [
        "Developed a full-stack e-commerce web application using Node.js, Express.js, and React.js.",
        "Implemented user authentication with JWT tokens, enabling secure user registration and login processes.",
        "Created robust product management features, including CRUD operations for products, categories, and brands.",
        "Integrated user cart functionality, allowing users to add products, update quantities, and proceed to checkout with Stripe payment processing.",
        "Built comprehensive order management systems to handle order history, status updates, and payment intents, with email notifications for order confirmations.",
        "Utilized Redux for state management and React Router for seamless navigation, enhancing the front-end experience.",
      ],
    },
    {
      title: "1) eKart - E-commerce Platform",
      github: "https://github.com/Atveek/MERN-Ecommerce-Project",
      siteUrl: "https://mern-ekart-project.vercel.app/",
      img: "./eKart.png",
      tech: [
        "React JS",
        "Redux JS",
        "Node JS",
        "Express JS",
        "Mongoose",
        "MongoDB",
      ],
      description: [
        "Developed a full-stack e-commerce web application using Node.js, Express.js, and React.js.",
        "Implemented user authentication with JWT tokens, enabling secure user registration and login processes.",
        "Created robust product management features, including CRUD operations for products, categories, and brands.",
        "Integrated user cart functionality, allowing users to add products, update quantities, and proceed to checkout with Stripe payment processing.",
        "Built comprehensive order management systems to handle order history, status updates, and payment intents, with email notifications for order confirmations.",
        "Utilized Redux for state management and React Router for seamless navigation, enhancing the front-end experience.",
      ],
    },
    // Add more projects as needed
  ];

  return (
    <div className="pt-20 md:pt-28 w-full md:pb-16" id="Project">
      <h1 className="m-0 w-full text-xl text-center md:text-3xl font-bold font-BalooBhai text-white">
        Projects
      </h1>
      <div className="mx-5 flex flex-row w-full overflow-x-scroll snap-x overflow-hidden">
        {projectList.map((item, index) => (
          <section
            key={index}
            className="text-white snap-center min-w-[300px] scroll-mt-60 mx-6 md:min-w-[1000px]"
          >
            <h1 className="text-[17px] font-BioRhyme lg:pt-5">{item.title}</h1>
            <div className="flex flex-col md:flex-row">
              <section className="lg:w-1/2">
                <img
                  className="w-3/4 lg:w-[600px]"
                  src={item.img}
                  alt="project"
                />
                <div className="grid grid-flow-row grid-cols-3">
                  {imageUrl &&
                    item.tech?.map((tech, techIndex) => (
                      <button
                        key={techIndex}
                        className="border-2 md:text-[20px] bg-[#FFFFFF09] border-white rounded-full w-36 h-12 odd:bg-[#6B7CDA] duration-500"
                      >
                        {tech}
                      </button>
                    ))}
                </div>
              </section>
              <section className="lg:w-1/2">
                <ul className="list-disc mt-5 lg:mt-10 font-BalooBhai font-semibold lg:leading-loose lg:ml-7 text-[15px] lg:text-[17px]">
                  {item.description.map((desc, descIndex) => (
                    <li key={descIndex} className="lg:w-[500px]">
                      {desc}
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
