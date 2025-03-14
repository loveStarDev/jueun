class Job {
    constructor(name="", role="", start="", end="") {
        this.project = null;
        this.name = name;
        this.role = role;
        this.start = start;
        this.end = end;
    }

    getPeriod() {
        return `{start} - {end}`
    }

    addProject(project) {
        this.project.push(project);
    }
}

export default Job;