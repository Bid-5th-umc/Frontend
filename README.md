### 1. 📤 프로젝트 열기

- vs code를 켜고 리액트 프로젝트를 생성하는 폴더에서 아래 명령을 진행합니다.
- `git clone https://github.com/Bid-5th-umc/Frontend.git` //저장소 내 컴퓨터 <-> 원격 연결
- `git pull origin main`
- 자신의 브랜치를 만들어주고 자신의 branch로 이동 해주세요 //브랜치 개념 모른다면 구글링. 자신만의 공간을 만든다고 생각하시면 됩니다. 
브랜치를 만들고 한번에 이동하는 명령어 `git checkout -b [본인의 github 아이디]`
- 작업은 해당 **본인 branch에서만** 진행해주세요 **(~~❌main branch❌~~)**
    - `git branch` : 현재 branch 확인
- `git init` // 저장소 생성

### 2. 💾 중간 중간 add 와 commit 하기

- 파트 별로 작업을 끝냈거나 더 작은 단위로 작업을 끝낼 때 마다 add 와 commit을 해 주는 게 좋아요
- 자신의 브랜치에 있는지 `git branch` 로 확인!
- `git add .` // git에 추가
- ❗commit convention ❗️
    - **Feat**: 새로운 기능 추가
    - **Fix**: 버그 수정
    - **Docs**: 문서 수정
    - **Style**: 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우
    - **Refactor**: 코드 리펙토링
    - **Test**: 테스트 코드, 리펙토링 테스트 코드 추가
    - **Chore**: 빌드 업무 수정, 패키지 매니저 수정
- 예시: `git commit -m "[Feat(번호): OO 기능 추가]"`

### 3. 🙌🏻 Github 레포지토리에 push하기

- 프로젝트 변경 사항을 remote repository(github repository)에 push 합니다
    - `git push origin [본인 github 아이디 브랜치 명]` : git에 등록되어 있는 origin(github repository)에 있는 자신의 branch로 프로젝트의 변경 사항을 반영합니다
- push를 완료했다면 프로젝트 repository에서 pull request를 진행합니다
- PR(Pull Request)시 메세지 제목은 ‘커밋 메시지’와 동일하게 적은 후 `create pull request` 버튼을 눌러주세요
- PR : `base: [master]` <- `compare: [본인 github 아이디]`

**🌟 각자의 브랜치에 작업한 내용들 올리고 master에 머지해서 프로젝트를 완성합니다 !!** 

**🌟 꼭 자신의 브랜치에 checkout 했는지 확인해주세요 !**

**🌟 작업 전 pull -> add -> commit -> push !**
