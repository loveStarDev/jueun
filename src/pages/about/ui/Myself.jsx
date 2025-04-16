import React from 'react';
import Person from '../model/Person';

function Greeting(props) {
    return (
        <section>
            <h1>{props.person.sayHi()}</h1>
            <p className="big-paragraph">{props.person.getInfo()}</p>
        </section>
    );
}

function Myself() {
    let person = new Person(
        '최주은',
        '경기도에서 3년차 웹 개발 엔지니어로 일하고 있으며 깔끔한 코드와 재사용이 쉬운 코드를 구현하는 것을 좋아합니다. 개발자의 가치는 비즈니스 가치를 구현하는데서 나온다고 믿습니다. 주도적으로 업무를 진행할 수 있는 환경을 선호합니다.',
    );

    return <Greeting person={person}></Greeting>;
}

export default Myself;
