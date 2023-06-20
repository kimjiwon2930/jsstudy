// 당신이 구현하고하자 하는 함수는
// 배열과 정수를 파라미터로 전달 받습니다.
// 함수 이름은 정해지지 않았으니 마음대로 하셔도 괜찮습니다.
// 전달받은 배열은 정확히 각 요소마다 값을 10을 더 합니다. (arr[i]+10) -- for문 사용
// 이후 값이 10씩 더해진 배열에서, 나머지 파라미터로 전달받은 정수가 있는지 확인하여
// 값이 없다면 콘솔에 검사하고자 하는 값이 없다는 로그를 보인 후 함수를 종료하세요
// 값이 있다면 해당 숫자를 제외한 배열을 반환하는 함수를 만드세요.

// 최종 목표
// 1. 해당 함수는 배열과 검사하고자 하는 수를 파라미터로 전달 받습니다.
// 2. 해당 함수는 배열의 각 요소에 10을 더한 후 검사하고자 하는 수가 있는지 검사합니다. (arr[i]+10) -- for문 사용
// 3. 만약 값이 없다면 결과값이 없습니다를 콘솔에 로그합니다.
// 4. 값이 있다면 검사하고자하는 수를 제외한 배열을 반환합니다. //splice 사용해봐야겠당
// 5. 값이 없을 때 console.log에 undefined가 찍혀서는 안됩니다.

// ex)
// const arr = [1,2,3,4,5]
// const a =함수명(arr, 11)
// console.log (a)
// 결과값
// [12,13,14,15] ( 값 있음 ) ”결과값이 없습니다“ ( 값 없음 )

// 대경님이랑 이 문제에 필요한 부분 같이 적어보았다

/*
1. 정수랑 배열의 10 더한 값 중에 같은 값이 있다면 그 요소를 제외하고 반환
2. 정수랑 같은 값이 없다면 "결과값이 없습니다" 출력

<필요한 기능>
for문으로 10 더하기, splice 사용(?) , 조건문(if or switch)사용

결과값
[12,13,14,15] ( 값 있음 ) ”결과값이 없습니다“ ( 값 없음 )
 */

//=========================================================================

// function examine(arr, test) {
//   //   console.log(arr);
//   // let result = [arr.sort((a, b) => a - b)];
//   const plus = [arr];
//   for (i = 0; i < arr.length; i++) {
//     plus = arr[i] + 10;
//   }
//   // if (arr[i] == test) return console.log("dhffkdfa");
//   return plus;
//   // return result;
// }

// const arr = [3, 4, 5, 6, 7];
// // const a = examine(arr, 11);
// const a = examine(arr);
// console.log(a);
//=========이건 내가 맨~ 처음에 썼던 코드 ===========

//===========대경님이 도와주신 부분..!============
// let arr = [1, 2, 3, 4, 5];

// function examine(arr,test) {
//   let result = [];

//   for (i = 0; i < arr.length; i++) {
//     let data = arr[i] + 10;
//     result.push(data);
// }
// for(i=0; i<arr.length; i++) {
//   if(result[i] === test ){
//     result.

//   }
// }
// return result;

//     }

// const a = examine(arr,11);
// console.log(a);

//========== 다시 도전 ===========

function random(arr, test) {
  let result = [];
  let testnumber = result.filter((item) => item != test);
  for (i = 0; i < arr.length; i++) {
    result.push(arr[i] + 10);
  }
  for (i = 0; i < arr.length; i++) {
    if (result[i] === test) return testnumber;
  }
  return "값이 없음";
}

const arr = [1, 2, 3, 4, 5];
console.log(random(arr, 16));
// console.log(a);
//성공!!!!
