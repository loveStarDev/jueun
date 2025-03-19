import Myself from "./ui/Myself";
import Experience from "./ui/Experience"
import './About.css';

function About() { 
    return <div className="container">
        <Myself></Myself>
        <Experience></Experience>
    </div>;
}

export default About;