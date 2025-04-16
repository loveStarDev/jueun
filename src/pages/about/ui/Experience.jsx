import Job from '../model/Job';
import Project from '../model/project';

function Experience() {
	let job = new Job();
	job.name = '에프에스케이엘앤에스(주)';
	job.role = 'Manager';
	job.start = '2022-07';
	job.end = '현재';

	let project = new Project();
	project.name = '차세대 물류 플랫폼 개발';
	project.start = '2024-10';
	project.end = '진행 중';
	project.skill = 'SpringBoot, React.js, Javascript, Java, MariaDB';
	project.description = 'React 기반 프론트엔드와 Java 17, Spring Boot 기반 백엔드 개발';
	project.addDoing('AWS 기반 서버 아키텍처 설계 및 운영 환경 구성');
	project.addDoing('AG Grid를 활용한 복잡한 물류 데이터 시각화');
	project.addDoing('Swagger를 활용한 RESTful API 문서화');
	project.addDoing('화면 구성도 및 컴포넌트 구조 설계 전반 참여');
	job.addProject(project);

	project = new Project();
	project.name = 'Global Biz 용기렌탈솔루션';
	project.start = '2024-01';
	project.end = '2024-10';
	project.skill = 'Javascript, HTML, CSS, JSP, Java, MariaDB, Spring, HyperUI, Bootstap';
	project.description =
		'BOSK 와 현대자동차 배터리 납품을 위해 배터리 용기 렌탈을 위한 솔루션을 개발';
	project.addDoing('BOSK 및 현대차 대상 배터리 용기 렌탈 시스템 개발');
	project.addDoing('ERD 설계, API 명세, 화면 설계 등 전반적인 설계 및 개발 참여');
	project.addDoing(
		'Java, Spring 기반 RESTful API 개발 및 HTML, CSS, JSP, Javascript 기반 Web UI 구현',
	);
	job.addProject(project);

	project = new Project();
	project.name = '정산 시스템 성능 개선 및 고도화';
	project.start = '2023-03';
	project.end = '2023-08';
	project.skill = 'Javascript, HTML, CSS, JSP, Java, MariaDB, Spring';
	project.description =
		'정산 시스템 리펙토링을 통해서 전체 소스 개선 및 최적화를 하고 최종적으로 속도 개선 및 프로세스 개선을 이루는 작업을 진행하였습니다.';
	project.addDoing(
		'프로세스 간소화 및 성능 향상 (Stored Procedure → Java 서비스 전환, 비동기 처리 도입)',
	);
	project.addDoing('웹 성능 분석 및 동기/비동기 통신을 활용한 최적화');
	project.addDoing('해외 법인의 네트워크 속도 이슈 대응을 위한 소스 리팩토링 수행');
	project.addDoing('사용자 UX 개선을 위한 화면 및 기능 재설계');
	project.addDoing('업무 프로세스 간소화로 월 195시간의 업무 시간 절감 (약 80% 감소)');
	job.addProject(project);

	project = new Project();
	project.name = '관리 회계를 위한 프로젝트 단위 배분 개선';
	project.start = '2023-04';
	project.end = '2024-01';
	project.skill = 'Javascript, HTML, CSS, JSP, Java, MariaDB, Spring';
	project.description = '물류 프로젝트별 원가 배분 기능 설계 및 구현';
	project.addDoing('데이터 분석을 통한 실제 발생 비용에 대한 영업 이익 산출');
	project.addDoing('사용자 입력을 통한 비용 흐름 추적 및 시각화 기능 추가');
	project.addDoing('Java, Spring, MariaDB를 활용한 Back Office 개발');
	project.addDoing('Javascript, HTML, CSS, JSP 등을 활용한 Web Application 개발');
	job.addProject(project);

	project = new Project();
	project.name = '전자 결재 시스템 개발';
	project.start = '2022-10';
	project.end = '2023-01';
	project.skill = 'Javascript, HTML, CSS, JSP, Java, MariaDB, Spring';
	project.description = '기존 외부 그룹웨어에서 자체 시스템(KEROL)으로 전자 결재 기능 내재화';
	project.addDoing(
		'약 3만 건 이상의 결재 처리 달성, JSP 및 Spring 기반 API 개발 및 유지 보수 수행',
	);
	project.addDoing('Java, Spring, MariaDB를 활용한 Restful API 개발');
	project.addDoing('Javascript, HTML, CSS, JSP 등을 활용한 Web Application 개발');
	project.addDoing('ajax, Promise를 활용한 비동기, 동기를 활용한 개발');
	job.addProject(project);

	project = new Project();
	project.name = '단말 보안 관제 시스템';
	project.start = '2025-03';
	project.end = '진행 중';
	project.skill = 'C#, Javascript, Java, Spring, HTML, CSS, JSP, Mybatis, MariaDB';
	project.description = '사용자의 보안 시스템 관제 프로그램 개발';
	project.addDoing('RESTful API 개발을 통한 통신');
	project.addDoing('C#을 활용한 Window Application 개발');
	job.addProject(project);

	project = new Project();
	project.name = '업무 자동화 RPA 개발 (Robotic Process Automation)';
	project.start = '2024-01';
	project.end = '2024-06';
	project.skill = 'Python, Electron, Eureka(Spring Cloud)';
	project.description = 'Python 기반 RPA를 통한 반복 업무 자동화 시스템 개발';
	project.addDoing('Electron 기반 Web Application 구현으로 사용 편의성 강화');
	project.addDoing('Spring Cloud Eureka를 활용한 서버 이중화 구성 및 안정성 확보');
	job.addProject(project);

	return (
		<section>
			<h2>Work Experience</h2>
			<div className="row">
				<div className="row-left">
					<h3>{job.getName()}</h3>
					<span className="role">{job.getRole()}</span>
					<span>
						<span>{job.getPeriod()}</span>
					</span>
				</div>

				<div className="row-right">{job.getProject()}</div>
			</div>
		</section>
	);
}

export default Experience;
