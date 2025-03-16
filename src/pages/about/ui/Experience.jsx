import Job from "../model/Job";
import Project from "../model/project";

function Experience() {
    let job = new Job();
    job.name = "에프에스케이엘앤에스(주)";
    job.role = "Manager";
    job.start = "2022-07";
    job.end = "현재";

    let project1 = new Project();
    project1.name = "정산 시스템 간소화 및 속도 개선";
    project1.start = "2023-03";
    project1.end = "2023-08";
    project1.skill = "Java, Javascript, HTML, CSS, JSP, mariaDB, Spring";
    project1.description = "정산 시스템 리펙토링을 통해서 전체 소스 개선 및 최적화를 하고 최종적으로 속도 개선 및 프로세스 개선을 이루는 작업을 진행하였습니다.";
    project1.addDoing("Java, Spring 을 활용한 Stored Procedure <-> Rest API 변환");
    project1.addDoing("웹 성능 분석 및 동기/비동기 통신을 활용한 최적화");
    project1.addDoing("소스 개선 및 불필요한 코드 중복 제거");
    job.addProject(project1);

    console.log(job.getProject());

    
    
    return <section>
                <h2>Work Experience</h2>
                <div className="row">
                    <div className="row-left">
                        <h3>{job.getName()}</h3>
                        <span className="role">{job.getRole()}</span>
                        <span>
                            <span>{job.getPeriod()}</span>
                        </span>
                    </div>

                    <div className="row-right">
                        {job.getProject()}
                    </div>
                </div>
            </section>;
}

export default Experience;