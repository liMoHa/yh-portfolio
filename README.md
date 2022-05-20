# 임영하 포트폴리오 사이트

##  React, TypeScript, styled-components를 이용하여 만든 포트폴리오 웹사이트입니다. 
- 데스크탑, 테블릿, 모바일 크기별로 반응하도록 만들었습니다.
- styled-components를 이용하여 글로벌 스타일을 지정하였고 자주 사용되거나 메인컬러가 되는 속성값들을 따로 관리하는 테마 파일을 만들었습니다. nesting 구조를 이용하여 class이름을 크게 고려하지 않고 빠르게 작성할 수 있었습니다.
- TypeScript를 사용한 덕분에 어떤 값이 전달될지 의식해서 소스를 작성할 수 있었고, 타입이 불일치 하는 경우 자바스크립트와는 달리 런타임 전에 오류를 알 수 있기 때문에 실행 시 reference 오류를 겪지 않았습니다.
<br>

# 결과물
<img style="width: 55rem; margin-bottom:3em;" src="public/images/portfolioGitHubImg.png" />



# 느낌점
- ovserver intersection API를 적용하여 스크롤시 조건을 만족하는 영역에 해당하는 메뉴를 활성화시키려고 하였음. 로컬 url에선 잘 동작하지만 배포 후 생성된 링크를 통한 웹사이트에서는 잘 동작하지 않았음. 
- DOM을 조작하는 방식으로 useRef를 사용하는 것과 querySelector등으로 객체를 가져오는 것 중 어떤 상황에서 어떤 것이 더 유리한지 고민해볼 필요성을 느낌.
