import ToolIcon from "./ToolIcon";
import React from "react";

const ToolsAndTechnologies: React.FC = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-center">
      <ToolIcon name="React.js" src="/images/tools/react.svg" />
      <ToolIcon name="Next.js" src="/images/tools/nextjs.svg" />
      <ToolIcon name="Tailwind CSS" src="/images/tools/tailwind.svg" />
      <ToolIcon name="Node.js" src="/images/tools/node.svg" />
      <ToolIcon name="Arduino" src="/images/tools/arduino.svg" />
      <ToolIcon name="VS Code" src="/images/tools/vs.svg" />
      <ToolIcon name="Github" src="/images/tools/github.svg" />
    </div>
  );
};

export default ToolsAndTechnologies;
