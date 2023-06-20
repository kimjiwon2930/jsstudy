// let gob = 5;
// let bananamilk = 10;
// let smagak = 15;
// let dosilock = 10;
// let sandwhich = 10;

// console.log(gob);

// if (gob === 5) {
//   console.log("값이 일치합니다");
// } else if (gob !== 5) {
//   console.log("값이 불일치합니다");
// }
// 근데 이렇게 하면... 잘못된 느낌

// const store = [
//     'gob'= 5,
//     'bananamilk' = 10,
//     'samgak' = 15,
//     'dosilock' = 10,
//     'sandwhich' = 10
// ]

//엥 뭔가 이상하다

// 대경님 for문을 참고해서 다시 시작

function answer(x, y) {
  let store = {
    yagop: ["야채곱창", 5],
    banana: ["바나나우유", 10],
    samgak: ["삼각김밥", 15],
    dosirak: ["도시락", 10],
    sandwhich: ["샌드위치", 10],
  };

  let result = "";

  for (i = 0; i < 5; i++) {
    if (store[i] == x && store[i] == y) {
      result = "값이 일치합니다";
      break;
    } else if (store[i] == x && store[i] != y) {
      result = "값이 일치하지 않습니다";
      break;
    } else store[i] != x && store[i] != y;
    result = "바사삭치킨";
    break;
  }
  return console.log(result);
}

answer("바나나우유", 10); // 바사삭치킨이 나옴
// 객체로 선언해서 아마 잘 못 읽을 것 같다고 지호님이 말해주셨다
// 내일 다시 도전.!

console.clear();

function answer(a, b) {
  let name = ["야채곱창", "바나나우유", "삼각김밥", "도시락", "샌드위치"];
  let num = [5, 10, 15, 10, 10];

  let result = [];
  for (i = 0; i < 5; i++) {
    if (name[i] == a && num[i] == b) {
      result = "값이 일치합니다";
      break;
    } else if (name[i] == a && num[i] != b) {
      result = "값이 일치하지 않습니다";
      break;
    } else if (name[i] != a && num[i] != b) {
      result = "바사삭치킨";
    }
  }
  return result;
}

answer("야채곱창", 10);

// 드디어 끝,, 이해는 됐는데 혼자서 할 수 있을까ㅠㅡㅜ 노력하자

// 나머지 공부 후 다시 도전..!

// 당신은 편의점에서 야간 아르바이트를 하는 학생입니다
// 당신이 일하는 시간에 편의점에 채워놓을 물건이 들어오며
// 당신은 재고의 개수와 물품이 맞는지 확인해야 합니다.
// 일의 순서는 아래와 같습니다.

// 1. 당신은 아래와 같은 전산표를 전달받습니다.
// 품목      갯수
// 야채곱창    5
// 바나나우유  10
// 삼각김밥    15
// 도시락      10
// 샌드위치    10

// 2. 당신은 물품을 세어본 후 해당 제품이 표의 갯수와 같은지 확인해야 합니다. -----------------------------------------------------------
// -----------------------------------------------------------

// 최종목표
// 1. 물품명과 갯수를 파라미터로 전달받는 함수를 만듭니다.
//  함수의 이름은 마음대로 하셔도 괜찮습니다.

// 2. 만약 표의 값과 갯수가 일치하지 않는다면
//  “전산표와 일치하지 않습니다”를 로그 합니다
//  같다면
//  “전사표와 일치합니다“를 로그 합니다.

//  3. 전산표에 없는 물건이라면 확인을 위해
//  해당 물건의 이름을 콘솔에 로그 합니다.
//  ex) 함수명(물품명, 갯수);

//  결과값
// ”전산표와 일치합니다.“ (일치)
// ”전산표와 일치하지 않습니다.“ (불일치)
// ”바사삭치킨“ (품목 없음)

// for문 안에 if문 사용해서 일치,불일치,품목없음 만들기
// 키와 키값을 사용하여 만들어 보ㅏ도 될듯.!
const menu = {
  야채곱창: 5,
  바나나우유: 10,
  삼각김밥: 15,
  도시락: 10,
  샌드위치: 10,
  length: 5,
};

function 재고(a, b) {
  const product = Object.keys(menu);
  const count = Object.values(menu);

  console.log(product);
  console.log(count);

  let answer = "";

  for (i = 0; i < product.length; i++) {
    if (product[i] == a && count[i] == b) {
      answer = "전산표와 일치합니다";
      return answer;
    } else if (product[i] == a && count[i] != b) {
      answer = "전산표와 일치하지 않습니다";
      return answer;
    }
  }
  return "품목 없음";
}

console.log(재고("샌드위치", 11));
