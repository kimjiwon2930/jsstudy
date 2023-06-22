// 무신사 사이트의 품목내역(?)중 백엔드에서 받아 오는 것 같은 데이터들 몇 가지만 적었습니다 !

const topwear = [
  {
    id: "MMATE407",
    name: " 릴렉스 핏 크루 넥 반팔 티셔츠 2팩",
    brand: "MUSINSA_STANDARD",
    gender: "men",
    price: 22190,
  },
  {
    id: "CO2302STE1BK",
    name: "에센셜 쿨 코튼 2-PACK 티셔츠 블랙",
    brand: "COVERNAT",
    gender: "unisex",
    price: 49000,
  },
  {
    id: "TRTOASURS12UC5",
    name: "미시간 울버린 피그먼트 반팔티 블랙 차콜",
    brand: "TRAVEL",
    gender: "men",
    price: 39000,
  },
  {
    id: "1MG23STS102",
    name: "W CLASSIC LOGO TEE white",
    brand: "MARITHE FRANCOIS GIRBAUD",
    gender: "women",
    price: 45000,
  },
  {
    id: "MG2DMMT505APK",
    name: " [무료반품] DON’T PANIC PIGMENT TEE PINK(MG2DMMT505A)",
    brand: "MAHAGRID",
    gender: "unisex",
    price: 49000,
  },
];

// 1.두번째 아이템 삭제(filter 사용)
const delectitem = topwear.filter((item) => item.id != "CO2302STE1BK");
console.log(delectitem);

// [
//     {
//       id: 'MMATE407',
//       name: ' 릴렉스 핏 크루 넥 반팔 티셔츠 2팩',
//       brand: 'MUSINSA_STANDARD',
//       gender: 'men',
//       price: 22190
//     },
//     {
//       id: 'TRTOASURS12UC5',
//       name: '미시간 울버린 피그먼트 반팔티 블랙 차콜',
//       brand: 'TRAVEL',
//       gender: 'men',
//       price: 39000
//     },
//     {
//       id: '1MG23STS102',
//       name: 'W CLASSIC LOGO TEE white',
//       brand: 'MARITHE FRANCOIS GIRBAUD',
//       gender: 'women',
//       price: 45000
//     },
//     {
//       id: 'MG2DMMT505APK',
//       name: ' [무료반품] DON’T PANIC PIGMENT TEE PINK(MG2DMMT505A)',
//       brand: 'MAHAGRID',
//       gender: 'unisex',
//       price: 49000
//     }
//   ]

console.log("-------------------2번째 예제-----------");

// 2.40000원이상 아이템 조회..?(find 사용)

const topwearfind = delectitem.find((item) => item.price > 40000);
console.log(topwearfind);

// {
//     id: '1MG23STS102',
//     name: 'W CLASSIC LOGO TEE white',
//     brand: 'MARITHE FRANCOIS GIRBAUD',
//     gender: 'women',
//     price: 45000
//   }

// 흐음 왜 이거 밖에 안나오지ㅠㅠ find는 하나 밖에 안나오는건가,.?

console.log("-----------------3번째 예제------------");
// 3.모든 상품 10000원씩 올리기(map사용)

const priceuptopwear = delectitem.map((item) => item.price + 10000);
console.log(priceuptopwear);
// [ 32190, 49000, 55000, 59000 ] 이렇게만 나오넹..!

// 적용시키는건 내일 도전 ..!
