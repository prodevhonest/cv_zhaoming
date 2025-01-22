import "./homepage.scss";
import MainInfo from "./MainInfo";
import AboutMe from "./AboutMe";
import ExpEducation from "./ExpEducation";
import MySkill from "./MySkill";
import MyProject from "./MyProject";
import Footer from "./Footer"

const Home = () => {
  return (<section className="main-home">
    <MainInfo />
    <AboutMe />
    <ExpEducation />
    <MySkill />
    <MyProject />
    <Footer />
  </section>);
}

export default Home;
