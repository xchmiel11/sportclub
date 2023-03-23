import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./layout/Layout";
import Homepage from "./views/Homepage/Homepage";
import Basketball from "./views/Basketball/Basketball";
import Football from "./views/Football/Football";
import Gallery from "./views/Gallery/Gallery";
import Contact from "./views/Contact/Contact";
import Error404 from "./views/Error404/Error404";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="basketball" element={<Basketball />} />
          <Route path="football" element={<Football />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
