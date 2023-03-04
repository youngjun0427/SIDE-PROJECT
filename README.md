
# 해양생물 MBTI 테스트

![해양생물 목업이미지](https://user-images.githubusercontent.com/112460280/222895846-50a6eb05-9ac5-4987-8642-019f652467a4.png)

**링크**
<a>https://marine-life-mbti.netlify.app/

## About this

**제작동기**

MBTI 16개 유형을 바탕으로 각 성향과 비슷한 해양생물을 찾아주고 설명해주는 React 웹 입니다.
해양환경공단의 블로그 게시글을 보고 웹 사이트로 구현하고 싶다는 생각이 들어 곧바로 해양환경공단에 문의하여 자료 사용 허가를 받고 디자이너와 협업하여 만든 개인프로젝트 입니다.

**제작기간**
2023.02.18 ~ 2021.02.26

**제작인원**
프론트엔드 개발자 1명, 
앱 디자이너 1명

**기술스택**
React, Styled-Components, Figma, ESLint, Prettier

**실행순서**
1. 사용자는 2개의 선택지 중 하나의 선택지를 고르게 됩니다.

2. 총 12단계의 선택을 하게되면 자신의 결정에 따른 MBTI결과와 이에 대응하는 MBTI 유형에 맞는 해양생물을 찾아줍니다.

3. 자신의 결과를 다른 링크를 복사하여 공유하거나, 카카오톡을 통해 공유합니다.
	
**실행화면**

|     ![image](https://user-images.githubusercontent.com/112460280/222896248-b49dacf2-2115-4bcc-8eea-1fa6f23795d7.png)      |     ![image](https://user-images.githubusercontent.com/112460280/222896273-a9954840-f95b-4385-81f0-9ce0f2fd54c0.png)     | ![image](https://user-images.githubusercontent.com/112460280/222896312-1d5ba9cc-fd48-4af8-96ef-f87204b9f29d.png) |
| :---------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------: |
| ![image](https://user-images.githubusercontent.com/112460280/222896333-0c91ea97-0535-4b39-98f4-ecd34a45a18f.png) | ![image](https://user-images.githubusercontent.com/112460280/222896352-246ffb62-54fb-49cf-950b-d63eb154513d.png) | ![image](https://user-images.githubusercontent.com/112460280/222896373-404f5afe-21cb-4c41-a2a9-f5217b6461d2.png) | 



<br />

## 참고자료

1. https://www.newspenguin.com/
2. 해양수산부
3. 해양환경공단

## Dependencies & Tools

# **tools**

**tools**

IDE : VScode

Deploy : netlify

**dependencies**

1. react-copy-clipboard : 링크 복사 기능을 위하여 사용함
2. react-router-dom : 라우터를 사용하여 결과물을 출력하기 위하여 사용
3. styled-reset : css초기화 등을 간편하게 하기 위하여 사용함
4. Prettier, ESLint : 단축 기능 사용을 위하여 확장도구 사용

## How to use

**설치방법**

1.create-react-app 설치

```
create-react-app
```

2.yarn 설치

```
npm install --global yarn
```

3.실행하기

```
yarn start
```

**_배포 방법_**
1.yarn build

```
yarn build
```

2.deploy netilfy

```
deploy netlify
```
