import React, { useEffect, useState, useRef } from "react";
import { FaGithub } from "react-icons/fa6";
import { LuLink } from "react-icons/lu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export default function Project() {
  const [imageUrl, setImageUrl] = useState("");
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const projectRef = useRef(null);
  const scrollStartX = useRef(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const updateImageUrl = () => {
      setImageUrl(window.matchMedia("(min-width: 700px)").matches);
    };

    updateImageUrl();
    window.addEventListener("resize", updateImageUrl);

    return () => window.removeEventListener("resize", updateImageUrl);
  }, []);

  const projectList = [
    {
      title: "1) EKart - E-commerce Platform",
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
      title: "2) Money-Manager",
      github: "https://github.com/Atveek/Money-Manager",
      siteUrl: "https://money-manager-ochre.vercel.app/",
      img: "./money-manager.png",
      tech: ["React JS", "Bootstrap", "Node JS", "Express JS", "MongoDB"],
      description: [
        "Developed a comprehensive financial management application using React.js, Node.js, Express.js, and MongoDB.",
        "Implemented secure user authentication and authorization with JWT, ensuring data protection and user privacy.",
        "Designed and integrated features for expense tracking, budget monitoring, and financial reporting with Chart.js.",
        "Built small business management tools, including profit and loss tracking, supply management, and customer detail storage.",
        "Utilized RESTful APIs for efficient data communication between the frontend and backend services.",
      ],
    },
    {
      title: "Another Project",
      github: "https://github.com/yourusername/another-project",
      siteUrl: "https://anotherproject.com/",
      img: "./another-project.png",
      tech: ["React JS", "Next.js", "Styled Components", "MongoDB", "GraphQL"],
      description: [
        "Built a modern web application using React JS and Next.js.",
        "Integrated Styled Components for advanced styling and theming.",
        "Utilized MongoDB for database management and GraphQL for querying data efficiently.",
      ],
    },
  ];

  const handlePrevProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projectList.length - 1 : prevIndex - 1
    );
  };

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === projectList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleScrollStart = (event) => {
    scrollStartX.current = event.touches[0].clientX;
    isScrolling.current = true;
  };

  const handleScrollEnd = (event) => {
    if (isScrolling.current) {
      const scrollEndX = event.changedTouches[0].clientX;
      const scrollDifference = scrollStartX.current - scrollEndX;

      if (scrollDifference > 50) {
        handleNextProject();
      } else if (scrollDifference < -50) {
        handlePrevProject();
      }

      isScrolling.current = false;
    }
  };

  return (
    <div
      className="mx-6 md:pt-28 md:pb-10 pb-10 text-white relative"
      id="Project"
    >
      <h1 className="m-0 w-full text-xl text-center md:text-3xl font-bold font-BalooBhai text-white">
        Projects
      </h1>
      <div
        className="flex px-4 mx-2 md:mt-10  overflow-hidden md:w-9/12 md:mx-auto h-[400px] md:h-[580px] p-4 relative translate-x-0 "
        ref={projectRef}
        onTouchStart={handleScrollStart}
        onTouchEnd={handleScrollEnd}
      >
        {projectList.map((project, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-full md:justify-center  md:h-[500px]  lg:w-[100%] px-0 md:p-4  bg-[rgba(107,124,218,0.04)] rounded-xl border-2 border-black flex flex-col lg:flex-row absolute transition-transform duration-500 ${
              index === currentProjectIndex
                ? "translate-x-0"
                : index < currentProjectIndex
                ? "-translate-x-full"
                : "translate-x-full"
            }`}
            style={{
              left: `${(index - currentProjectIndex) * 100}%`,
              opacity: index === currentProjectIndex ? 1 : 0,
              overflowY: "auto", // Ensures vertical scrollbar is visible
              maxHeight: "100%", // Adjust this value if needed
            }}
          >
            <div className="lg:w-1/2 p-4 block">
              <h1 className="text-lg md:text-2xl font-bold m-0  ">
                {project.title}
              </h1>
              <a
                href={project.github}
                className="inline-block ml-5 mx-2"
                target={"_blank"}
                rel="noreferrer"
              >
                <FaGithub className="text-white hover:text-[#6b7cda] rounded-sm w-8 h-8 mt-3" />
              </a>
              <a
                href={project.siteUrl}
                className="inline-block"
                target={"_blank"}
                rel="noreferrer"
              >
                <LuLink className="text-white hover:text-[#6b7cda] rounded-sm w-8 h-8 mt-3" />
              </a>

              <img
                className="w-full h-full md:h-1/2 object-cover lg:my-4"
                src={project.img}
                alt={project.title}
              />
              {imageUrl && (
                <div className="grid grid-flow-row grid-cols-3 gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <button
                      key={techIndex}
                      className="border-2 text-sm bg-[#FFFFFF09] border-white rounded-full py-2 odd:bg-[#6B7CDA] duration-500"
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="lg:w-1/2 p-4 block">
              <ul className="list-disc ml-5 text-sm space-y-2">
                {project.description.map((desc, descIndex) => (
                  <li key={descIndex} className="text-gray-400 md:text-base">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute top-2/4 -left-4 md:left-32 transform -translate-y-1/2 z-10"
        onClick={handlePrevProject}
      >
        <FaArrowAltCircleLeft className="h-10 w-10 bg-[#1b1e2a] rounded-full flex items-center justify-center text-lg font-bold cursor-pointer" />
      </button>
      <button
        className="absolute top-2/4 -right-4 md:right-32 transform -translate-y-1/2 z-10"
        onClick={handleNextProject}
      >
        <FaArrowAltCircleRight className="h-10 w-10 bg-[#1b1e2a] rounded-full flex items-center justify-center text-lg font-bold cursor-pointer" />
      </button>
    </div>
  );
}
