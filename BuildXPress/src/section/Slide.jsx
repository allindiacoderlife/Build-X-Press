import React from "react";
import img1 from "../assets/image/2.jpg";
import img2 from "../assets/image/sand.jpg";
import img3 from "../assets/image/tiles.jpg";
import { SectionHeader } from "../components/SectionHeader";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Project = [
  {
    id: 1,
    title: "Type of Cements and Useses.",
    results: [
      {
        title:
          "Cements is an important building materails uses in public , residential , commercial , construction jobs",
      },
    ],
    image: img1,
  },
  {
    id: 2,
    title: "Different Purpose Sands",
    results: [
      {
        title:
          "Sand is a crucial part of construction, used in a variety of applications ranging from concrete mixtures to masonry work. It is important to understand the different types of sand used in construction, as they have varying characteristics that affect their suitability for specific applications.",
      },
    ],
    image: img2,
  },
  {
    id: 3,
    title: "Design of Tiles",
    results: [
      {
        title:
          "Tiles are a popular choice for flooring, walls, and even ceilings due to their durability, versatility, and aesthetic appeal. With all types of tiles available in the market, it can be overwhelming to choose the right tiles for your specific needs.",
      },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: img3,
  },
];
const Slide = () => {
  const navigate = useNavigate();

  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="BUILDING MATERIALS"
          eyebrow="BUILDXPRESS"
          description="Implies a userful guide for users."
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {Project.map((project) => (
            // <Link to={`/Readme/${project.id}`}>
              <div
                key={project.title}
                className="bg-gray-800 rounded-3xl z-0 overflow-hidden
                after:z-10 after:content-[''] after:absolute after:inset-0
                   after:outline-2 after:outline after:-outline-offset-2
                   after:rounded-3xl after:outline-white/20 px-8 pt-8 md:px-10 md:pt-12 lg:px-20 lg:pt-16
                   sticky top-[120px]"
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div
                      className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex
                      font-bold uppercase tracking-widest text-sm gap-2
                      text-transparent bg-clip-text"
                    ></div>
                    <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.results.map((result) => (
                        <li className="flex gap-2 text-sm text-white/50 md:text-base">
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      className="bg-white text-gray-950 h-12 w-full md:w-auto px-4
                    rounded-xl font-semibold gap-2 mt-8 items-center inline-flex justify-center cursor-pointer hover:bg-slate-600"
                    >
                      <span>Readme more</span>
                      <img
                        src="src/assets/icons/arrow-up-right.svg"
                        className="size-4"
                      />
                    </button>
                  </div>
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    />
                  </div>
                </div>
              </div>
            // </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slide;
