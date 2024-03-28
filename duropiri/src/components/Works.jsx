import React from "react";

const Works = () => {
  return (
    <div className="relative w-full h-full">
      <div className="flex flex-col justify-start z-10 gap-[10px] xl:gap-[50px]">
        <h2 className="relative font-khand section-heading text-light-background dark:text-dark-background">
          <span aria-hidden="true">
            <span class=" inline-block">
              <span class="pb-1 sm:pb-2 relative  overflow-hidden inline-flex">
                <span className="header-text">Selected Works.</span>
              </span>
            </span>
          </span>
        </h2>

        <div className="flex flex-col xl:flex-row gap-[10px]">
          
          
          
          <div className="card w-full xl:w-1/3">
            <figure>
              {/* <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              /> */}
              <div className="w-full h-[250px] xl:h-[500px] bg-light-background dark:bg-dark-background"></div>
            </figure>
            <div className="card-body text-light-background dark:text-dark-background">
              <h2 className="card-title header-text">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline transition-none">Fashion</div>
                <div className="badge badge-outline transition-none">Products</div>
              </div>
            </div>
          </div>
          <div className="card w-full xl:w-1/3">
            <figure>
              {/* <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              /> */}
              <div className="w-full h-[250px] xl:h-[500px] bg-light-secondary dark:bg-dark-secondary"></div>
            </figure>
            <div className="card-body text-light-background dark:text-dark-background">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline transition-none">Fashion</div>
                <div className="badge badge-outline transition-none">Products</div>
              </div>
            </div>
          </div>
          <div className="card w-full xl:w-1/3">
            <figure>
              {/* <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              /> */}
              <div className="w-full h-[250px] xl:h-[500px] bg-light-accent dark:bg-dark-accent"></div>
            </figure>
            <div className="card-body text-light-background dark:text-dark-background">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline transition-none">Fashion</div>
                <div className="badge badge-outline transition-none">Products</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-[10px] xl:gap-[30px] w-full">
          <div className="flex flex-col gap-[10px] xl:gap-[30px] w-full xl:w-1/2">
            <div className="w-fill h-[200px] bg-light-accent dark:bg-dark-accent"></div>
            <div className="w-fill h-[200px] bg-light-accent dark:bg-dark-accent"></div>
          </div>

          <p className="body-text items-start flex justify-start w-full relative text-light-background dark:text-dark-background">
            <span aria-hidden="true">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;
