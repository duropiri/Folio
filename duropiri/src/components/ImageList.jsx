import React from "react";
import { Parallax } from "@/components/Parallax";
import Image from "next/image";

const ImageList = () => {
  return (
    <>
      <Parallax>
        <div data-speed="2" className="self-start">
          <Image
            src={"https://picsum.photos/600/400?random=1"}
            alt="Image"
            width={600}
            height={400}
            priority
            sizes="50vw"
          />
        </div>
      </Parallax>
      <Parallax>
        <div data-speed="-2" className="self-end overflow-hidden">
          <Image
            src={"https://picsum.photos/600/400?random=2"}
            alt="Image"
            width={600}
            height={400}
            priority
            sizes="50vw"
          />
        </div>
      </Parallax>
      <Image
        src={"https://picsum.photos/600/400?random=1"}
        alt="Image"
        width={600}
        height={400}
        priority
        sizes="50vw"
      />
      <Image
        src={"https://picsum.photos/600/400?random=2"}
        alt="Image"
        width={600}
        height={400}
        priority
        sizes="50vw"
      />
      <Image
        src={"https://picsum.photos/400/600?random=3"}
        alt="Image"
        width={400}
        height={600}
        sizes="50vw"
      />
      <Image
        src={"https://picsum.photos/600/400?random=4"}
        alt="Image"
        width={600}
        height={400}
        sizes="50vw"
      />
      <Image
        src={"https://picsum.photos/600/400?random=5"}
        alt="Image"
        width={600}
        height={400}
        sizes="50vw"
      />
      // Add more images if you like
    </>
  );
};

export default ImageList;
