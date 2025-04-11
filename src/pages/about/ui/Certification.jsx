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
            no: "2A3976707465"
        }
    ];

    // 정렬 수행
    certification.sort((a, b) => {
        return Number(b.date.replaceAll('-', '')) - Number(a.date.replaceAll('-', ''));
    });

    return (
        <section>
            <h2>Certification</h2>
            <ul>
                {certification.map((cert, index) => (
                    <li key={index}>
                        <h4>{cert.name}</h4>
                        <p><strong>발급기관:</strong> {cert.agency}</p>
                        <p><strong>발급일:</strong> {cert.date}</p>
                        <p><strong>번호:</strong> {cert.no}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}