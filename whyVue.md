## Vue
- Angular 와 다르게 러닝커브가 매우 낮습니다. 쉽고 간결한 구문이 Vue 의 최고 장점입니다.
- Angular 와 다르게 ES6, ES5, NativeJs, 심지어 jQuery 까지 그대로 사용할 수 있는 유연성이 있습니다. 구조 설계를 할때 Angular 에 의한 이라는 선제조건이 사라집니다. 
- (Javascript 가 주력이 되는) 프레임워크 개발이 아닌 프론트엔드 개발이 됩니다. 
-  3대 프레임워크 중 유일하게 한국 공식 문서가 존재합니다. 커뮤니티가 수백명유지되며 번역이 업데이트 후 해당 주에 바로 베포될 정도의 활성화를 띄고 있습니다. 
- Vue 에서는 pug, sass, stylus 등 온갖 구문을 편하게 사용할수잇슴니다.
- 2018년 4월 16일 현시점 Github Star 수는 Vue 는 이미 Angular 를 넘어섰고, React 를 바짝 따라가고 있다

```

- Vue: 90,942
- Angular: 35,113
- React: 93,615

```
- 프론트엔드 프로젝트의 설계는 3가지 프레임워크 모두 비슷한 패턴을 가지지만, 러닝 커브와 제공하는 라이브러리, 코드의 특성에 따라 내부적으로 달라진다.

- 현재 3가지 프레임워크 모두 Stable 상태이다. Angular 가 조금더 back-end 개발자의 시각으로 제작된 프레임워크라면, Vue 는 조금더 UX 디자이너의 시각으로 제작된 프레임워크이다.

### Pros

- 구현속도가 타 프레임워크에 비해 상대적으로 어마어마하게 빠르다
- 유일하게 한글 공식 문서가 존재한다
  - 실제로 번역을 위한 커뮤니티가 존재하며 업데이트 속도가 즉각적이다
- .vue 파일 한 개로 template, script, style 을 하나의 컴포넌트로 구성 가능
  - 위의 장점은 Vue 의 가장 큰 장점, 실무에 있어서 시간의 단축은 큰 역할을 한다
- 단점이라고 언급되던 낮은 인지도와 불안정성은 현재 대부분 해소되었다고 판단된다
  - Gitlab 에서 vue 사용중
  - Laravel 에서 기본 프론트엔드 프레임워크로 Vue 채택
- React lifecycle 을 이해하는 사람이라면 Vue 의 lifecylce 에 쉽게 적응
- Flux 혹은 Redux 를 이해하고 있다면, Vuex 의 90%를 바로 이해할 수 있다
- 친절한 창시자
  - 실제로 Evan Yoo 에게 직접 물어봐도 답변이 빠르게 돌아온다
- Vue devtool, vuex 개발 도구는 타 프레임워크대비 훨씬 좋은 기능을 자랑한다
- 큰 설정 없이 바로 pug, scss, stylus, typescript 를 적용 가능하다
- Angular 는 모든 것을 Angular 방식으로 강제화하는 반면 Vue 는 훨씬 더 유연하고 관점이 적은 솔루션이다.
  - Flexibility

### Cons
- React 와 Angular 에 비교해서 유일한 단점은 커뮤니티의 크기이지만, 어디까지나 상대적이고 현시점에는 개발하기에 충분한 커뮤니티의 크기를 가지고 있다.
  - 상대적인 단점이다. 프론트엔드 개발을 1도 모르는 사람 기준에서는 단점이 될 수 있다.
  - 해당 부분 외에는 밀리는 부분이 없을 정도이니 v2 에서 그만큼 주목을 받은것 같다
- 현재까지도 커뮤니티의 크기에 관련해 걱정과 우려가 있을 뿐, 단점으로 콕 찝어낼 만한 사항은 보이지 않는다