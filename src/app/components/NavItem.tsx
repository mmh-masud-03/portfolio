"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavItem: React.FC<{
  icon: React.ReactNode;
  label: string;
  href: string;
}> = ({ icon, label, href }) => {
  const router: string = usePathname(); // Get the current route

  // Check if the current route matches the href
  const isActive = router === href;

  return (
    <Link href={href}>
      <div
        className={
          `flex items-center text-xl mx-5 hover:scale-95 ${
            isActive ? "font-bold text-blue-300" : "text-white"
          }` // Apply bold font if active
        }
      >
        <span className="mr-1">{icon}</span>
        <span className="hidden md:inline">{label}</span>
      </div>
    </Link>
  );
};
export default NavItem;
