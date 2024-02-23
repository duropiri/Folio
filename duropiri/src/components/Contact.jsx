import React from "react";
import Footer from "./Footer";
import { Parallax } from "./Parallax";

const Contact = () => {
  return (
    <Parallax speed={2} className="mt-[-98px]">
      <div className="flex flex-col h-lvh justify-between">
        {/* What I Do Section */}
        <div className="relative w-full py-[25px] xl:py-[50px]">
          <div className="flex flex-col justify-start gap-[50px] xl:gap-[100px] z-10">
            <div className="flex flex-col gap-[8px]">
              <div>
                <span className="uppercase font-khand text-[64px] lg:text-[112px] font-semibold text-light-primary dark:text-dark-primary leading-snug">
                  Get In Touch.
                </span>
              </div>
              <div className="flex flex-col xl:flex-row w-full gap-[20px]">
                <div className="flex flex-col w-full xl:w-1/2 gap-[30px]">
                  <p className="text-[16px] lg:text-[32px] font-medium flex relative leading-snug text-light-primary dark:text-dark-primary w-full">
                    I am looking for freelance opportunities or internships in
                    startups, agencies, and design studios.
                  </p>

                  <div className="flex flex-row w-full gap-[30px]">
                    {/* Navigation */}
                    <div className="flex flex-col gap-[10px] w-1/2">
                      <span className="uppercase font-khand text-[24px] lg:text-[32px] font-semibold text-light-primary dark:text-dark-primary">
                        Navigation.
                      </span>
                      <div className="w-full h-[2px] bg-light-primary dark:bg-dark-primary"></div>
                      {/* Navigation */}
                      <ul className="flex flex-col gap-[8px]">
                        <li className="text-[16px] text-light-primary dark:text-dark-primary">
                          Home
                        </li>
                        <li className="text-[16px] text-light-primary dark:text-dark-primary">
                          About
                        </li>
                        <li className="text-[16px] text-light-primary dark:text-dark-primary">
                          Services
                        </li>
                        <li className="text-[16px] text-light-primary dark:text-dark-primary">
                          Works
                        </li>
                        <li className="text-[16px] text-light-primary dark:text-dark-primary">
                          Contact
                        </li>
                      </ul>
                    </div>
                    {/* Socials */}
                    <div className="flex flex-col gap-[10px] w-1/2">
                      <span className="uppercase font-khand text-[24px] lg:text-[32px] font-semibold text-light-primary dark:text-dark-primary">
                        Socials.
                      </span>
                      <div className="w-full h-[2px] bg-light-primary dark:bg-dark-primary"></div>
                      {/* Socials */}
                      <ul className="flex flex-col gap-[8px]">
                        <li className="text-[16px] text-light-primary dark:text-dark-primary">
                          {/* Social Media SVGs */}
                          <div className="flex w-full h-[20px]">
                            <ul className="flex flex-row justify-end h-5 items-start gap-[25px]">
                              <li>
                                <svg
                                  width="32"
                                  height="32"
                                  viewBox="0 0 32 32"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-[20px] h-[20px] text-light-primary dark:text-dark-primary"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M2.66667 0C1.1939 0 0 1.1939 0 2.66667V29.3333C0 30.806 1.1939 32 2.66667 32H29.3333C30.806 32 32 30.806 32 29.3333V2.66667C32 1.1939 30.806 0 29.3333 0H2.66667ZM9.81468 7.11595C9.82469 8.81595 8.5522 9.86345 7.04219 9.85595C5.61968 9.84844 4.37968 8.71595 4.38718 7.11845C4.39468 5.61595 5.58219 4.40844 7.12469 4.44345C8.68969 4.47845 9.82469 5.62596 9.81468 7.11595ZM16.4972 12.0209H12.0173H12.0148V27.2384H16.7497V26.8834C16.7497 26.208 16.7492 25.5324 16.7486 24.8567C16.7472 23.0544 16.7456 21.2501 16.7548 19.4484C16.7573 19.0108 16.7772 18.5559 16.8898 18.1383C17.3122 16.5783 18.7148 15.5708 20.2798 15.8185C21.2848 15.9758 21.9497 16.5584 22.2297 17.506C22.4023 18.0983 22.4798 18.7358 22.4873 19.3534C22.5076 21.2158 22.5047 23.0782 22.5019 24.9408C22.5008 25.5982 22.4997 26.256 22.4997 26.9134V27.2359H27.2498V26.8709C27.2498 26.0674 27.2494 25.264 27.2489 24.4606C27.248 22.4526 27.2469 20.4446 27.2523 18.4359C27.2548 17.5284 27.1573 16.6334 26.9348 15.7559C26.6023 14.4508 25.9148 13.3708 24.7973 12.5909C24.0048 12.0359 23.1348 11.6784 22.1623 11.6384C22.0516 11.6338 21.9399 11.6278 21.8277 11.6217C21.3305 11.5948 20.8251 11.5675 20.3497 11.6634C18.9897 11.9359 17.7948 12.5584 16.8923 13.6558C16.7874 13.7817 16.6848 13.9095 16.5317 14.1003L16.4972 14.1435V12.0209ZM4.76736 27.2434H9.47986V12.0308H4.76736V27.2434Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </li>
                              <li>
                                <svg
                                  width="32"
                                  height="32"
                                  viewBox="0 0 32 32"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-[20px] h-[20px] text-light-primary dark:text-dark-primary"
                                >
                                  <path
                                    d="M32 16.0978C32 7.20722 24.8366 0 16 0C7.16344 0 0 7.20722 0 16.0978C0 24.1325 5.85094 30.7923 13.5 32V20.751H9.4375V16.0978H13.5V12.5512C13.5 8.51674 15.8888 6.28819 19.5434 6.28819C21.2941 6.28819 23.125 6.60261 23.125 6.60261V10.5642H21.1075C19.12 10.5642 18.5 11.8052 18.5 13.0782V16.0978H22.9374L22.2282 20.751H18.5V32C26.1491 30.7923 32 24.1328 32 16.0978Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </li>
                              <li>
                                <svg
                                  width="32"
                                  height="32"
                                  viewBox="0 0 32 32"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-[20px] h-[20px] text-light-primary dark:text-dark-primary"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M23.1111 0H8.88889C3.9797 0 0 3.9797 0 8.88889V23.1111C0 28.0203 3.9797 32 8.88889 32H23.1111C28.0203 32 32 28.0203 32 23.1111V8.88889C32 3.9797 28.0203 0 23.1111 0ZM28.8889 23.1111C28.8791 26.298 26.298 28.8791 23.1111 28.8889H8.88889C5.70196 28.8791 3.12087 26.298 3.11111 23.1111V8.88889C3.12087 5.70196 5.70196 3.12087 8.88889 3.11111H23.1111C26.298 3.12087 28.8791 5.70196 28.8889 8.88889V23.1111ZM24.4444 9.33333C25.4263 9.33333 26.2222 8.53739 26.2222 7.55556C26.2222 6.57372 25.4263 5.77778 24.4444 5.77778C23.4626 5.77778 22.6667 6.57372 22.6667 7.55556C22.6667 8.53739 23.4626 9.33333 24.4444 9.33333ZM16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24C20.4183 24 24 20.4183 24 16C24.0048 13.8768 23.1634 11.8392 21.662 10.3379C20.1607 8.8366 18.1232 7.99527 16 8ZM11.1111 16C11.1111 18.7001 13.2999 20.8889 16 20.8889C18.7001 20.8889 20.8889 18.7001 20.8889 16C20.8889 13.2999 18.7001 11.1111 16 11.1111C13.2999 11.1111 11.1111 13.2999 11.1111 16Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </li>
                              <li>
                                <svg
                                  width="36"
                                  height="32"
                                  viewBox="0 0 36 32"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="w-[20px] h-[20px] text-light-primary dark:text-dark-primary"
                                >
                                  <path
                                    d="M28.3522 0H33.8724L21.8122 13.5548L36 32H24.8912L16.1902 20.8132L6.23446 32H0.71088L13.6103 17.5016L0 0H11.3909L19.2558 10.2252L28.3522 0ZM26.4146 28.7508H29.4736L9.72882 3.07856H6.4464L26.4146 28.7508Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="text-[16px] text-light-primary dark:text-dark-primary">
                          YouTube
                        </li>
                        <li className="text-[16px] text-light-primary dark:text-dark-primary">
                          Github
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Form */}
                <div className="flex flex-col w-full h-[489px] xl:w-1/2 gap-[30px] ">
                  <div className="flex flex-row w-full h-[48px] gap-[20px]">
                    <div className="w-1/2 text-[16px] text-light-primary dark:text-dark-primary border-r-[1px] border-b-[1px] border-light-primary dark:border-dark-primary">
                      Your name
                    </div>
                    <div className="w-1/2 text-[16px] text-light-primary dark:text-dark-primary border-r-[1px] border-b-[1px] border-light-primary dark:border-dark-primary">
                      Your email
                    </div>
                  </div>
                  <div className="w-full h-full text-[16px] text-light-primary dark:text-dark-primary border-r-[1px] border-b-[1px] border-light-primary dark:border-dark-primary">
                    Your message
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="z-50">
          <Footer />
        </div>
      </div>
    </Parallax>
  );
};

export default Contact;
