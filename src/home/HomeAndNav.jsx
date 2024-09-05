import NameAndTag from "/src/assets/bckImageHome.svg"
import { GrowingMySkills } from "./GrowingMySkills.jsx"
import { MyWork } from "./MyWork.jsx"

export const HomeAndNav = () => {
    return (
        <>
          <section className="relative w-full h-screen">
            <div className="flex items-center justify-center w-full h-full">
              <img
                src={NameAndTag}
                alt="Joe Albrecht, Full Stack Software Engineer."
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute top-0 left-0 right-0 z-10">
              <nav className="p-10">
                <div className="container mx-auto flex justify-between items-center">
                  <div className="flex items-center">
                    <h1 className="font-poppins font-semibold text-customRed text-3xl">
                      Joe Albrecht ._
                    </h1>
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="text-white font-poppins font-semibold text-sm hover:text-customRed"> // Home</a>
                    <a href="#" className="text-white font-poppins font-semibold text-sm hover:text-customRed"> // Work</a>
                    <a href="#" className="text-white font-poppins font-semibold text-sm hover:text-customRed"> // Experience</a>
                    <a href="#" className="text-white font-poppins font-semibold text-sm hover:text-customRed"> // Contact</a>
                  </div>
                </div>
              </nav>
            </div>
          </section>

          <section className="bg-[#1E2630] pl-20 pt-10">
            <GrowingMySkills/>
          </section>
          <section className="bg-[#1E2630] pl-20 pt-10">
            <MyWork/>
          </section>
        </>
    )
}
