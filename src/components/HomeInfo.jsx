import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";
import { useEffect, useState } from "react";

const HomeInfo = () => {
  const [stage, setStage] = useState(1);

  const changeStage = () => {
    if (stage >= 3) return setStage(1);
    return setStage((prev) => prev + 1);
  };

  useEffect(() => {
    const timer = setInterval(changeStage, 4000);
    return () => clearInterval(timer);
  }, [stage]);

  let content;
  switch (stage) {
    case 2:
      content = (
        <p className="font-medium text-md text-center text-white">
          I always want to bring great experience to clients.
          <br /> I love this job, always to learn and build up skills.
        </p>
      );
      break;
    case 3:
      content = (
        <p className="font-medium text-center text-md text-white">
          I always try my best in every product with my co-workers. <br />
          It's great to connect with someone who shares similar interests!
        </p>
      );
      break;
    default:
      content = (
        <h1 className=" text-center text-md text-white mx-5">
          Hi, I'm
          <span className="font-semibold text-2xl mx-2 text-white italic">
            Van Tuan
          </span>
          👋
          <br />A Software Engineer from Vietnam
        </h1>
      );
  }

  return <div className=" bg-blur-white p-[10px] rounded-md">{content}</div>;
};

export default HomeInfo;
