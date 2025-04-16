import Myself from "./ui/Myself";
import Experience from "./ui/Experience";
import Certification from "./ui/Certification";
import SideProjects from "./ui/SideProjects";
import Bottom from "./ui/Bottom";
import "./About.css";

function About() {
    return (
        <div className="container">
            <Myself />
            <Experience />
            <SideProjects />
            <Certification />
            <Bottom />
        </div>
    );
}

export default About;