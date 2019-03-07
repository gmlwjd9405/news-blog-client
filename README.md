# news-blog-client
### Vue.js를 이용한 뉴스 블로그 페이지 구현

---

## Requirements
- News
  - Open API ([Hacker News Open API](https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md))를 통한 news data 가져오기
- User Info
  - 사용자 정보 data 가져오기
- Post data
  - 특정 Post에 대해 query 값을 이용하여 내용 data 가져오기
- Router를 통한 페이지 전환
  - [Hacker News Page](https://news.ycombinator.com/)의 show, ask, jobs에 해당하는 페이지 구현
  - 구조: 5개의 page
    - News, Ask, Jobs, 질문하기, 사용자 정보보기 페이지

---

## 관련 개념
- main.js
  - 기본적으로 application의 설정(plugin, lib), 구조도의 blueprint를 볼 수 있어야 함 
- Vue CLI 2.x VS Vue CLI 3.x
  - webpack 설정 파일이 노출되지 않음
    - **2.x**: `webpack.config.js` 존재
    - **3.x**: webpack을 위해 별도의 [설정](https://cli.vuejs.org/guide/webpack.html#working-with-webpack)이 필요
  - 프로젝트 구성
    - **2.x**: gitHub의 템플릿 다운로드, package.json의 설치된 내용을 npm install로 추가해야 함
    - **3.x**: 플러그인 기반으로 기능 추가, node_modules 자동으로 추가됨
  - ES6
    - **2.x**에서는 ES6에 대한 이해도가 낮지만, **3.x**에서는 기본 세팅이 ES6로 되어 있음
  - 생성 명령어
   ```bash
   // 2.x
   $ vue init webpack-simple [vue-news] // 생성: vue init '프로젝트 템플릿 이름' '파일 위치'
   $ npm run dev // 실행
   ```
   ```
   $ npm install -g @vue/cli
   $ npm uninstall -g vue-cli
   
   // 3.x
   $ vue create [vue-news] // 생성: vue create '프로젝트 이름'
   $ npm run serve // 실행

   ```
- Vue Router
  - 설치 
   ```bash
   $ npm install vue-router --save
   ```
  - 기본 설정
    - src/router directory 생성 후 하위에 index.js 생성
   ```js
   /* src/router/index.js */
   import Vue from 'vue';
   import VueRouter from 'vue-router';
   import MainView from "../views/MainView.vue" // custom path
   
   Vue.use(VueRouter);
   export const router = new VueRouter({ // router instance 생성
     routes: [
       {
         path: '/', // url 주소
         component: MainView, // url 주소로 갔을 때 표시될 Component (Page로 사용되는 Component)
       },
       // ... (같은 구조로 route 정보 추가)
     ]
   });
   ```
   ```js
   /* src/main.js */
   import { router } from "./router/index.js"; // 반드시 { router }로 받는다. (이름 변경 X)

   new Vue({
     render: h => h(App),
     router, // 추가
   }).$mount('#app')
   ```
- **axios**를 이용한 API 호출
  - axios는 Promise 기반으로 API를 제공한다.
    - `new Promise`를 반환
    - .then().catch() 사용
  - axios 설치
   ```bash
   $ npm install axios --save
   ```
  - data 요청은 `created`, `beforeMount` lifecycle에서 많이 함
    - mounted 후에 요청을 하게 되면 데이터 안에 값을 넣으면 화면이 다시 그려지기 때문에 
    - [Vue가 화면을 그리는 구조](https://vuejs.org/v2/guide/reactivity.html#ad) 참고
- API 비동기 처리

### JavaScript
- this 바인딩 (4가지)
  - 1) 브라우저 Window 객체를 가리키는 this
    - return: `Window {...}`
  - 함수 안의 this -> Window 객체 
   ```js
   function sum(a, b) { 
     console.log(this); // return: Window {...}
     return a + b;
   }
   ```
  - 2) 인스턴스를 정의한 객체 자체를 가리키는 this (생성자 함수를 가리킴)
   ```js
   function Vue(el) {
     console.log(this); // return: Vue {}
     this.el = el;
   }
   new Vue('#app');
   ```
  - 3) 비동기 처리에서의 this
   ```js
   created() {
     console.log('호출 전: ', this); // return: VueComponent { ... }
     axios.get('')
      .then(function(response) {
        console.log('호출 후: ', this); // return: undefined
        this.users = response.data;
      })
      .catch(function(error) {
      });
   }
   ```
    - 데이터를 Server로부터 가져오기 위해서는 http 프로토콜을 통해 Server에 갔다오기 때문에 비동기 호출을 해야 함
    - 현재 위치(비동기 호출되는 시점)에서 가리키는 this와 그것을 벗어난 this가 생긴다.
      - 기존의 것을 가리키고 싶으면 this 바인딩을 새로 해야한다.
      - 즉, `var vm = this;`, `vm.users = response.data`로 사용해야 한다.
      - 하지만 ES6 화살표 함수를 사용하면 this는 비동기 호출되는 시점의 this를 가지고 온다. (아래 참고)
  - 4) 화살표 함수의 this
   ```js
   created() {
     console.log('호출 전: ', this); // return: VueComponent { ... }
     axios.get('')
      .then(response => {
        console.log('호출 후: ', this); // return: VueComponent { ... }
        this.users = response.data;
      })
      .catch();
   }
   ```
- 비동기 처리
1. Callback
2. Promise

---

## Development Environment
- [Vue.js](https://vuejs.org/)
- [vue cli 3.x](https://cli.vuejs.org/)

## References
* [장기효(캡틴 판교) - Vue.js 완벽 가이드](https://www.inflearn.com/course/vue-js/)
* [Hacker News Open API](https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md)
* [Hacker New Page](https://news.ycombinator.com/)
