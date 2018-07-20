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