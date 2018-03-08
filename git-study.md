## git workflow
* develop 브랜치에 병합해서 remote에 올리기
1. git pull origin develop
2. git checkout develop
3. git merge some-feature
4. git push

* ex/ develop (header, footer) 가 있다. hesung branch (body)가 있다. 
1. git branch  (hesung branch)에서 develop branch pull을 한다. remote 에 develop (header, footer)를 가져와 hesung branch에 반영이 된다. 즉 hesung branch (header, body, footer)를 가지고 잇다. 
2. branch를 dev로 변경한다. (switch)
3. hesung branch (body)를 가져온다. dev branch (header, body, footer)를 갖게된다.
4. git push  (변경된 dev branch는 remote에 반영된다) (edited)

* Reference<br/>
<http://blog.appkr.kr/learn-n-think/comparing-workflows/>
