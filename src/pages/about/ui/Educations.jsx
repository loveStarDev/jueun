import React from 'react';
import './Educations.css';

function Educations() {
	const educationData = [
		{
			period: '2015-03 ~ 2021-08',
			school: '계명대학교',
			major: '컴퓨터공학 전공 • 학사',
			grade: '3.8487 / 4.5',
		},
	];

	return (
		<section>
			<h2>Education</h2>
			<ul className="education-list">
				{educationData.map((edu, index) => (
					<ul key={index} className="education-item">
						<div className="education-header">
							<h5>{edu.school}</h5>
							<span className="education-period">{edu.period}</span>
						</div>
						<div className="education-body">
							<p>
								<strong>전공:</strong> {edu.major}
							</p>
							<p>
								<strong>학점:</strong> {edu.grade}
							</p>
						</div>
					</ul>
				))}
			</ul>
		</section>
	);
}

export default Educations;
