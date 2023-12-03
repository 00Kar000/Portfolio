import { Link } from "react-router-dom";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";
import { FaEye } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import Zoom from 'react-medium-image-zoom';


const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My
        <span className=" blue-gradient_text font-semibold drop-shadow">
          &nbsp;Projects
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I've embarked on numerous projects throughout the years, but these are
          the ones I hold closest to my heart. Many of them are open-source, so
          if you come across something that piques your interest, feel free to
          explore the codebase and contribute your ideas for further
          enhancements. Your collaboration is highly valued!
        </p>
      </div>

      <div className="flex justify-center flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="md:w-[400px]   max-sm:w-full  rounded-lg shadow-xl" key={project.name}>
            <div className="flex flex-col  py-3">
              <h4 className="text-2xl font-poppins font-semibold">
                <div className="mt-5 flex flex-col items-center gap-2 font-poppins">
                  <div
                    className="font-semibold text-blue-600"
                  >
                    <p className="w-[100%] py-1  text-center">
                      {project.name}
                    </p>
                    <Zoom>
                    <img
                      src={project.image}
                      alt={project.name}
                      className="object-contain"
                      width={400}
                      height={200}
                    />
                    </Zoom>
           
                   
                  </div>
                  <div  className="flex justify-center items-center gap-x-6 mt-2">
                      <Link  to={project.page} target="_blank"><FaEye /></Link>
                      <Link to={project.link} target="_blank"><FaCode /></Link>
                    </div>
                </div>
              </h4>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
