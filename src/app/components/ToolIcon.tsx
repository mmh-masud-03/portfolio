import Image from "next/image";

const ToolIcon: React.FC<{ name: string; src: string }> = ({ name, src }) => {
  return (
    <div className="flex flex-col items-center p-2 m-2 md:w-1/4 hover:scale-105">
      <Image src={src} alt={name} width={60} height={60} />
      <span className="text-sm">{name}</span>
    </div>
  );
};
export default ToolIcon;
