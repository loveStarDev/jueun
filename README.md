### 1. 프로젝트 구조 설명

- 해당 프로젝트는 `turborepo` 라이브러리를 이용해 모노레포로 구성함.

- `apps/`에는 프로젝트 파일이 존재하고, `packages/`에는 공통 패키지 파일이 존재함.

- 프로젝트별 공통되는 부분은 `packages/`에서 관리하고, `apps/`에서 가져다가 사용하면 되는 구조. 중복되는 코드와 줄어들고 관리 포인트가 명확해진다.

### 2. 파일명

대문자가 들어가는 PascalCase 대소문자는 OS간 호환성이 좋지 않아, kebab-case를 사용합니다.

### 3. 권장 확장프로그램 설치

```bash
# VSCode
cat extensions.txt |% { code --install-extension $_}

#IntelliJ

```

### 4. 설정된 라이브러리 설치

- Node가 설치되어 있지 않다면

  1. nvm 설치 [Link](https://github.com/coreybutler/nvm-windows/releases)

     - 페이지 최하단 Assets -> nvm-setup.exe 설치

  ```bash
  nvm install 22.14.0
  nvm use 22.14.0
  ```

- Yarn 패키지 매니저가 설치되어 있지 않다면

  ```bash
  npm install yarn --global
  ```

- 라이브러리 설치

  ```bash
  yarn
  ```

### 5. 공통 패키지

- `packages/auth`: 로그인 공통 처리

- `packages/eslint`: 코드 문법 관리 설정

- `packages/shortcut`: 키보드 단축키 기능

- `packages/test`: 테스트 설정 파일 및 `packages/ui` 기본 컴포넌트 테스트 파일

- `packages/typescript`: 타입스크립트 설정

- `packages/ui`: 기본 공통 컴포넌트

- `packages/utils`: 자주 쓰이는 유틸 함수 및 라이브러리

### 6. 프로젝트

- `apps/kerol`: 케롤 TO-BE

### 7. 프로젝트 실행 및 관리 방법

- 모든 프로젝트 명령어

  - `yarn dev`: 모든 프로젝트 실행

  - `yarn build`: 모든 프로젝트 빌드

  - `yarn test`: 모든 프로젝트에 있는 테스트 파일 실행

  - `yarn lint`: 모든 프로젝트 코드 문법 문제 확인

  - `yarn lint:fix`: 모든 프로젝트 코드 틀린 문법 fix

  - `yarn format`: 모든 프로젝트 코드 포맷 정렬

- 개별 프로젝트 명령어

  - `turbo dev --scope=kerol`: 케롤 프로젝트 실행

### 폴더 구조

- /\_\_tests\_\_
  <br/>`기능/컴포넌트 테스트`

- /.vscode
  <br/>`vscode 설정 및 확장 프로그램`

- /node_modules
  <br/>`설치된 JS 라이브러리 모듈`

- /public
  <br/>`퍼블리싱 파일`
  <br/>`ex) public/test.svg -> https://domain.com/test.svg`

- /src
  <br/>`개발 관련`

- /src/actions
  <br/>`API 통신 기초 함수`

- /src/components
  <br/>`컴포넌트 (공통/페이지)`

- /src/context
  <br/>`리액트 Context-Provider`

- /src/hooks
  <br/>`리액트 Hook`

- /src/hooks/actions
  <br/>`API 통신 Hook`

- /src/hooks/context
  <br/>`Provider Hook`

- /src/hooks/utils
  <br/>`Util Hook`

- /src/layouts
  <br/>`레이아웃`

- /src/lib
  <br/>`라이브러리 헬퍼, 유틸성, 상수 코드`

- /src/locales
  <br/>`다국어`

- /src/pages
  <br/>`페이지`

- /src/routes
  <br/>`라우트 설정`

- /src/routes/pages
  <br/>`페이지 URL 라우트 설정`

- /src/routes/tabs
  <br/>`탭 라우트 설정`

- /src/schemas
  <br/>`데이터 검증 스키마`

- /src/stores
  <br/>`데이터 저장 스토어`

- /src/error.tsx
  <br/>`전역 에러 처리 페이지`

- /src/index.css
  <br/>`전역 CSS`

- /src/main.tsx
  <br/>`리액트 실행 파일`

- /src/provider.tsx
  <br/>`Provider 래퍼 컴포넌트`

- /src/routes.tsx
  <br/>`동적 라우트 경로 자동 구성 파일`

- /.env
- /.env.development
- /.env.production
  <br/>`글로벌 환경 변수`

- /index.html
  <br/>`페이지 접속시 사용되는 html`

- /PROJECT.md
  <br/>`프로젝트 기능 구조`

- /README.md
  <br/>`프로젝트 설명`

- /tsconfig.json
  <br/>`타입스크립트 설정 파일`

- /vite.config.ts
  <br/>`VITE 번들러 설정 파일`

- /yarn.lock
  <br/>`yarn 패키지 매니저로 설치한 라이브러리 버전 정보`
