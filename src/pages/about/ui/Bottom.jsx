import React from 'react';
import './Bottom.css'; // 스타일 파일 추가

export default function Bottom() {
	return (
		<section>
			<footer className="bottom">
				<div className="ref">
					<p><strong>References</strong></p>
					<p>Github:{' '}
						<a target="_blank" href="https://github.com/loveStarDev">https://github.com/loveStarDev</a>
					</p>
					<p>Blog:{' '}
						<a target="_blank" href="https://ilutoo.tistory.com/">https://ilutoo.tistory.com/</a>
					</p>
				</div>
				<hr className="divider" />
				<div className="bottom-content">
					<div className="left-content">
						<p>최주은</p>
						<p>
							<strong>Email:</strong>{' '}
							<a href="mailto:ilutoo@naver.com">ilutoo@naver.com</a>
						</p>
					</div>
					<div className="right-content">
						<p className="copyright">&copy; 2025 Jueun Choi. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</section>
	);
}
