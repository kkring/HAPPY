async function injectHeader() {
    // header html 불러오기
    fetch("./header.html")
        .then((response) => {
            return response.text();
        })
        .then((data) => {
            document.querySelector("header").innerHTML = data;
        })

    let headerHtml = await fetch("./header.html")
    let data = await headerHtml.text()
    document.querySelector("header").innerHTML = data;
};




window.onload = async () => {
    // onload : html 파일을 모두 불러오고 나서 실행 (순서 보장)
    injectHeader();
}


// // front ,backend예시  코드

// export const FRONT_BASE_URL = "http://127.0.0.1:5500"
// export const BACK_BASE_URL = "http://127.0.0.1:8000"
// export async function handleLoginAPI() {
// 	const email = document.getElementById("email").value;
// 	const password = document.getElementById("password").value;
// 	const response = await fetch(`${BACK_BASE_URL}/api/users/login/`, {
// 		headers: {
// 			"content-type": "application/json"
// 		},
// 		method: "POST",
// 		body: JSON.stringify({
// 			email: email,
// 			password: password
// 		})
// 	});
// 	return response;
// }