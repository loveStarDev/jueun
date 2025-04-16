class Person {
    name;
    info;
    hi;

    constructor(name, info) {
        this.name = name;
        this.info = info;
    }

    sayHi() {
        return `반갑습니다, \n저는 ${this.name} 입니다.`;
    }

    getInfo() {
        return this.info;
    }

}

export default Person;