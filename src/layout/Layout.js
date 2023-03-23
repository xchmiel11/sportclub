import { Outlet } from "react-router-dom";
import { GlobalStyle } from "../assets/styles/GlobalStyle";
import { motion } from "framer-motion";
import styled from "styled-components";
import Navbar from "./../components/Navbar/Navbar";
import Footer from "./../components/Footer/Footer";

export default function Layout() {
  const PageLayout = ({ children }) => children;

  const animations = {
    initial: { opacity: 0, x: "50%" },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "-50%" },
  };

  return (
    <PageLayout>
      <GlobalStyle />
      <Navbar />
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.1 }}
      >
        <Wrapper>
          <Outlet />
        </Wrapper>
        <Footer />
      </motion.div>
    </PageLayout>
  );
}

const Wrapper = styled.main`
  min-height: calc(100vh - 113px - 61px);
`;
