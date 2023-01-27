
```
tsconfig.json

/**
* esModuleInterop 속성이 위의 코드 처럼 true로 설정될 경우, ES6 모듈 사양을 준수하여 CommonJS 모듈을 가져올 수 있게 됩니다.
* 해당 옵션을 통해 위에서 예시로 들었던 코드는 아래와 같이 트랜스파일링 되며, 그 결과 정상적으로 import 하는 것이 가능해집니다.
**/
"esModuleInterop": true,


```
// https://pewww.tistory.com/26, joi 사용할 때 에러나서 추가했습니다.