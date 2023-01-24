import { DocumentIcon } from "@heroicons/react/solid";
import React from "react";
import pdf from "./resume/TimsProfileResume.pdf";

export default function Skillsx() {
  return (
    <section id="skillsx">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <DocumentIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            My Resume
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            {" "}
            Feel free to grab a copy!
            <br className="hidden lg:inline-block " />{" "}
            <a href={pdf} download="./TimsProfileResume.pdf">
              <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Download
              </button>
            </a>
            <img 
              className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 py-1"
              src="./ProfileResumeMEDIUM.png"
              alt="Pic"
            ></img>
          </p>
        </div>
      </div>
    </section>
  );
}
