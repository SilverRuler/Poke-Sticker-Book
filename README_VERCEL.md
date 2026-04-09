# Vercel 배포 가이드

이 프로젝트는 Vercel에 최적화되어 있으며, 영구적인 데이터 저장을 위해 **Upstash Redis**를 사용합니다.

## 1. Upstash Redis 설정
1. [Upstash](https://upstash.com/)에 가입하고 새로운 Redis 데이터베이스를 만듭니다.
2. 대시보드에서 `REST API` 섹션의 `UPSTASH_REDIS_REST_URL`과 `UPSTASH_REDIS_REST_TOKEN`을 복사합니다.

## 2. Vercel 환경 변수 설정
Vercel 프로젝트 설정의 `Environment Variables` 메뉴에서 다음 변수들을 추가하세요:

| 변수명 | 설명 | 예시 |
| :--- | :--- | :--- |
| `UPSTASH_REDIS_REST_URL` | Upstash Redis URL | `https://your-db.upstash.io` |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis Token | `your-token` |
| `ADMIN_USERS` | 관리자 계정 정보 (JSON 문자열) | `[{"id":"tyeun7","pw":"dmswk123"}]` |

## 3. 배포
1. 깃허브 레포지토리를 Vercel에 연결합니다.
2. `Framework Preset`은 `Vite`로 자동 인식됩니다.
3. 배포가 완료되면 `https://your-project.vercel.app`에서 접속 가능합니다.

## 참고 사항
- 모든 포켓몬 이미지는 `public/images/pokemon`에 다운로드되어 있으므로 외부 서버 다운 걱정 없이 빠르게 로딩됩니다.
- 방문자 수는 IP 기반으로 중복 없이 집계되며 Redis에 저장됩니다.
- 오늘의 획득 목록은 한국 시간(KST) 기준 00시에 자동 초기화됩니다.
