import { ButtonScroll } from "./components/buttonScroll/ButtonScroll";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";


export const App = () => {
  return (
    <>
      <Header />
      <ButtonScroll />
      <Main />
      <Footer />
    </> 
  );
};