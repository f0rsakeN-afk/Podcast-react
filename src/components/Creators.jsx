import React from "react";
import image1 from "../assets/creator-orange-person.png";
import image2 from "../assets/creator-yellow-person.png";
import image3 from "../assets/creator-green-person.png";

const Creators = () => {
  return (
    <div className="bg-[#fef2fe]  ">
      <div className="container m-auto py-16 flex flex-col gap-y-4 justify-center items-center">
        <p className="playfair text-4xl text-center w-3/5">
          <span className="text-[#936ce0]"> Learn</span> from the creators
          themselves!
        </p>
        <p className="py-2 text-gray-700 w-3/5 text-center">
          Are you ready to share your voice with the world? Our platform is the
          perfect place for podcast creators to reach a vast and engaged
          audience. So don't wait any longer, sign up now and start creating
          your next hit podcast!
        </p>
        <a
          href="#"
          className="bg-[#936cdf]  text-gray-100 rounded-lg px-4 py-2 hover:drop-shadow-xl transition-all ease-in-out duration-150 hover:bg-purple-500"
        >
          Click here
        </a>
        <div className="grid grid-cols-3 gap-8 ">
          <Tile
            image={image1}
            title={`Get to know about user research`}
            subtitle={`Learn from the best who will make you forget the rest!`}
            back={`7C98B3`}
          />

          <Tile
            image={image2}
            title={`Get to know about marketing`}
            subtitle={`Learn the top-notch marketing strategies in no time.`}
            back={`e0a12c`}
          />
          <Tile
            image={image3}
            title={`How to manage money well`}
            subtitle={`Manage your finance with the strategic solutions.`}
            back={`1fafa4`}
          />
        </div>
      </div>
    </div>
  );
};

function Tile({ back, image, title, subtitle }) {
  return (
    <div
      className={`border border-black bg-[#${back}] grid grid-cols-3 gap-2 items-center rounded-lg px-2 h-64 overflow-hidden`}
    >
      <div className="flex items-end">
        <img src={image} alt="image" className="h-64" />
      </div>
      <section className="col-span-2 flex flex-col gap-4">
        <pDB7C26 className="playfair text-xl">{title}</pDB7C26>
        <span className="">{subtitle}</span>
        <a
          href="#"
          className="px-4 py-2 bg-black text-gray-100 w-max rounded-lg hover:drop-shadow-lg"
    >
          Play Now
        </a>
      </section>
    </div>
  );
}

export default Creators;
