import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const MainLayout = ({ children }) => {
  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default MainLayout;
