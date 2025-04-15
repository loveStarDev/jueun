import Myself from "./ui/Myself";
import Experience from "./ui/Experience"
import Certification from './ui/Certification'
import SideProjects from './ui/SideProjects';
import './About.css';

function About() { 
    return <div className="container">
        <Myself></Myself>
        <Experience></Experience>
        <SideProjects></SideProjects>
        <Certification></Certification>
    </div>;
}

export default About;