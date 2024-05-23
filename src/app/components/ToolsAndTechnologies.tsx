import ToolIcon from "./ToolIcon";
import React from "react";

const ToolsAndTechnologies: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap justify-around w-full items-center bg-gradient-to-bl from-purple-50 to-purple-200 ">
      <ToolIcon name="React.js" src="/images/tools/react.svg" />
      <ToolIcon name="Next.js" src="/images/tools/nextjs.svg" />
      <ToolIcon name="Tailwind CSS" src="/images/tools/tailwind.svg" />
      <ToolIcon name="Node.js" src="/images/tools/node.svg" />
      <ToolIcon name="Arduino" src="/images/tools/arduino.svg" />
      <ToolIcon name="VS Code" src="/images/tools/vs.svg" />
      <ToolIcon name="Github" src="/images/tools/github.svg" />
      <ToolIcon name="Redux Toolkit" src="/images/tools/redux.svg" />
      <ToolIcon name="MongoDB" src="/images/tools/mongodb.svg" />
    </div>
  );
};

export default ToolsAndTechnologies;
