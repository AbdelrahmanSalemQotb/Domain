import { NavBar } from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";

interface UserLayoutProps {
  children: React.ReactNode;
}

export const UserLayout = ({ children }: UserLayoutProps) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};
