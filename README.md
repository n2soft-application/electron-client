# Electron

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