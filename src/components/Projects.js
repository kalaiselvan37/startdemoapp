import React from "react";
function Projects() {
    return (
      <>
      <section className="py-10 bg-slate-100">
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-1">
            <div className="flex items-center justify-center">
                <div className=" text-5xl font-bold text-center bg-gradient-to-r from-indigo-900 to-pink-500 inline-block text-transparent bg-clip-text">Projects</div>
            </div>
        </div>
    </div>
</section>
<section className="py-9 bg-slate-100">
       
<div className="max-w-4xl w-auto mx-auto px-4 sm:px-6 lg:px-8 pt-5">
        <div className="bg-white border rounded-3xl shadow-sm sm:flex dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            
            <div className="flex flex-col justify-start p-6 mt-[10%]">
                <h5 className="mb-2 text-xl font-bold text-neutral-800 dark:text-neutral-50">Project Name 1</h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 flex-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!
                    </p>
            </div>
            <div>
            <img className="flex-shrink-0 relative w-auto  overflow-hidden  sm:max-w-[10rem] rounded-r-2xl md:max-w-xs"src="https://dummyimage.com/300x400/343a40/6c757d"alt="" />
            </div>  
        </div>
        
    </div>

    
</section>

<section className="py-10 bg-gradient-to-r from-indigo-900 to-pink-500">
    <div className=" text-white text-center text-6xl font-bold pt-8">Let's build something together</div>
    <div className=" text-center pt-7">
        <button type="button" class=" py-3  px-4 inline-flex justify-center items-center gap-2 rounded-md border border-white font-semibold bg-transparent text-white hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm">
            Contact me
        </button>
    </div>
</section>



      

      
      </>
      
    );
  }
  
  export default Projects;