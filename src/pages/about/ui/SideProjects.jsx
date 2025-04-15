import React from 'react';

function SideProjects() {
    const projects = [
        {
            year: "2022",
            name: "모바일 커뮤니티 (With SSAFY) / 5인 개발",
            description: "모든 싸피인들의 편리한 올인원패키지 서비스, 다양한 익명 커뮤니티와 한번에 확인할 수 있는 커리큘럼 및 스터디와 팀빌딩까지 다른 플랫폼을 사용하지 않고 편리하게 서비스를 이용할 수 있는 애플리케이션을 개발",
            techStack: "Spring Boot, Spring Data JPA, Kotlin, Android, AWS EC2, Jenkins, Nginx, Gradle, Java 17",
            details: [
                "SSAFY 전용 올인원 커뮤니티 앱 개발 (커리큘럼, 팀빌딩, 게시판 등 통합 기능 제공)",
                "REST API 설계 및 구현, Jenkins 기반 CI/CD 파이프라인 구축",
                "Android MVVM 아키텍처 기반 클라이언트 개발, Firebase 알림 연동",
            ],
            // link: "https://github.com/SSAFY-GROUP/S06P31D201"
        },
        {
            year: "2022",
            name: "CuteCatDog / 6인 개발",
            description: "동물의 행동과 표정을 통해 감정을 분석하고 사용자가 동물에 대한 지식을 얻을 수 있는 펫케어 애플리케이션 개발",
            techStack: "Android, Kotlin, YouTube API, KakaoTalk API, AWS EC2, Jenkins, Spring Boot",
            details: [
                "Kotlin 언어를 활용한 Android Application 개발",
                "YouTube API를 활용하여 행동 솔루션 영상 제공",
                "OpenSource를 활용하여 동물 표정 분석 AI 모델 적용",
                "Figma를 활용한 레이아웃, 인터페이스 기획 및 개발",
            ],
            // link: "https://github.com/SSAFY-GROUP/S06P22D103"
        },
        {
            year: "2022",
            name: "인공지능 활용 모바일 채팅 서비스 / 6인 개발",
            description: "얼굴 인식을 통하여 동물상으로 분류하여 비슷한 동물을 찾고 이를 통하여 랜덤 채팅과 퀴즈를 통해 자연스럽게 동물 보호에 관심을 갖도록 고무시키는 공익 서비스 개발",
            techStack: "Kotlin, Android, Firebase, Teachable Machine",
            details: [
                "얼굴 인식을 통해 동물상 매칭 및 랜덤 채팅 기능 구현",
                "Firebase 기반 실시간 채팅 및 NoSQL 데이터 구조 활용",
                "Teachable Machine을 활용한 비전 모델 적용 및 인터페이스 정의",
            ],
            // link: "https://github.com/SSAFY-GROUP/S06P12D110"
        },
        {
            year: "2021",
            name: "SSAIGN (결제 서류 제작 프로그램) / 2인 개발",
            description: "SAMSUNG SOFTWARE ACADEMY에서 사용하는 서류를 입력만으로 자동으로 만들어주는 애플리케이션",
            techStack: "Jetpack, Android, Kotlin, Firebase",
            details: [
                "Jetpack 을 사용한 개발",
                "Custom Dialog 구현",
                "Firebase를 활용한 문의 기능 추가",
                "Playstore에 올라온 버전과 현재 애플리케이션 버전을 비교하고 최선 업데이트 권장",
                "애플리케이션 Release",
                "Preference를 사용한 데이터 관리",
            ],
            // link: "https://github.com/loveStarDev/kotlin-ssaign-project"
        },
        {
            year: "2021",
            name: "CAFÉ 웹사이트 (MVC 패턴 스마트스토어) / 2인 개발",
            description: "MVC 패턴의 Vue.js, HTML, CSS, JavaScript를 활용한 스마트스토어 웹 개발",
            techStack: "Java, Spring Boot, Vue.js, MVC",
            details: [
                "DBUtil, DTO, DAO 모델 설계 및 구현",
                "REST API 구현 및 Swagger를 통한 문서화",
                "Junit과 Postman을 통한 테스트",
                "Vue.js를 활용한 화면 구현 및 Axios를 활용한 통신",
                "상품목록 페이지 및 기능 구현",
            ],
            // link: "https://github.com/SSAFY-GROUP/9-_Mobile_through_starter_2"
        },
        {
            year: "2021",
            name: "SSAFYBUCKS (O2O기반 Smart Store) / 2인 개발",
            description: "Online to Offline 서비스로 직접 방문하지 않고 커피를 주문하고 주문 목록을 관리하는 Mobile Application 개발",
            techStack: "Android, Kotlin, Java, Spring Boot, MSSQL",
            details: [
                "MySQL을 활용한 DB설계 및 구현",
                "SpringBoot를 활용한 백엔드 서버 구현",
                "REST API 구현 및 Swagger를 통한 문서화 진행",
                "Firebase를 활용한 FCM 구현",
            ],
            // link: "https://github.com/loveStarDev/android-kotlin-cafe"
        },
        {
            year: "2020",
            name: "Pigme (자동 부화기 프로젝트) / 1인 개발",
            description: "Raspberry PI와 Python을 활용한 자동 부화기 프로젝트",
            techStack: "Raspberry Pi, Python, IoT",
            details: [
                "Raspberry PI를 통한 센서 조작 (DHT11, 소형 모터 등)",
                "KT IoTMakers API를 활용한 온/습도 로그 관리",
                "PyQT5를 활용한 GUI 설계 및 구현",
            ],
            // link: "https://github.com/loveStarDev/python-auto_hatch_pigme-project"
        },
        {
            year: "2020",
            name: "홍미히 (동공 인식을 활용한 의사소통 보조 프로그램) / 5인 개발",
            description: "인공지능을 활용하여 동공을 조작한 의사 소통 보조 프로그램 AAC",
            techStack: "Python, PyQT, TTS",
            details: [
                "Webcam을 통한 동공 인식 AI 구현",
                "Arduino를 활용한 기계 조작 Prototype 제작",
                "Cool SMS를 활용한 문자 메시지 수신",
                "TTS를 통한 의사전달",
                "눈동자를 활용한 메뉴 조작",
                "롤링 배너를 통한 사진첩 구현",
                "산업통상자원부에서 개최한 E2Festa에서 산업통상부장관상 수상",
            ],
            // link: "https://github.com/loveStarDev/python-capstone-hongsam"
        },
{
            year: "2019",
            name: "BookTree / 1인 개발",
            description: "도서관 책 반납/대여 프로그램",
            techStack: "Oracle, C#",
            details: [
                "전체 UI 설계",
                "Oracle DB 설계 및 연결",
                "책 대여, 반납, 회원관리, 책관리(매니저), 통계 설계 및 구현",
            ],
            // link: "https://github.com/loveStarDev/csharp-bookrental-project"
        },
        {
            year: "2018",
            name: "Rolling Eyes / 1인 개발",
            description: "(주)파코웨어에서 의뢰한 Unity기반 동공 인식 게임 프로토타입 개발",
            techStack: "Unity, C#",
            details: [
                "동공인식 AI를 활용한 발사체 생성, 이동 로직 구현",
                "게임 전체 시스템 구현",
                "성능 측정 및 프로토타입 개발",
            ],
            link: "https://www.youtube.com/watch?v=K54E1rIK2lc&feature=youtu.be"
        }
    ];

    // 연도별로 그룹화
    const groupedProjects = projects.reduce((acc, project) => {
        if (!acc[project.year]) {
            acc[project.year] = [];
        }
        acc[project.year].push(project);
        return acc;
    }, {});

    // 연도별 내림차순 정렬
    const sortedYears = Object.entries(groupedProjects).sort(
        ([yearA], [yearB]) => Number(yearB) - Number(yearA)
    );

    return (
        <section>
            <h2>Side Projects</h2>
            <ul>
                {sortedYears.map(([year, projects]) => (
                    <div key={year} className="project-row">
                        <div className="row-left-30">
                            <h3>{year}</h3>
                        </div>
                        <div className="row-right">
                            {projects.map((project, index) => (
                                <div key={index} className="project">
                                    <h4>{project.name}</h4>
                                    <p>{project.description}</p>
                                    <div className="tech-stack">
                                        {project.techStack.split(", ").map((tech, i) => (
                                            <span key={i} className="tech-badge">{tech}</span>
                                        ))}
                                    </div>
                                    <ul>
                                        {project.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                    {project.link && (
                                        <p>
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