import React from "react";
import "./OtherExperience.css";

function OtherExperience() {
    const experiences = [
        {
            period: "2021-07 ~ 2022-06",
            title: "삼성 소프트웨어 아카데미 (SSAFY)",
            details: [
                "Spring Boot 기반의 RESTful API 서버 개발 및 Vue.js, HTML/CSS 기반 웹 프론트엔드 구현을 통한 풀스택 프로젝트 경험",
                "Kotlin 기반의 Android Native Application 개발 경험",
                "Agile 방식의 팀 프로젝트 진행 및 Git(Gitlab)/Svn 기반 협업 경험 보유",
                "AI를 활용한 프로젝트 개발 경험",
            ],
        },
        {
            period: "2020-08 ~ 2021-01",
            title: "데이터 통신/네트워크 교과목 학습 보조도우미 (학습 조교)",
            details: [
                "인공지능 보안 기술 특화 실무형 SW 인재 양성 사업 참여",
                "수업 실시간 진행 보조, 공지 및 과제 관리, 부진 학생 대상 튜터링 등 전반적인 학습 지원 업무 수행",
                "학생 대상 영상 강의 자료 제공 및 질의 응답 지원",
            ],
        },
        {
            period: "2019-06 ~ 2020-02",
            title: "계명대학교 인공지능, 영상처리 연구실",
            details: [
                "자율주행 관련 연구 과제 참여",
                "보행자 보호 및 오토 트렁크 시스템 개발",
                "보행자 경로 및 행동 예측 기술 개발",
                "영상 처리 기반 인공지능 모델 성능 분석 및 실험 보조",
                "연구용 보조 프로그램 설계 및 구현",
            ],
        },
        {
            period: "2018-12 ~ 2019-06",
            title: "계명대학교 데이터베이스 연구실",
            details: [
                "실습용 데이터베이스 서버 관리 및 Python 기반 자동화 도구 개발",
                "HTML, PHP, Bootstrap, Oracle DB를 활용한 웹 애플리케이션 개발",
                "교내 연구 프로젝트 지원 및 간단한 데이터 처리 자동화 수행",
            ],
        },
    ];

    return (
        <section>
            <h2>Other Experiences</h2>
            <ul className="experience-list">
                {experiences.map((exp, index) => (
                    <ul key={index} className="experience-item">
                        <div className="experience-header">
                            <h5>{exp.title}</h5>
                            <span className="experience-period">{exp.period}</span>
                        </div>
                        <ul className="experience-details">
                            {exp.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                    </ul>
                ))}
            </ul>
        </section>
    );
}

export default OtherExperience;