class Job {
    constructor(name="", role="", start="", end="") {
        this.project = [];
        this.name = name;
        this.role = role;
        this.start = start;
        this.end = end;
    }

    getPeriod() {
        return <div id="jobPeriod">{this.start} - {this.end}</div>
    }

    getName() {
        return <div id="jobName">{this.name}</div>
    }

    getRole() {
        return <div id="jobRole">{this.role}</div>
    }

    addProject(project) {
        this.project.push(project);
    }

    getProject() {
        this.project.sort((p1, p2) => { 
            return Number(p2.start.replaceAll("-", "")) - Number(p1.start.replaceAll("-", ""));
        });

        return ( 
            this.project.map( (p, idx) => (
                <div key={idx} className="project">
                    <h4>{p.name}</h4>
                    <span className="time">{p.getPeriod()}</span>
                    <h5>Description</h5>
                    <p>{p.description}</p>
                    <h5>What did I do</h5>
                    {p.getDoing()}
                    <h5>Tech Stack</h5>
                    <p>{p.skill}</p>
                    <br></br>
                </div>
            ))
        )
    }
}

export default Job;