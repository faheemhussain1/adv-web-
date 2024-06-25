import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./components/Maincontent"
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Summarizer from "./components/Summarizer"
import Team from "./components/teamMembers";
const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Content/>
        <Benefits />
        <Collaboration />
        <Services />
        <Summarizer/>
        <Roadmap />
        <Team/>
        <Footer />
       
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
