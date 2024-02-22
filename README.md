# Electron

## GitHub, GitLab 여러 계정 연결
github, gitlab ssh key 등록
- gitlab, github 계정이 다르면 2개 발급
```shell
ssh-keygen -t rsa -b 4096 -C "계정"
```

- github, gitlab 계정 동일하여 하나만 사용
```shell
ssh-keygen -t rsa -b 4096 -C "bonjin.app@gmail.com"
```

##### config ssh key 연결
파일생성
- touch ~/.ssh/config

파일 수정
```shell
vi config
```
or
```shell
vim config
```
or
```shell
open config
```

```shell
# github
Host github.com
Hostname github.com
User git
IdentityFile ~/.ssh/id_rsa

# gitlab
Host gitlab.com
Hostname gitlab.com
User git
IdentityFile ~/.ssh/id_rsa
```

##### Permissions 0644 for id_rsa 권한 오류
- chmod 400 ~/.ssh/id_rsa

##### clone
https가 아닌 ssh로 clone 끝!

<hr/>

##### Storybook
- https://storybook.js.org/

#### chromatic
- https://storybook.js.org/tutorials/intro-to-storybook/react/ko/deploy/

storybook 배포
1. install
- yarn add --dev chromatic

2. deploy
- npx chromatic --project-token=chpt_026f64c6f7d9d96

3. (option) github actions를 통핸 배포
- github 저장소 Settings > Secrets and variables > Actions
- New repository secret 버튼 클릭
- CHROMATIC_PROJECT_TOKEN 이름에 chromatic에서 제공한 token 넣고 저장
- .github/workflows/chromatic.yml 작성


## 시작 방법

1. clone
```shell
git clone https://github.com/n2soft-application/electron-client.git
```

2. yarn 설치
```shell
brew install yarn
```

3. electron 시작
- :3000 포트를 바라보도록 되어있습니다.
- 개발 환경에서는 react가 실행된 후 electron으로 실행됩니다.
```shell
yarn start
```

### Builder
electron-builder 를 사용하여 하나의 pc에서 다양한 플랫폼을 빌드 할 수 있습니다.
```
electron-forge 라는 것도 있지만 현재 pc와 동일한 플랫폼만 빌드할 수 있는 단점이 있습니다.
mac, window 인증서가 필요합니다. (업데이트를 위한 환경)
```


- mac
```shell
yarn dist:mac
```

- mac64
```shell
yarn dist:mac64
```

- win32
```shell
yarn dist:win32
```

- win64
```shell
yarn dist:win64
```


### 환경
node: v18.16.0
react: ^18.2.0
electron: ^28.1.3