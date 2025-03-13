import React from 'react';
import './Myself.css';

function Greeting(props) {
    return <section>
        <h1>
            {props.greet}
        </h1>
        <p className="big-paragraph">
            {props.info}
        </p>
    </section>;
}

function Myself() {
    const greeting_hi = "반갑습니다,\n저는 최주은입니다."
    const greeting_info = `경기도에서 3년차 웹 개발 엔지니어로 일하고 있으며 아름다운 인터페이스와 애니메이션을 구현하는 것을 좋아합니다. 개발자의 가치는 비즈니스 가치를 구현하는데서 나온다고 믿습니다. 주도적으로 업무를 진행할 수 있는 환경을 선호합니다.`;

    return (
        <div className="container">
            <div className="flex f-column">
                <Greeting greet={greeting_hi} info={greeting_info}></Greeting>
            </div>
        </div>
    );
}

export default Myself;