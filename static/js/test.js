// const FRONT_BASE_URL = "http://127.0.0.1:5500"
// const BACK_BASE_URL = "http://127.0.0.1:8000"
// async function getAPI() {
//     // GET방식 예시
//     const response = await fetch(`${BACK_BASE_URL}/api/products/`, {
//         method: "GET",
//     });
//     return response.json();
// }
// // 비동기 처리
// // 순서를 보장 시키기 위한 대기 방식
// async function getAPITest() {
//     // GET방식 예시
//     const response = await getAPI()
//     console.log(response)
//     // API 응답 처리
//     if (response.status == 200) {
//         // 처리 완료
//     } else if (response.status == 400) {
//         // 예외처리
//     }
// }
// async function putAPI(information) {
//     // PUT방식 예시
//     const response = await fetch(`${BACK_BASE_URL}/api/users/update/information/`, {
//         headers: {
//             'content-type': 'application/json',
//         },
//         method: 'PUT',
//         body: JSON.stringify({
//             DATA: information.data
//         })
//     })
//     return response
// }
// async function putAPITest() {
//     // PUT방식 예시
//     const HTML_DATA = document.getElementById("test").value
//     const information = {
//         data: HTML_DATA
//     }
//     const response = await putAPI(information)
//     console.log(response)
//     // API 응답 처리
//     if (response.status == 200) {
//         // 처리 완료
//     } else if (response.status == 400) {
//         // 예외처리
//     }
// }
// async function formdataPatchAPI(information) {
//     // form data Patch 예시
//     const nickname = information.nickName
//     const profile_image = information.profile_image
//     const formdata = new FormData();
//     if (profile_image) {
//         formdata.append('profile_image', profile_image)
//     }
//     formdata.append('nickname', nickname)
//     const response = await fetch(`${BACK_BASE_URL}/api/users/update/information/`, {
//         headers: {
//             "Authorization": `Bearer ${access_token}`
//         },
//         method: 'PATCH',
//         body: formdata
//     })
//     return response
// }
// async function formdataPatchAPITest() {
//     // form data Patch 예시
//     const HTML_DATA = document.getElementById("nickName").value
//     const information = {
//         nickName: HTML_DATA
//     }
//     const response = await putAPI(information)
//     console.log(response)
//     // json (key, value)
//     // response status = 200
//     // 변경된 닉네임 key = newnickname , vlaue : 변경된 값
//     // API 응답 처리
//     if (response.status == 200) {
//         // 처리 완료
//     } else if (response.status == 400) {
//         // 예외처리
//     }
// }