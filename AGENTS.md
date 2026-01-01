# 작업 참고 가이드 (Shoply)

이 문서는 Codex가 작업을 시작할 때마다 빠르게 확인하는 프로젝트 안내서입니다.

## 한 줄 요약

React 19 + Create React App 기반의 이커머스 프론트엔드 단일 앱.

## 핵심 의존성

- `react`, `react-dom`
- `react-scripts` (CRA 빌드/개발)
- `@testing-library/*`, `web-vitals`

## 구조 개요

- `src/App.js` : 루트 컴포넌트
- `src/index.js` : 앱 엔트리
- `src/App.css`, `src/index.css` : 스타일
- `public/` : 정적 리소스

## 기본 명령

```bash
npm install
npm start
npm test
npm run build
```

## 작업 시 체크리스트

1) 의존성/스크립트는 `package.json` 기준으로 업데이트
2) 단일 앱 구조를 유지하며 `src` 안에서 컴포넌트 확장
3) 새 페이지/기능 추가 시 `src`에 폴더 구조를 명확히 정의
4) README는 프로젝트 특징/실행 방법/구조 요약을 최신으로 유지

## 특이사항

- CRA 기본 세팅을 유지하고 있으므로 빌드/테스트는 `react-scripts` 기준
- 아직 기본 템플릿 상태이므로 기능 확장 시 구조 재정비 필요
