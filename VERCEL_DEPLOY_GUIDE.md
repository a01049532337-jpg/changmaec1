# Vercel 배포 가이드 (changmac-ir-web)

이 프로젝트는 Vite와 React를 기반으로 구축되었습니다. Vercel에서 홈페이지가 정상적으로 표시되도록 설정을 완료했습니다.

## 배포 방법

1. **GitHub 저장소 푸시**: 제가 수정한 파일들을 GitHub 저장소에 반영해 주세요.
   - `package.json` 수정됨 (빌드 스크립트 최적화)
   - `vite.config.ts` 수정됨 (빌드 경로 및 플러그인 정리)
   - `vercel.json` 추가됨 (SPA 라우팅 설정)

2. **Vercel 프로젝트 생성**:
   - [Vercel 대시보드](https://vercel.com/dashboard)에서 **"Add New"** -> **"Project"**를 클릭합니다.
   - 이 GitHub 저장소를 연결합니다.

3. **빌드 설정 확인**:
   - **Framework Preset**: `Vite` (자동 감지됨)
   - **Root Directory**: `./` (기본값)
   - **Build Command**: `npm run build` 또는 `pnpm run build`
   - **Output Directory**: `dist` (자동 감지됨)

4. **배포**: **"Deploy"** 버튼을 누르면 배포가 시작됩니다.

## 주요 변경 사항
- **SPA 라우팅 지원**: `vercel.json`을 통해 모든 경로를 `index.html`로 연결하여 새로고침 시 404 에러가 발생하지 않도록 했습니다.
- **빌드 최적화**: 서버 측 코드를 제외하고 클라이언트 정적 파일만 빌드하도록 수정하여 Vercel 배포 환경에 최적화했습니다.
- **플러그인 정리**: 개발 환경 전용 플러그인들을 제거하여 빌드 안정성을 높였습니다.
