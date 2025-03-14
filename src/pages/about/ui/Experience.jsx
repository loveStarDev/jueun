import Job from "../model/Job";

function Experience() {
    let job = new Job(1);
    
    console.log(job.name);
    
    
    return <div>{job.getPeriod()}</div>;
}

export default Experience;