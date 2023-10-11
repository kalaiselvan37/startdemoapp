import React from "react";
function Home() {
    return (
      <>
      
    <section className="py-10">
        <div className="max-w-7xl w-full mx-auto px-4  sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="flex items-center">
                    <div>
                        <div className=" mt-8 h inline-flex items-center border p-1 rounded-lg px-4 gap-x-2 mb-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 font-bold">
                            <p className="text-xs text-white">DESIGN.DEVELOPMENT.MARKETING</p>
                        </div>
                        <h1 className="text-2xl text-gray-400">I can help your business to</h1>
                        <div>
                            <p className="text-6xl font-bold bg-gradient-to-r from-indigo-700 to-purple-600 inline-block text-transparent bg-clip-text">Get online and</p>
                            <p className="text-6xl font-bold bg-gradient-to-r from-pink-600 to-pink-400 inline-block text-transparent bg-clip-text">grow fast</p>
                        </div>
                        <div>
                            <button type="button" className="mt-16  justify-center items-center gap-4 rounded-md border border-transparent font-semibold bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm sm:p-5 ">
                                Resume
                            </button>
                            <button type="button" className="mx-6 justify-center items-center gap-4 rounded-md border font-semibold bg-white text-gray-700 hover:bg-black outline-black  hover:text-white focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm sm:p-5 ">
                                Projects
                            </button>
                            </div>
                    </div>
                </div>
                <div>
                <img className="h-[80%] mt-20 bg-gradient-to-r from-indigo-700 to-pink-600 rounded-[80px] bg-no-repeat" src="https://startbootstrap.github.io/startbootstrap-personal/assets/profile.png" alt=""/>

                </div>
            </div>
        </div>
    </section>
    <section className=" py-10 bg-slate-100 sm:px-6 lg:px-8 ">
        <div className=" max-w-3xl w-full mx-auto px-4 ">
            <div className="grid grid-cols-1 lg:grid-cols-1">
                <p className=" text-5xl font-bold text-center bg-gradient-to-r from-indigo-900 to-pink-500 inline-block text-transparent bg-clip-text">About Me</p>
                <div className=" pt-4 text-center font-light text-xl">My name is Start Bootstrap and I help brands grow
                <div className=" pt-4 text-center font-extralight text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit dolorum itaque qui unde quisquam consequatur autem. Eveniet quasi nobis aliquid cumque officiis sed rem iure ipsa! Praesentium ratione atque dolorem?</div>
                </div>
            </div>
            <div className="text-center pt-4 text-4xl ">
                <i className="fa-brands fa-twitter bg-gradient-to-r from-indigo-900 to-pink-500 text-transparent bg-clip-text px-3"></i>
                <i className="fa-brands fa-linkedin bg-gradient-to-r from-indigo-900 to-pink-500 text-transparent bg-clip-text px-3"></i>
                <i className="fa-brands fa-github bg-gradient-to-r from-indigo-900 to-pink-500 text-transparent bg-clip-text px-3"></i>
            </div>
        </div>
    </section>
    
      

      
      </>
      
    );
  }
  
  export default Home;