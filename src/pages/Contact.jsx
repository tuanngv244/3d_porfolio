import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";

import { Fox } from "../models";
import { Loader } from "../components";
import { arrow, arrowBlack } from "../assets/icons";

const Contact = () => {
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  return (
    <section className="relative flex items-center w-full h-screen overflow-hidden lg:flex-row flex-col max-container">
      {alert.show && <Alert {...alert} />}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <p className="intro text-[40px]  uppercase text-gray font-bold text-black text-strokete font-[Michroma,sans-serif]">
          Do you have a project, do you have an idea?
          <br />
          If you feel like I am fit, Please contact us to build together.
        </p>
        <div className="flex items-center gap-10 mt-[30px]">
          <img className="w-[30px] h-[30px] object-contain" src={arrowBlack} />
          <div className="flex flex-col gap-1">
            <a
              className="text-[18px] font-semibold text-black heading-[24px]"
              href="mailto:tuanngv24.4@gmail.com"
            >
              tuanngv24.4@gmail.com
            </a>
            <a
              className="text-[16px] text-black heading-[24px]"
              href="phone:0376600676"
            >
              (+84) 376600676
            </a>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 w-full xs:h-[200px] lg:max-w-[350px]  lg:h-[450px] md:max-w-[350px] max-w-[350px] md:h-[350px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.7, 0.7, 0.7]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
