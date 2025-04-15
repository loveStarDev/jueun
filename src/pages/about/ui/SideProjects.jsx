import React from 'react';

function SideProjects() {
    const projects = [
        {
            name: "모바일 커뮤니티 (With SSAFY)",
            description: "모든 싸피인들의 편리한 올인원패키지 서비스, 다양한 익명 커뮤니티와 한번에 확인할 수 있는 커리큘럼 및 스터디와 팀빌딩까지 다른 플랫폼을 사용하지 않고 편리하게 서비스를 이용할 수 있는 애플리케이션을 개발",
            techStack: "Spring Boot, Spring Data JPA, Kotlin, Android, AWS EC2, Jenkins, Nginx, Gradle, Java 17",
            link: "https://github.com/SSAFY-GROUP/S06P31D201",
            period: "2022"
        },
        {
            name: "CuteCatDog",
            description: "동물의 행동과 표정을 통해 감정을 분석하고 사용자가 동물에 대한 지식을 얻을 수 있는 펫케어 애플리케이션 개발",
            techStack: "Android, Kotlin, YouTube API, KakaoTalk API, AWS EC2, Jenkins, Spring Boot",
            link: "https://github.com/SSAFY-GROUP/S06P22D103",
            period: "2022"
        },
        {
            name: "인공지능 활용 모바일 채팅 서비스",
            description: "얼굴 인식을 통하여 동물상으로 분류하여 비슷한 동물을 찾고 이를 통하여 랜덤 채팅과 퀴즈를 통해 자연스럽게 동물 보호에 관심을 갖도록 고무시키는 공익 서비스 개발",
            techStack: "Kotlin, Android, Firebase, Teachable Machine",
            link: "",
            period: "2022"
        },
        {
            name: "CAFÉ 웹사이트 (MVC 패턴 스마트스토어)",
            description: "MVC 패턴의 Vue.js, HTML, CSS, JavaScript를 활용한 스마트스토어 웹 개발",
            techStack: "Java, Spring Boot, Vue.js, MVC",
            link: "https://github.com/SSAFY-GROUP/9-_Mobile_through_starter_2",
            period: "2021"
        },
        {
            name: "SSAFYBUCKS (O2O기반 Smart Store)",
            description: "Online to Offline 서비스로 직접 방문하지 않고 커피를 주문하고 주문 목록을 관리하는 Mobile Application 개발",
            techStack: "Android, Kotlin, Java, Spring Boot, MSSQL",
            link: "https://github.com/loveStarDev/android-kotlin-cafe",
            period: "2021"
        },
        {
            name: "SSAIGN (결제 서류 제작 프로그램)",
            description: "SAMSUNG SOFTWARE ACADEMY에서 사용하는 서류를 입력만으로 자동으로 만들어주는 애플리케이션",
            techStack: "Jetpack, Android, Kotlin, Firebase",
            link: "https://github.com/loveStarDev/kotlin-ssaign-project",
            period: "2021"
        },
        {
            name: "Pigme (자동 부화기 프로젝트)",
            description: "Raspberry PI와 Python을 활용한 자동 부화기 프로젝트",
            techStack: "Raspberry Pi, Python, IoT",
            link: "https://github.com/loveStarDev/python-auto_hatch_pigme-project",
            period: "2020"
        },
        {
            name: "홍미히 (동공 인식을 활용한 의사소통 보조 프로그램)",
            description: "인공지능을 활용하여 동공을 조작한 의사 소통 보조 프로그램 AAC",
            techStack: "Python, PyQT, TTS",
            link: "https://github.com/loveStarDev/python-capstone-hongsam",
            period: "2020"
        },
        {
            name: "BookTree",
            description: "도서관 책 반납/대여 프로그램",
            techStack: "Oracle, C#",
            link: "https://github.com/loveStarDev/csharp-bookrental-project",
            period: "2019"
        },
        {
            name: "Rolling Eyes",
            description: "Unity 기반 동공 인식 게임 프로토타입 개발",
            techStack: "Unity, C#",
            link: "https://www.youtube.com/watch?v=K54E1rIK2lc&feature=youtu.be",
            period: "2018"
        }
    ];

     // 연도별로 그룹화
    const groupedProjects = projects.reduce((acc, project) => {
        if (!acc[project.period]) {
            acc[project.period] = [];
        }
        acc[project.period].push(project);
        return acc;
    }, {});

    return (
        <section>
            <h2>Side Projects</h2>
            <ul>
                {Object.entries(groupedProjects).map(([year, projects]) => (
                    <div key={year} className="row">
                        <div className="row-left-30">
                            <h3>{year}</h3>
                        </div>
                        <div className="row-right">
                            {projects.map((project, index) => (
                                <div key={index} className="project">
                                    <h4>{project.name}</h4>
                                    <p><strong>설명:</strong> {project.description}</p>
                                    <p><strong>기술 스택:</strong> {project.techStack}</p>
                                    {project.link && (
                                        <p>
                                            <strong>링크:</strong>{" "}
                                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                                {project.link}
                                            </a>
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </ul>
        </section>
    );
}

export default SideProjects;