# Web3Forms 문의 메일 설정

현재 문의 폼은 Web3Forms로 자동 발송합니다.
네이버 SMTP, 앱 비밀번호, EmailJS 설정은 필요하지 않습니다.

## 현재 설정

문의 폼은 아래 API로 전송합니다.

```text
https://api.web3forms.com/submit
```

Access Key:

```text
05dff2d1-eb67-40db-9b74-e89365fed124
```

## 전송 내용

홈페이지에서 문의하기를 누르면 아래 정보가 전송됩니다.

```text
subject: [MZ SOL 문의] 입력한 제목
from_name: MZ SOL 홈페이지
inquiry_title: 입력한 제목
inquiry_content: 입력한 내용
message: 문의 제목과 문의 내용
```

## 수정 위치

Access Key를 바꿔야 하면 아래 두 파일에서 `WEB3FORMS_ACCESS_KEY` 값을 변경합니다.

- `homepage.html`
- `index.html`
