const button = document.getElementById("output");
const fizzbuzzList = document.getElementById("fizzbuzzList");

const listAdd = (a) => {
  const li = document.createElement("li");
  li.innerHTML = a;
  fizzbuzzList.appendChild(li);
  console.log(li);
};

button.addEventListener("click", () => {
  const fizzNum = document.getElementById("fizzNum").value;
  const buzzNum = document.getElementById("buzzNum").value;

  //エラー判定
  //もし入力された値が空白もしくは文字列だったら
  if (fizzNum === "" || typeof fizzNum === "string") {
    //エラーメッセージを表示する
    listAdd("整数値を入力してください");
  } else if (buzzNum === "" || typeof buzzNum === "string") {
    listAdd("整数値を入力してください");
  }

  //ループ関数を使用してFizzBuzzの出力
  //iが100より小さい間ループさせる
  for (i = 1; i < 100; i++) {
    if (i % fizzNum === 0 && i % buzzNum === 0) {
      listAdd("FizzBuzz" + i);
    } else if (i % fizzNum === 0) {
      listAdd("Fizz" + i);
    } else if (i % buzzNum === 0) {
      listAdd("Buzz" + i);
    }
  }
});

// button.addEventListener("click", () => {
//   const fizzbuzzList = document.getElementById("fizzbuzzList");

//   for (i = fizzNum, j = buzzNum; i <= 100; i *= 2, j *= 2) {
//     const fizzli = document.createElement("li");
//     fizzli.innerHTML = "Fizz" + i;
//     fizzbuzzList.appendChild(fizzli);

//     const buzzli = document.createElement("li");
//     buzzli.innerHTML = "Buzz" + j;
//     fizzbuzzList.appendChild(buzzli);
//   }
// });

// if (fizzNum === "" || typeof fizzNum === "string") {
//   const test = document.createElement("li");
//   test.innerHTML = "整数値を入力してください";
//   fizzbuzzList.appendChild(test);
// } else if (buzzNum === "" || typeof buzzNum === "string") {
//   const test = document.createElement("li");
//   test.innerHTML = "整数値を入力してください";
//   fizzbuzzList.appendChild(test);
// }

// もしfizzNumとbuzzNumの値が同じだったらFizzBuzz（数字）と表示させる。
// if (i === j) {
//     fizzli.innerHTML = "FizzBuzz" + i;
//     fizzbuzzList.appendChild(fizzli);
//   }

// if (i % fizzNum === 0 && j % buzzNum === 0) {
//     const fizzli = document.createElement("li");
//     fizzbuzzList.appendChild(fizzli);
//     fizzli.innerHTML = "FizzBuzz" + i;
//   }
