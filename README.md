# Next.js 타임어택 - Todo App

## 시작하기

### 1. 의존성 설치
```bash
npm install
```

### 2. 환경변수 설정
```bash
cp .env.example .env.local
```

### 3. 개발 서버 실행
터미널 두 개를 열어서 각각 실행:

```bash
# 터미널 1: Next.js 개발 서버
npm run dev
```

```bash
# 터미널 2: Mock API 서버
npm run mock
```

### 4. 접속 확인
- Next.js: http://localhost:3000
- Mock API: http://localhost:4000/todos

## 데이터 모델

### todos
- id, title, content, category, completed, priority, createdAt

### categories
- id, name, color
