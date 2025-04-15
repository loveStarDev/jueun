export default function Certification() {
    let certification = [
        {
            date: "2023-12-15",
            name: "SQLD_SQL개발자",
            agency: "한국데이터산업진흥원",
            no: "SQLD-051002294"
        },
        {
            date: "2021-06-02",
            name: "정보처리기사",
            agency: "한국산업인력공단",
            no: "21201041110G"
        },
        {
            date: "2024-03-17",
            name: "Opic_IL",
            agency: "ACTFL",
            no: ""
        }
    ];

    // 날짜 기준 내림차순 정렬
    certification.sort((a, b) => {
        return Number(b.date.replaceAll('-', '')) - Number(a.date.replaceAll('-', ''));
    });

    return (
        <section>
            <h2>Certifications</h2>
            <ul className="certification-list">
                {certification.map((cert, index) => (
                    <li key={index} className="certification-item">
                        <div className="certification-header">
                            {cert.name && <h5>{cert.name}</h5>}
                            {cert.date && <span className="certification-date">{cert.date}</span>}
                        </div>
                        <div className="certification-body">
                            {cert.agency && <p><strong>발급기관:</strong> {cert.agency}</p>}
                            {cert.no && <p><strong>번호:</strong> {cert.no}</p>}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}