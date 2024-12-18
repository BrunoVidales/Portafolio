import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import AOS from "aos";
import "aos/dist/aos.css";

export const App = () => {
  return (
    <>
      <Header />
      <Main />
    </> 
  );
};