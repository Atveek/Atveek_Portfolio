import React from "react";

export default function Skills() {
  const list1 = [
    {
      title: "Programming Languages :",
      tech: ["C", "C++", "JAVA", "PYTHON", "HTML", "CSS", "JAVASCRIPT", "SQL"],
    },
    {
      title: "Libraries, Frameworks, Database:",
      tech: [
        "React JS",
        "Redux JS",
        "Node JS",
        "Express JS",
        "Mongoose",
        "MongoDB",
      ],
    },
    {
      title: "CS Fundamentals :",
      tech: [
        "Data Structure And Algorithms",
        "Database Management System",
        "Operating System",
        "Computer Network",
        "Object Oriented Programming",
      ],
      last: true,
    },
  ];
  return (
    <div className="pt-20 md:pt-28 w-full md:pb-16" id="Skill">
      <h1 className="m-0 w-full text-xl text-center md:text-3xl font-bold font-BalooBhai text-white">
        Skills
      </h1>
      <div className="lg:mx-auto px-10 lg:py-10 py-5 pb-8 grid grid-flow-row  grid-cols-1 lg:grid-cols-3 lg:bg-[rgba(107,124,218,0.04)] lg:rounded-xl lg:border-2 lg:border-black lg:w-11/12  lg:mt-10">
        {list1.map((item) => {
          return (
            <section className="relative lg:ml-20 mt-3 p-6 lg:p-0 lg:mt-0 text-white  bg-[rgba(107,124,218,0.04)] rounded-xl border-2 border-black lg:bg-transparent lg:border-0">
              <h1 className="text-[17px] font-BioRhyme lg:pt-5">
                {item.title}
              </h1>
              <ul className="list-disc mt-5 lg:mt-10 ml-10 font-BalooBhai font-semibold leading-7  text-[15px] lg:text-[17px]">
                {item.tech.map((te) => {
                  return <li>{te}</li>;
                })}
              </ul>
              {!item.last && (
                <div className="absolute top-5 right-0 w-2 h-72 md:bg-white rounded-lg "></div>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
}
