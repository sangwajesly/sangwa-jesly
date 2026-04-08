import { Header } from "./Header";

export const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>{children}</main>
    </div>
  );
};
