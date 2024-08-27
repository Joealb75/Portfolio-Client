import { GrowingMySkills } from "./GrowingMySkills.jsx";
import {LearningNext} from "/src/home/LearningNext.jsx"
import { MyWork } from "./MyWork.jsx";

export const HomeWorkExperience = () => {
  return (
    <>
      <section className="bg-[#1E2630] flex pl-20 pt-10"> 
          <GrowingMySkills />
      </section>
      <section className="bg-[#1E2630] flex pl-20 pt-10">
        <MyWork />
      </section>

    </>
  );
};




