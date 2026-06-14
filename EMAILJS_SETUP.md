# EmailJS 자동 문의 메일 설정

GitHub Pages는 정적 호스팅이라 서버에서 직접 메일을 보낼 수 없습니다.
문의 폼을 자동 발송으로 쓰려면 EmailJS 설정값 3개를 발급받아 `homepage.html`과 `index.html`에 넣어야 합니다.

## 1. EmailJS 가입

1. https://www.emailjs.com/ 접속
2. 계정 생성 및 이메일 인증
3. Email Services에서 Gmail, Naver SMTP 등 발송 계정 연결

## 2. Email Template 생성

템플릿 수신자는 `venturs@naver.com`으로 설정합니다.

템플릿 본문에는 아래 변수를 사용합니다.

```text
{{message}}
```

또는 개별 변수로 구성하려면 아래 변수를 사용합니다.

```text
문의 제목: {{inquiry_title}}

문의 내용:
{{inquiry_content}}
```

## 3. 설정값 입력

EmailJS에서 발급받은 값을 두 파일의 `EMAILJS_CONFIG`에 입력합니다.

- `homepage.html`
- `index.html`

```js
const EMAILJS_CONFIG = {
    publicKey: 'YOUR_EMAILJS_PUBLIC_KEY',
    serviceId: 'YOUR_EMAILJS_SERVICE_ID',
    templateId: 'YOUR_EMAILJS_TEMPLATE_ID'
};
```

예시:

```js
const EMAILJS_CONFIG = {
    publicKey: 'abc123...',
    serviceId: 'service_xxxxxxx',
    templateId: 'template_xxxxxxx'
};
```

## 4. 동작

설정값이 입력되면 문의하기 버튼은 메일 앱을 열지 않고 EmailJS로 자동 발송합니다.

설정값이 아직 `YOUR_...` 상태이면 기존처럼 `mailto:venturs@naver.com`으로 메일 앱을 엽니다.
