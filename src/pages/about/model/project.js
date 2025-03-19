class Project {
    constructor(name="", start="", end="", desc="", doing=[], skill="") {
        this.name = name;
        this.doing = [];
        this.description = desc;
        this.skill = skill;
        this.start = start;
        this.end = end;        
    }

    addDoing(doing) {
        this.doing.push(doing);
    }

    getDoing(){
        return <ul>
            {this.doing.map((d, idx) => (
                <li>{d}</li>    
            ))}
        </ul>;
    }

    getPeriod(){
        return <div id="projectPeriod">{this.start} - {this.end}</div>
    }
}

export default Project;