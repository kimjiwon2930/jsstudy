// / 퀴즈
// 1번 문제
// 전화번호 가리기
// 010-1234-1234 => 010-****-1234
// 번호 input 어떤 것이든 들어가도 위와 같은 결과가 나와야한다
// 010-0000=0000 => 010-****-0000

const phnumber = [0, 1, 0, "-", 1, 2, 3, 4, "-", 5, 6, 7, 8];
const fix = phnumber.splice(4, 4, "****");
console.log(phnumber);

//-----------밑에는 강사님 답 -----------//

const num = "010-1234-1234";

function hashNum(num) {
  const hashNumber = num.split("-"); // -을 기준으로 배열로 나눔
  hashNumber[1] = "****";
  return hashNumber.join("-");
}

console.log(hashNum(num));

// 2번 문제
// 로또 번호 맞추기
// 랜덤 생성 [1~45, 1~45, 1~45, 1~45, 1~45, 1~45, 1~45]
// input [?, ?, ?, ?, ?, ?, ?]
// 변수
/* 
  보너스 제외 순서 상관없이 3개 일치 -> 4등
  보너스 제외 순서 상관없이 4개 일치 -> 4등
  보너스 제외 순서 상관없이 5개 일치 -> 3등
  보너스 포함해서 6개 일치 -> 2등
  보너스 제외 6개 일치 -> 1등
  마지막 번호 = 보너스
*/

const input = [3, 35, 6, 7, 46, 43, 2, 39];
const random = [];

function randomnum() {
  for (i = 0; i < input.length; i++) {
    const lotto = random.push(Math.floor(Math.random() * 45) + 1);
  }
}
console.log(random);

//안됌 ㅠㅡㅜ]\

const userNumbers = genertaedUserNumber();
const winningNumbers = [6, 18, 28, 30, 32, 38, 15];

function genertaedUserNumber() {
  //   const numbers = Array(7)
  //     .fill()
  //     .map(() => Math.floor(Math.random() * 45 + 1));
  // 중복번호 --> 예외상황
  // 중복 번호를 제거할 수 있는 방법은 무엇이 있을까? --> 구글링 해보자
  // 배열 내 중복된 요소를 제거하는 방법 --> 재사용

  const lotto = new Set();
  //해쉬 테이블로 검색 및 추가가 굉장히 빠르고 중복된 데이터의 저장을 허용하지 않습니다.

  //   for (let i = 0; lotto.size <= 6; i++) {
  //     const randomNumber = Math.floor(Math.random() * 45) + 1;
  //     lotto.add(randomNumber)
  //   }

  //요소의 길이(반복횟수)가 명확하지 않기 때문에 반복문 사용
  while (lotto.size <= 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    lotto.add(randomNumber);
  }
  //set ->  유사배열객체  -> Array.from
  return Array.from(lotto);
}
console.log(userNumbers);

const lottery = (numberArray) => {
  //내가 작성한 로또번호와 실제 당첨 로또 번호를 비교해야하는데
  // 보너스 , 실제 당첨번호, 보너스를 맞췄는지 비교할 flag, 맞춘갯수

  let rank = "미당첨";
  let winningCoumt = 0;
  let bonusNum = winningNumbers.pop();
  let bonusflag = false;
  //bonusNum 변수에는 보너스 번호가 담기고
  // 실제 당첨번호는 보너스를 제외한 번호들의 집함

  //실제 당첨번호에서 내가 몇개 당첨했는지
  //내 당첨 번호를 순회하여 내가 뽑은 번호가 실제 당첨 번호에 포함되어 있는지 확인
  // 배열을 순회하여 해당 배열 내 요소가 다른 배열 내 요소에 포함되어 있는지 확인

  for (let num of numberArray) {
    if (winningNumbers.includes(num)) {
      winningCoumt++;
    }
  }
  if (numberArray.includes(bonusNum)) {
    bonusflag = true;
  }
  switch (winningCoumt) {
    case 6:
      rank = 1;
      break;
    case 5:
      if (bonusflag) {
        rank = 2;
      } else {
        rank = 3;
      }
      break;
    case 4:
      rank = 4;
      break;
    case 3:
      rank = 5;
      break;
  }
  return rank;
};

console.log(lottery(userNumbers));
