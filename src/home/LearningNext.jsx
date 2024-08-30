export const LearningNext = () => {

    return(
        <>
          <div className="w-1/3 pb-20">
            <h1 className="text-white text-6xl font-poppins font-semibold mb-4">What I Want To Learn Next</h1>
            <p className="text-white text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. 
              Cras venenatis euismod malesuada. Nullam ac erat ante. Integer varius nunc et mauris pharetra, ut auctor eros bibendum.
            </p>
          </div>
        
        <div className="w-2/3 flex overflow-hidden space-x-2">

          <div className="flex space-x-2 animate-loop-scroll">
            <img src="/src/assets/port-lang/AWS.svg" alt="Amazon Web Service" className="max-w-none max-h-60" />
            <img src="/src/assets/port-lang/TSQ.svg" alt="TanStack Query V4" className="max-w-none max-h-60" />
            <img src="/src/assets/port-lang/SOL.svg" alt="Solidity" className="max-w-none max-h-60" />
            <img src="/src/assets/port-lang/Remix.svg" alt="Remix IDE" className="max-w-none max-h-60" />
          </div>

          <div className="flex space-x-2 animate-loop-scroll aria-hidden:true">
            <img src="/src/assets/port-lang/AWS.svg" alt="Amazon Web Service" className="max-w-none max-h-60" />
            <img src="/src/assets/port-lang/TSQ.svg" alt="TanStack Query V4" className="max-w-none max-h-60" />
            <img src="/src/assets/port-lang/SOL.svg" alt="Solidity" className="max-w-none max-h-60" />
            <img src="/src/assets/port-lang/Remix.svg" alt="Remix IDE" className="max-w-none max-h-60" />
          </div>

        </div>
        
        </>
    )
}