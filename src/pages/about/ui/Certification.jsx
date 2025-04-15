export default function Certification() {
    let certifications = [
        {
            date: "2023-12-15",
            name: "SQLD_SQL개발자",
            agency: "한국데이터산업진흥원",
            no: "SQLD-051002294"
        },
        {
            date: "2022-06",
            name: "2022년 삼성 소프트웨어 아카데미 자율 프로젝트 경진대회, 우수상",
            description: [
                "Spring Boot, JPA, Kotlin, Android 기반 커뮤니티 서비스 개발",
                "모바일 커뮤니티 (With SSAFY) 프로젝트 참여"
            ]
        },
        {
            date: "2022-04",
            name: "2022년 삼성 소프트웨어 아카데미 특화 프로젝트 경진대회, 우수상",
            description: [
                "Spring Boot, Java 기반의 RESTful API 개발",
                "Kotlin, Android 기반 커뮤니티 서비스 개발",
                "인공지능을 활용한 반려동물 감정 상태 분석 및 온라인 커뮤니티 서비스 개발"
            ]
        },
        {
            date: "2022-02",
            name: "2022년 삼성 소프트웨어 아카데미 공통 프로젝트 경진대회, 우수상",
            description: [
                "인공지능 기반 모바일 채팅 서비스 개발",
                "Android, Kotlin 기반의 안드로이드 어플 개발",
                "얼굴 분석을 통한 닮은 동물 찾는 인공지능 앱 개발",
                "랜덤한 사용자와 온라인 채팅이 가능한 커뮤니티"
            ]
        },
        {
            date: "2021-11",
            name: "2021년 삼성 소프트웨어 아카데미 모바일 프로젝트 경진대회, 우수상",
            description: [
                "O2O 기반 SmartStore 시스템 개발",
                "Java, Spring Boot을 활용한 RESTful API 개발",
                "Kotlin, Android 기반의 매장 관리 어플리케이션 개발",
                "NFC 기능을 활용한 태깅",
                "이벤트 및 안드로이드 컴포넌트 개발",
                "Jetpack Library 활용"
            ]
        },
        {
            date: "2021-06-02",
            name: "정보처리기사",
            agency: "한국산업인력공단",
            no: "21201041110G"
        },
        {
            date: "2020-11",
            name: "창의적 종합설계 경진대회, 산업통상부장관상",
            description: [
                "시선 인식을 이용한 AAC 보완 대체 의사소통 프로그램 개발",
                "Pupil Detection Open Source 를 활용한 앱 개발",
                "Python 및 PyQT5 를 활용한 Window Application 개발",
                "Cool SMS 와 같은 외부 API 연동",
                "아두이노를 활용한 센서 및 제어 개발"
            ]
        },
        {
            date: "2020-07",
            name: "교내 캡스톤디자인, 최우수상",
            description: [
                "시선 인식을 이용한 AAC 보완 대체 의사소통 프로그램 개발",
                "Pupil Detection Open Source 를 활용한 앱 개발",
                "Python 및 PyQT5 를 활용한 Window Application 개발",
                "Cool SMS 와 같은 외부 API 연동"
            ]
        },
        {
            date: "2019-12",
            name: "SW해커톤 경진대회 개발톤, 우수상",
            description: [
                "다양한 객체 크기 검출을 위한 CNN 모델 변형 및 성능 개선",
                "실제 모델 적용 및 AI 모델 검증을 통한 성능 표기"
            ]
        },
        {
            date: "2024-03-17",
            name: "Opic_IL",
            agency: "ACTFL",
            no: ""
        },
        {
            date: "",
            name: "운전면허증 1종 보통",
            agency: "대구지방경찰청장",
            no: ""
        }
    ];

    // 날짜 기준 내림차순 정렬
    certifications.sort((a, b) => {
        return Number(b.date.replace("-", "")) - Number(a.date.replace("-", ""));
    });

    return (
        <section>
            <h2>수상/자격증</h2>
            <ul className="certification-list">
                {certifications.map((cert, index) => (
                    <li key={index} className="certification-item">
                        <div className="certification-header">
                            {cert.name && <h5>{cert.name}</h5>}
                            {cert.date && <span className="certification-date">{cert.date}</span>}
                        </div>
                        <div className="certification-body">
                            {cert.agency && <p><strong>발급기관:</strong> {cert.agency}</p>}
                            {cert.no && <p><strong>자격증 번호:</strong> {cert.no}</p>}
                            {cert.description && (
                                <ul>
                                    {cert.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}