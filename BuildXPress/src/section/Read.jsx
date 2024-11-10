import { useState, useEffect } from "react";
import img1 from "../assets/image/2.jpg";
import img2 from "../assets/image/sand.jpg";
import img3 from "../assets/image/tiles.jpg";
import { SectionHeader } from "../components/SectionHeader";
import { useParams } from "react-router-dom";
const Project = [
  {
    id: 1,
    title: "Type of Cements and Useses.",
    results: [
      {
        title:
          "There are a variety of types of cement you can use depending on your project's purpose and conditions. Here are 15 types of cement:",
      },
      { title: "1. Ordinary Portland cement (OPC)" },
      {
        title:
          "Ordinary Portland cement is the most widely used type of cement manufactured and used worldwide. “Portland” is a generic name derived from a type of building stone quarried on the Isle of Portland in Dorset, England. OPC is suitable for most general concrete jobs and mortar or stucco construction projects.",
      },
      { title: "2. Portland Pozzolana Cement (PPC)" },
      {
        title:
          "Portland Pozzolana Cement is a variation of OPC that includes a mixture of a pozzolanic material that can increase the strength of the concrete and reduce the amount of OPC used. This type of cement is suitable for use in hydraulic structures, mass concreting works, marine structures, and sewage works.",
      },
      { title: "3. Rapid Hardening Cement" },
      {
        title:
          "Rapid Hardening Cement is a type of cement that gains strength quickly and is used in construction projects that require quick setting and hardening. This type of cement is suitable for use in cold weather concreting, precast concrete, and repair work.",
      },
      { title: "4. Quick Setting Cement" },
      {
        title:
          "Quick Setting Cement is a type of cement that sets quickly and is used in construction projects that require rapid setting. This type of cement is suitable for use in underwater construction, road repair, and emergency repair work.",
      },
      { title: "5. Low Heat Cement" },
      {
        title:
          "Low Heat Cement is a type of cement that generates less heat during the hydration process and is used in construction projects that require low heat of hydration. This type of cement is suitable for use in mass concrete structures, dams, and large foundation works.",
      },
      { title: "6. Sulphate Resisting Cement" },
      {
        title:
          "Sulphate Resisting Cement is a type of cement that resists the action of sulphates and is used in construction projects that require resistance to sulphate attack. This type of cement is suitable for use in marine structures, sewage works, and chemical plants.",
      },
    ],
    image: img1,
  },
  {
    id: 2,
    title: "Type of Cements and Useses.",
    results: [
      {
        title:
          "There are a variety of types of cement you can use depending on your project's purpose and conditions. Here are 15 types of cement:",
      },
      { title: "1. Ordinary Portland cement (OPC)" },
      {
        title:
          "Ordinary Portland cement is the most widely used type of cement manufactured and used worldwide. “Portland” is a generic name derived from a type of building stone quarried on the Isle of Portland in Dorset, England. OPC is suitable for most general concrete jobs and mortar or stucco construction projects.",
      },
      { title: "2. Portland Pozzolana Cement (PPC)" },
      {
        title:
          "Portland Pozzolana Cement is a variation of OPC that includes a mixture of a pozzolanic material that can increase the strength of the concrete and reduce the amount of OPC used. This type of cement is suitable for use in hydraulic structures, mass concreting works, marine structures, and sewage works.",
      },
      { title: "3. Rapid Hardening Cement" },
      {
        title:
          "Rapid Hardening Cement is a type of cement that gains strength quickly and is used in construction projects that require quick setting and hardening. This type of cement is suitable for use in cold weather concreting, precast concrete, and repair work.",
      },
      { title: "4. Quick Setting Cement" },
      {
        title:
          "Quick Setting Cement is a type of cement that sets quickly and is used in construction projects that require rapid setting. This type of cement is suitable for use in underwater construction, road repair, and emergency repair work.",
      },
      { title: "5. Low Heat Cement" },
      {
        title:
          "Low Heat Cement is a type of cement that generates less heat during the hydration process and is used in construction projects that require low heat of hydration. This type of cement is suitable for use in mass concrete structures, dams, and large foundation works.",
      },
      { title: "6. Sulphate Resisting Cement" },
      {
        title:
          "Sulphate Resisting Cement is a type of cement that resists the action of sulphates and is used in construction projects that require resistance to sulphate attack. This type of cement is suitable for use in marine structures, sewage works, and chemical plants.",
      },
    ],
    image: img1,
  },
];
const Read = () => {
  const { id } = useParams();
  const [about, setAbout] = useState({});
  useEffect(() => {
    const newProduct = Project.find((item) => item.id === parseInt(id));
    setAbout(newProduct);
    console.log(newProduct);
  }, [id]);
  return (
    <div className="mx-auto py-20 px-4 md:px-16 lg:px-24">
      <div className="">
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
            {Project.map((project) => (
                <div
                key={about.title}
                className="bg-gray-800 rounded-3xl z-0 overflow-hidden
                     after:z-10 after:content-[''] after:absolute after:inset-0
                        after:outline-2 after:outline after:-outline-offset-2
                         after:rounded-3xl after:outline-white/20 px-8 pt-8 md:px-10 md:pt-12 lg:px-20 lg:pt-16
                        sticky top-[120px]"
                >
                <div
                    className=" absolute inset-0 -z-10 opacity-5"
                    style={{
                    backgroundImage: `url('src/assets/images/grain.jpg')`,
                    }}
                ></div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                    <div className="lg:pb-16">
                    <div
                        className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex
                        font-bold uppercase tracking-widest text-sm gap-2
                        text-transparent bg-clip-text"
                    ></div>
                    <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                        {about.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                        {project.results.map((result) => (
                        <li className="flex gap-2 text-sm text-white/50 md:text-base">
                            <span>{result.title}</span>
                        </li>
                        ))}
                    </ul>
                    </div>
                    <div className="relative">
                    <img
                        src={about.image}
                        alt={about.title}
                        className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:w-auto rounded-full "
                    />
                    </div>
                </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Read;
