document.getElementById('signupForm').addEventListener('submit', function(e) {
    // e : event, 웹 브라우저에서 제공해주는 기능 도구. 객체
    e.preventDefault(); // 기본 제출 동작(서버제출) 막기 (페이지 리로드 방지)

    // FormData 클래스, 클래스는 변수, 상수, 함수들의 모음집
    // new FormData() : 초기화를 함, 생성자 호출
    //유저가 입력한 내용이 FormData 클래스에 담아져 있다.
    // 그래서, 우리는 각 요소를 하나씩 꺼내서 사용 중이다.

    const formData = new FormData(this); // 폼 데이터 수집

    let output = ""// 결과의 내용을 담을 변수, 빈 문자열로 초기화

    // 단일 입력 필드 처리
    // 유저명부터 표기 ㄱㄱ
    output += ''

    //백틱 `, ` 문자열을 표기함
    // 1번째 요소, 유저명 가져오기
    // 예)${formData.get('username')} -> bo0 으로 변환
    output += `출력되는 유저명 : ${formData.get('username')}\n`
    // 2번째 요소, 패스워드 가져오기
    output += `출력되는 패스워드 : ${formData.get('password')}\n`
    
    // 3번째 요소, 취미, 다중 체크박스 처리(hobby)
    const hobbies = formData.getAll('hobby') // 여러 개 요소를 가져와서, 배열에 담기
    output += `출력되는 취미들: ${hobbies.join(', ')}\n`

    output += `성별 : ${formData.get('gender')}\n`
    output += `나이 : ${formData.get('age')}\n`
    output += `생년월일 : ${formData.get('date')}\n`
    output += `이메일 : ${formData.get('email')}\n`

    const file = formData.get('file') // 여러 개 요소를 가져와서, 배열에 담기
    // ${} : EL 표기법 (Exresion Language), 특정의 값을 출력할 때 자주 사용함
    // 조건식 : 1) file 존재하고 2) && : and 
    // (조건식) ? (참) : (거짓)
    output += `첨부파일명: ${file && file.name ? file.name : '파일없음'}\n`

    // 히든의 요소의 값도 같이 출력
     output += `히든의 요소 : ${formData.get('user_id')}\n`

    // 공통 : 결과를 화면에 표기하는 부분 연결
    // output의 내용을, html 태그인 pre 태그에 출력한다.
    document.getElementById('output').textContent = output
})