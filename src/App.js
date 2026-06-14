다운로드되는 App.js 파일 내용입니다 (주요 부분):
javascriptimport React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    agree: false
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('모든 필수 항목을 입력해주세요.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('올바른 이메일 형식을 입력해주세요.');
      return;
    }
    const subject = encodeURIComponent(`[MZ SOL 문의] ${formData.subject}`);
    const body = encodeURIComponent(`이름: ${formData.name}\n이메일: ${formData.email}\n제목: ${formData.subject}\n\n문의내용:\n${formData.message}`);
    window.location.href = `mailto:venturs@naver.com?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', subject: '', message: '', agree: false });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // MZ SOL 로고 SVG 컴포넌트
  const Logo = () => (
    <svg width="40" height="40" viewBox="0 0 100 100">
      <line x1="50" y1="5" x2="50" y2="15" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <line x1="20" y1="20" x2="28" y2="28" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <line x1="5" y1="50" x2="15" y2="50" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <line x1="80" y1="20" x2="72" y2="28" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <line x1="95" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="50" cy="50" r="25" fill="#5B9BD5" stroke="#2C5282" strokeWidth="2"/>
      <line x1="50" y1="60" x2="50" y2="45" stroke="white" strokeWidth="2"/>
      <line x1="50" y1="50" x2="42" y2="42" stroke="white" strokeWidth="2"/>
      <line x1="50" y1="50" x2="58" y2="42" stroke="white" strokeWidth="2"/>
      <circle cx="50" cy="45" r="2.5" fill="white"/>
      <circle cx="42" cy="42" r="2.5" fill="white"/>
      <circle cx="58" cy="42" r="2.5" fill="white"/>
      <path d="M 35 60 Q 32 65 35 68 L 65 68 Q 68 65 65 60 Z" fill="white" opacity="0.9"/>
      <ellipse cx="50" cy="62" rx="6" ry="5" fill="white" opacity="0.7"/>
      <rect x="48" y="68" width="4" height="8" fill="white" opacity="0.9"/>
      <ellipse cx="50" cy="76" rx="8" ry="3" fill="white" opacity="0.9"/>
    </svg>
  );

  const programs = [
    {
      icon: '⚙️',
      title: '산업설비 제어 패널 및 전장 시스템 설계',
      description: 'PLC 기반의 산업용 제어 패널 및 전장 시스템 종합 설계',
      features: ['PLC 기반 Control Panel 설계 및 제작', '산업용 전원·보호·배선 엔지니어링', '설비별 맞춤형 전장 구조 설계', '고신뢰·장시간 운영 환경 설계']
    },
    // ... 나머지 programs 데이터
  ];

  const products = [
    { icon: '🔌', title: '산업용 제어보드', description: '센서 입력–제어–출력 통합 제공' },
    { icon: '⚡', title: '스마트 모터 제어 모듈', description: 'BLDC, 인버터 제어 솔루션' },
    { icon: '📡', title: 'Edge-Gateway 시스템', description: '실시간 데이터 수집 IoT 플랫폼' },
    { icon: '🏭', title: '전장 Control Panel', description: '전장반·배선·보호장치 제작' }
  ];

  return (
    <div className="App">
      {/* Header */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <nav className="nav">
          <div className="logo-container">
            <Logo />
            <div className="logo-text">MZ SOL</div>
          </div>
          <ul className="nav-links">
            {['home', 'programs', 'benefits', 'contact'].map((item) => (
              <li key={item}>
                <button onClick={() => scrollToSection(item)}>
                  {item === 'home' && '홈'}
                  {item === 'programs' && '핵심기술'}
                  {item === 'benefits' && '제품/솔루션'}
                  {item === 'contact' && '문의'}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-logo-container">
          <Logo />
        </div>
        <h1>MZ SOL</h1>
        <p>혁신적인 기술 솔루션으로 미래를 만들어갑니다</p>
        <button onClick={() => scrollToSection('programs')}>핵심 기술 알아보기</button>
      </section>

      {/* 나머지 섹션들... */}
      
      {/* Footer with Contact Form */}
      <footer id="contact">
        <div className="contact-form">
          <h2>1:1문의</h2>
          <form onSubmit={handleSubmit}>
            {/* 폼 필드들... */}
          </form>
        </div>
      </footer>
    </div>
  );
}

export default App;