import React from "react";
import "../App.css";

function Home() {
  return (
    <div className="homeMotherDiv">
      <div class="w-full h-screen bg-black">
        <header class="lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-lg">
          <div class="flex-1 flex justify-between items-center">
            <img
              class="sm:w-[10rem] w-[7rem] z-10"
              src="https://techakim.com/sam/tg/7268/li/imgs/samlogo2.png"
              alt="Logo"
            />
          </div>
          <label for="menu-toggle" class="pointer-cursor md:hidden block">
            <svg
              class="fill-current text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
            >
              <title>menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </label>
          <input class="hidden" type="checkbox" id="menu-toggle" />

          <div
            class="hidden md:flex md:items-center md:w-auto w-full z-10"
            id="menu"
          >
            <nav>
              <ul class="md:flex items-center justify-between text-base xl:text-lg text-gray-100 pt-4 md:pt-0">
                <li>
                  <a
                    class="md:p-4 py-3 px-0 block text-rose-500 hover:text-rose-500"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    class="md:p-4 py-3 px-0 block hover:text-rose-500"
                    href="#"
                  >
                    Products
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div class="absolute hidden sm:block md:top-16 sm:top-[8%] top-[10%] xl:top-4 xl:left-[30%] lg:left-[35%] md:right-[20%] sm:left-[18%] left-[10%] overflow-hidden">
          <img
            class="2xl:h-[760px] xl:h-[600px] md:h-[450px] sm:h-[480px]"
            src="https://techakim.com/sam/tg/7268/li/imgs/2.png"
            alt="Image"
          />
        </div>

        <div class="lg:px-16 px-4 pb-4 h-full flex flex-col sm:flex-row sm:items-center mt-10 sm:mt-0 text-white">
          <div class="w-full flex flex-col z-10">
            <h4 class="text-lg font-semibold text-white xl:text-2xl">
              Hey There
            </h4>
            <h1 class="2xl:text-8xl md:text-6xl sm:text-4xl text-3xl font-semibold font-serif mt-2">
              I'm
              <span class=""> Senor</span>
            </h1>
            <h1 class="md:text-7xl sm:text-4xl text-3xl font-semibold font-serif">
              Frog
            </h1>
            <h4 class="text-rose-500 mt-4 lg:text-2xl xl:3xl">
              Clothing Enthusiast
            </h4>

            <p class="lg:w-[70%] w-full text-white text-md mt-4 md:text-lg 2xl:text-2xl">
              Wear your dreams, print your legacy.
            </p>

            <div>
              <button class="mt-6 px-6 py-1 bg-rose-500 text-lg text-white rounded-sm lg:text-2xl">
                Get In Touch
              </button>
            </div>
          </div>

          <div class="w-full flex sm:flex-col justify-center mt-4 sm:mt-0 sm:gap-8 gap-2 bg-gray-700/60 sm:bg-transparent p-4 rounded-lg z-10">
            <div class="flex flex-col sm:items-end items-center">
              <div class="inline-flex gap-1 items-center">
                <h2 class="xl:text-6xl md:text-6xl sm:text-4xl text-3xl font-semibold">
                  2
                </h2>
                <h2 class="text-rose-500 xl:text-6xl md:text-7xl sm:text-4xl text-3xl font-extrabold">
                  +
                </h2>
              </div>
              <h4 class="text-sm sm:text-lg xl:text-2xl text-center">
                Years of Experience
              </h4>
            </div>
            <div class="flex flex-col sm:items-end items-center">
              <div class="inline-flex gap-1 items-center">
                <h2 class="xl:text-4xl md:text-6xl sm:text-4xl text-3xl font-semibold">
                  Fast Replies
                </h2>
                <h2 class="text-rose-500 xl:text-8xl md:text-6xl sm:text-4xl text-3xl font-extrabold"></h2>
              </div>
              <h4 class="text-sm sm:text-lg xl:text-2xl text-center">
                Quick and Easy Commissions
              </h4>
            </div>
            <div class="flex flex-col sm:items-end items-center">
              <div class="inline-flex gap-1 items-center">
                <h2 class="xl:text-4xl md:text-6xl sm:text-4xl text-3xl font-semibold">
                  Customize Any Sports Wear
                </h2>
              </div>
              <h4 class="text-sm sm:text-lg xl:text-2xl text-center">
                User's Got Help
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
