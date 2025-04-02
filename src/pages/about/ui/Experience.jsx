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
    project.skill = "Java, Javascript, HTML, CSS, JSP, mariaDB, Spring";
    project.description = "BOSK 와 현대자동차 배터리 납품을 위해 배터리 용기 렌탈을 위한 솔루션을 개발하였습니다.";
    project.addDoing("ERD, 플로우차트, 기능설계서, API 명세서, 화면설계 등을 통한 기획");
    project.addDoing("Spring, Java를 활용한 API 개발");
    project.addDoing("JavaScript, JSP, HTML, CSS 를 활용한 Web Application 화면 개발");
    job.addProject(project);

    project = new Project();
    project.name = "정산 시스템 간소화 및 속도 개선";
    project.start = "2023-03";
    project.end = "2023-08";
    project.skill = "Java, Javascript, HTML, CSS, JSP, mariaDB, Spring";
    project.description = "정산 시스템 리펙토링을 통해서 전체 소스 개선 및 최적화를 하고 최종적으로 속도 개선 및 프로세스 개선을 이루는 작업을 진행하였습니다.";
    project.addDoing("Java, Spring 을 활용한 Stored Procedure <-> Rest API 변환");
    project.addDoing("웹 성능 분석 및 동기/비동기 통신을 활용한 최적화");
    project.addDoing("소스 개선 및 불필요한 코드 중복 제거");
    job.addProject(project);

    FSK L&S는 SK그룹과 Hon Hai그룹(Foxconn)의 공동 투자로 설립된 ICT 융합 물류 기업으로 위 기업의 DT추진 그룹에서 정산 팀의 매니저로 근무하였습니다.



관리 회계를 위한 프로젝트 단위 배분 개선 2023-04 ~ 2024-01
기존에 어떤 BPO 인지에 따라서 정산 비용을 측정하거나 업무량을 나타내는 척도가 없었고 이를 해결하고자 프로젝트에 대한 비용을 표시하고 나타낼 수 있도록 수정하는 부분이 필요했습니다. 사용자로 하여금 어떤 프로젝트 운영을 하는데 발생한 비용인지 입력 할 수 있도록 진행하고 추후 이를 통하여 어떤 물류 운영에 비용이 어느정도 발생하고 배분되었는지 확인할 수 있도록 개선을 진행하였습니다.

정산 Web 속도, 프로세스 개선 2023-03 ~ 2023-07
정산 Web Application 중 불필요한 과정이 있어서 이를 최소화 할 수 있는 유연한 시스템 개발 진행, 네트워크 속도가 느린 해외 법인의 불편함을 해소하고자 소스 리펙토링, Stored Procedure -> Java Service 전환, 비동기화 처리를 통한 개선을 진행하였습니다.

정산 간소화를 위한 시스템 고도화 2022-12 ~ 2023-04
기존에 있던 복잡한 정산 시스템으로 인하여 사용자들이 불필요한 과정으로 업무 처리에 불편함을 느끼고 있을 때, 간소화를 통한 고도화 프로젝트에 참여하여 개발을 진행하였습니다. 한달 기준 월 195시간 업무 감소 효과로 전체 업무 시간의 약 80% 감소 효과를 얻었습니다.

전자 결재 시스템 개발 2022-10 ~ 2022-12
타사 그룹웨어 시스템을 통해 진행하던 전자 결재 시스템을 회사 시스템인 KEROL 내부에 결재 시스템을 구축하여 회사 프로그램을 통해 결재가 되도록 구성하였습니다. 이를 통해 타사 그룹웨어의 전자 결재 문서를 사용할 필요 없이 총 30,419건의 결재가 이루어질 수 있도록 개발을 진행하고 관련 유지 보수를 진행하였습니다. Spring을 통해 필요한 API를 구성하고, Back Office 기능을 Stored Procedure에 녹여 문제 없이 사용 할 수 있도록 개발하였습니다. 또한 JSP를 활용하여 화면 개발에 참여하였습니다.

    
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