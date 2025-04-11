import Myself from "./ui/Myself";
import Experience from "./ui/Experience"
import Certification from './ui/Certification'
import './About.css';

function About() { 
    return <div className="container">
        <Myself></Myself>
        <Experience></Experience>
        <Certification></Certification>
    </div>;
}

export default About;