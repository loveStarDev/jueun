import Myself from "./ui/Myself";
import Experience from "./ui/Experience";
import Certification from "./ui/Certification";
import SideProjects from "./ui/SideProjects";
import Educations from "./ui/Educations";
import OtherExperience from './ui/OtherExperience';
import Bottom from "./ui/Bottom";
import "./About.css";

function About() {
    return (
        <div className="container">
            <Myself />
            <Experience />
            <SideProjects />
            <Educations />
            <Certification />
            <OtherExperience/>
            <Bottom />
        </div>
    );
}

export default About;