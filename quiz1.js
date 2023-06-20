// const a = maxvalue([1, 2, 3, 4, 5]);
// console.log(a);

// let a = array([1, 2, 3, 4, 5]);
// let b = Math.max.apply(null, array);

// console.log(a); // [1,2,3,4,5]
// console.log(b); // [5]
//-> 구글링을 통해 알게된 가장 큰 수 배열법

// numbers.sort((a, b) => a - b);
// console.log(numbers); // [9, 11, 15, 23, 52]

// // 내림차순 정렬, 원본 배열이 다시 수정
// numbers.sort((a, b) => b - a);
// console.log(numbers); // [52, 23, 15, 11, 9]

//구글참조해서 내림차순 오름차순 학습..(?) 근데 이해 안됨
// 1번문제를 위한 예습아닌 예습을 했는데 활용방법을 모르겠다..

//1번 문제 풀이 시작
//감을 못 잡겠어서 대경님의 도움을 받아 대경님 코드 이해하기.....

function maxValue(a) {
  let sortArr = [];
  for (i = 0; i <= a.length; i++) {
    //a.length은 a배열의 길이 maxValue([2, 5, 1, 3, 4])는 5개이니까 i <= 5 까지 1씩 증가
    if (a[i] > a[i + 1]) {
      sortArr.unshift(i);
    } else if (a[i] > a[i + 2]) {
      sortArr.unshift(i);
    } else if (a[i] > a[i + 3]) {
      sortArr.unshift(i);
    } else if (a[i] > a[i + 4]) {
      sortArr.unshift(i);
    } else {
      sortArr.unshift(i);
    }
  }

  //unshift는 index 0번째에 값을 넣는 매서드
  //maxValue([2, 5, 1, 3, 4]);를 하나하나씩 대입하면 5,4,3,2,1,0이 나옴

  sortArr.pop();
  //pop은 배열 맨 마지막 값을 삭제시켜주는 매서드
  //pop을 사용하여 5,4,3,2,1이 됨 !
  let bigNum = sortArr[0];

  let b = {
    maxValue: bigNum,
    sortArr: sortArr.slice(0),
  };

  //slice는 지정한 임의의 수를 불러오는 매서드

  return console.log(b); // 리턴을 하지 않으면 maxValue를 썼을 때 함수가 적용이 안됨
}

const c = maxValue([2, 5, 1, 3, 4]);

console.clear();

//배열에 관한 예습을 좀 더 해야겠다.
// 위에 맨 처음에 대경님이 알려주신 코드로 하면 어떤 수를 사용하든 5,4,3,2,1 나온다고해서 다른 방법을 생각해보았다
// 지호님의 코드로 공부를 했다.

//sort 함수를 이용하면 내림차순으로 값을 불러올 수 있겠다 !
//

// function maxvalue(arr) {
// arr.sort(function (a, b) {
// return b - a; // a - b면 오름차순
// });

// let result = {
// maxvalue: arr[0],
// sortArr: arr,
// };
// return result;
// }

// const b = maxvalue([1, 2, 3, 4, 5]);
// console.log(b);

// console.clear();

// 리턴이 이해할 듯 말 듯 자꾸 헷갈리는데 1번문제 드디어 이해 완료 ㅠㅠㅜ!
// 지호님, 대경님, 수현님 감사합니다....

//6월 17일 자바스크립트 day04끝나고 주현님과 강사님과 나머지공부(?) 후 재도전

// 함수의 이름은 maxValue 입니다. 인자로는 정수들이 들어있는 배열을 파라미터로 전달받습니다.
// 배열로 전달받은 숫자 중 가장 큰 숫자와
// 숫자를 내림차순으로 정렬된 배열을 객체 형태로 반환해야 합니다.
//
// ex)
//  const a = maxvalue([1,2,3,4,5])
//  console.log(a)
//  결과값
//  {
//  maxValue: 5,
//  sortArr = [5,4,3,2,1]
//  }

// function maxValue(arr) {
//   arr = maxValue.reverse(); //reverse를 쓸 때는 배열명.reverse 이기 때문에 arr(배열명).reverse(arr)

//   return {
//     //값이 될 변수(?)를 선언하고 그 변수명으로 리턴 해야하는 듯..?
//     maxValue: arr[0],
//     sortArr: [arr],
//   };
// }

// maxvalue([1, 2, 3, 4, 5]); // 대문자 틀림
// const d = maxvalue();
// console.log(d);

// console.clear();
//-------------맨처음에 썼던 코드--------

//-------수정 후 -------//

function maxValue(arr) {
  arr.reverse(arr);

  let result = {
    maxValue: arr[0],
    sortArr: arr,
  };

  return result;
}

const a = maxValue([1, 2, 3, 4, 5]);
console.log(a);
//오늘 수업시간에 배웠던 reserve사용해서 드디어 성공 ㅠㅡㅠ!!!!!!!!!!!!
