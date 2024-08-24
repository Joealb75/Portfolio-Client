import NameAndTag from "/src/assets/bckImageHome.svg"

export const HomeVideoAndNav = () => {
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
              <nav className="p-20">
                <div className="container mx-auto flex justify-between items-center">
                  <div className="flex items-center">
                    <h1 className="font-poppins font-semibold text-customRed text-4xl">
                      Joe Albrecht ._
                    </h1>
                  </div>
                  <div className="flex space-x-4">
                    <a href="#" className="text-white font-poppins font-semibold text-md hover:text-customRed"> // Home</a>
                    <a href="#" className="text-white font-poppins font-semibold text-md hover:text-customRed"> // Work</a>
                    <a href="#" className="text-white font-poppins font-semibold text-md hover:text-customRed"> // Experience</a>
                    <a href="#" className="text-white font-poppins font-semibold text-md hover:text-customRed"> // Contact</a>
                  </div>
                </div>
              </nav>
            </div>
          </section>
        </>
    )
}
