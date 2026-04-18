import { Header } from "./Header";
import { Footer } from "./Footer";
import { CustomCursor } from "../shared/CustomCursor";

export const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
