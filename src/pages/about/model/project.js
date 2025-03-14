class Proejct {
    constructor(start="", end="", desc="", doing="", skill="") {
        this.description = desc;
        this.skill = skill;
        this.start = start;
        this.end = end;
        this.doing = doing;
    }

    addDoing(doing) {
        this.doing.push(doing);
    }
}

export default Project;