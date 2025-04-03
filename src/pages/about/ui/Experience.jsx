import Job from "../model/Job";
import Project from "../model/project";

function Experience() {
    let job = new Job();
    job.name = "에프에스케이엘앤에스(주)";
    job.role = "Manager";
    job.start = "2022-07";
    job.end = "현재";
    
    let project = new Project();
    project.name = "Global Biz 용기렌탈솔루션";
    project.start = "2024-01";
    project.end = "2024-10";
    project.skill = "Javascript, HTML, CSS, JSP, Java, MariaDB, Spring, HyperUI, Bootstap";
    project.description = "BOSK 와 현대자동차 배터리 납품을 위해 배터리 용기 렌탈을 위한 솔루션을 개발하였습니다.";
    project.addDoing("ERD, 플로우차트, 기능설계서, API 명세서, 화면설계 등을 통한 기획");
    project.addDoing("Spring, Java, MariaDB를 활용한 Restful API 개발");
    project.addDoing("JavaScript, JSP, HTML, CSS 를 활용한 Web Application 화면 개발");
    job.addProject(project);

    project = new Project();
    project.name = "정산 시스템 간소화 및 속도 개선";
    project.start = "2023-03";
    project.end = "2023-08";
    project.skill = "Javascript, HTML, CSS, JSP, Java, MariaDB, Spring";
    project.description = "정산 시스템 리펙토링을 통해서 전체 소스 개선 및 최적화를 하고 최종적으로 속도 개선 및 프로세스 개선을 이루는 작업을 진행하였습니다.";
    project.addDoing("Java, Spring 을 활용한 Stored Procedure <-> Rest API 변환");
    project.addDoing("웹 성능 분석 및 동기/비동기 통신을 활용한 최적화");
    project.addDoing("소스 개선 및 불필요한 코드 중복 제거");
    job.addProject(project);

    project = new Project();
    project.name = "관리 회계를 위한 프로젝트 단위 배분 개선";
    project.start = "2023-04";
    project.end = "2024-01";
    project.skill = "Javascript, HTML, CSS, JSP, Java, MariaDB, Spring";
    project.description = "기존에 어떤 BPO 인지에 따라서 프로젝트에 연관된 비용을 측정하거나 업무량을 나타내는 척도가 없었고 이를 해결하고자 관리회계 및 이를 관리하는 시스템을 개발 하였습니다.";
    project.addDoing("Java, Spring, MariaDB를 활용한 Back Office 개발");
    project.addDoing("Javascript, HTML, CSS, JSP 등을 활용한 Web Application 개발");
    job.addProject(project);

    project = new Project();
    project.name = "전자 결재 시스템 개발";
    project.start = "2022-10";
    project.end = "2023-01";
    project.skill = "Javascript, HTML, CSS, JSP, Java, MariaDB, Spring";
    project.description = "KEROL 물류 비용에 대해서 국세청 세무 신고를 위한 결재를 위한 시스템 개발";
    project.addDoing("Java, Spring, MariaDB를 활용한 Restful API 개발");
    project.addDoing("Javascript, HTML, CSS, JSP 등을 활용한 Web Application 개발");
    project.addDoing("ajax, Promise를 활용한 비동기, 동기를 활용한 개발");
    job.addProject(project);
    
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