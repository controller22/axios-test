// script.js

// 데이터를 가져와서 HTML에 표시하는 함수
function fetchDataAndDisplay() {
    // axios를 사용하여 데이터 가져오기
    axios.get('https://jsonplaceholder.typicode.com/todos/1') // 이 URL은 예시용입니다. 실제 URL로 대체하세요.
        .then(function (response) {
            // 데이터 가져오기에 성공한 경우
            const data = response.data;

            // console.log("통신 결과 : ", response);

            // console.log("status : ", response.status);
    
            // console.log("data : ", response.data);

            // 데이터를 HTML에 표시
            const dataContainer = document.getElementById('data-container');
            dataContainer.innerHTML = `
                <h2>데이터:</h2>
                <p><strong>이름:</strong> ${data.userId}</p>
                <p><strong>상태:</strong> ${response.status}</p>
                <p><strong>제목:</strong> ${data.title}</p>3
            `;
        })
        .catch(function (error) {
            // 데이터 가져오기에 실패한 경우
            console.error('데이터를 가져오는 중 오류 발생:', error);
        });
}

// 페이지 로드 시 데이터 가져오기 함수 호출
fetchDataAndDisplay();