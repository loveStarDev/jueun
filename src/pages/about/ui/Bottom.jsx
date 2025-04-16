import React from 'react';
import './Bottom.css'; // 스타일 파일 추가

export default function Bottom() {
    return (
        <section>
            <footer className="bottom">
                <hr className="divider" />
                <div className="bottom-content">
                    <div className="left-content">
                        <p>최주은</p>
                        <p><strong>Email:</strong> <a href="mailto:ilutoo@naver.com">ilutoo@naver.com</a></p>
                    </div>
                    <div className="right-content">
                        <p>&copy; 2025 Jueun Choi. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </section>
    );
}