import NameAndTag from "/src/assets/NameTag.svg"

export const HomeVideoAndNav = () => {
    return (
        <>
          <section>
            <div className="relative h-screen w-screen">
              <video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="./src/assets/smoke.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 flex items-center justify-center">
                <img
                src={NameAndTag}
                alt="Joe Albrecht, Full Stack Software Engineer."
                className="h-128 w-auto"
                />
               </div>
        
              <div>
                <nav className="p-20">
                  <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center z-10">
                      <h1 className="font-poppins font-semibold text-indigo-300 text-4xl">
                        Joe Albrecht ._
                      </h1>
                    </div>
                    <div className="flex space-x-4 z-10">
                      <a href="#" className="text-white font-poppins font-semibold text-md hover:text-indigo-300 ">// Home</a>
                      <a href="#" className="text-white font-poppins font-semibold text-md hover:text-indigo-300">// Work</a>
                      <a href="#" className="text-white font-poppins font-semibold text-md hover:text-indigo-300">// Experience</a>
                      <a href="#" className="text-white font-poppins font-semibold text-md hover:text-indigo-300">// Contact</a>
                    </div>
                  </div>
                </nav>
              </div>
        
            </div>
          </section>
        </>     
 )
}