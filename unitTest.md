### action test 
 - action tests can only check the mutation payload without worrying about the current state or other dependencies like an API call.
   액션은 테스트는 api call 처럼 다른 의존성들 또는 현재 상태에 대해 걱정 없이 mutation payload가 잘 되는지 체크 할 수 있다. 내가 mutation payload로 전달 할 데이터가 맞는지 확인 가능. 
- action unit test 방법
 - action을 unit test에 어떻해 불러와야 할까.
  - action  들을 테스트하기 위해서는 모듈에서 별도의 파일로 분리되어 있어야한다.
  - 테스트 코드에서 action들만 inject-loader로 삽입하여 활용하기.
  - ex/ MyModuleInjector = require('inject-loader!MyStore')
 - api를 함수화 하기
  - 각  action들에 심어져 있는 axios로 api를 호출하는 부분들을 별도로 함수화 해서 정리해주는 것이 필요하다.
  - unit test 자료들을 보면 대부분이 api 호출부분을 분리해서 관리 한다.
```
api
  - index.js
store
  - modules
    - list
      - index.js
      - actions.js
```
```
MyModuleInjector = require('inject-loader!MyStore')
MyModule = MyModuleInjector({
  'lib/dispatcher': DispatcherMock,
  'events': EventsMock,
  'lib/handle_action': HandleActionMock
})
```

## mutation test
- mutation test는 기대되어진 상태가 변화되ㅣ었는지 확인 할 수 있다. 테스트는 기대하는 value와 함께 현재 상태를 비교 할 것이다. 

## Getters test
- A return value will always exist and the test should consis of checking if that return value is correct in relation to the context-the current state. As an example, check the code where a category is received as a parameter on the getter in order to filter a list of elements.
- getters는 filter, count 같은 동작을 위한 store를 사용하는 함수들이다. 결과값은 항상 존재 할 것이고 테스트는 결과값이 context에 관련되어서 맞는지 아닌지 체크를 위해 .. 예를 들어서, 카테고리는  