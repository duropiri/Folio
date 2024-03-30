// components/Footer.jsx
"use client";
import GsapMagnetic from "./GsapMagnetic";
import InfoPane from "./InfoPane";

const Footer = () => {
  return (
    <div className="flex flex-row h-[102px] justify-between items-center md:my-[50px]">
      <div className="w-1/3">
        <ul className="font-khand font-semibold text-[32px] lg:text-[64px] uppercase text-light-primary dark:text-dark-primary leading-[80%]">
          <li>
            <span>© {new Date().getFullYear()}</span>
          </li>
          <li>Duro Piri</li>
        </ul>
      </div>

      <div className="w-1/3 h-[86px]">
        <InfoPane time={true} />
      </div>
      <GsapMagnetic>
        <div
          className="followerchangetest"
          onClick={() =>
            document
              .getElementById("home")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <svg
            width="50"
            height="28.29"
            viewBox="0 0 50 28.29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-[28.29px] text-light-primary dark:text-dark-primary"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23.4211 1.51126C24.2932 0.639167 25.7069 0.639168 26.579 1.51126L49.346 24.2783C50.218 25.1504 50.218 26.5641 49.346 27.4362L48.2932 28.489C47.4212 29.3611 46.0073 29.3611 45.1352 28.489L25 8.35373L4.86477 28.489C3.99268 29.3611 2.57899 29.3611 1.70689 28.489L0.654072 27.4362C-0.218021 26.5641 -0.218021 25.1504 0.654072 24.2783L23.4211 1.51126Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </GsapMagnetic>
    </div>
  );
};

export default Footer;
