const button = document.getElementById("output");

button.addEventListener("click", () => {
  const fizzNum = document.getElementById("fizzNum").value;
  const buzzNum = document.getElementById("buzzNum").value;
  const fizzbuzzList = document.getElementById("fizzbuzzList");

  for (i = fizzNum, j = buzzNum; i <= 100; i *= 2, j *= 2) {
    const fizzli = document.createElement("li");
    fizzli.innerHTML = "Fizz" + i;
    fizzbuzzList.appendChild(fizzli);

    const buzzli = document.createElement("li");
    buzzli.innerHTML = "Buzz" + j;
    fizzbuzzList.appendChild(buzzli);
  }
});

if (fizzNum === "" || typeof fizzNum === "string") {
  const test = document.createElement("li");
  test.innerHTML = "整数値を入力してください";
  fizzbuzzList.appendChild(test);
} else if (buzzNum === "" || typeof buzzNum === "string") {
  const test = document.createElement("li");
  test.innerHTML = "整数値を入力してください";
  fizzbuzzList.appendChild(test);
}

//もしfizzNumとbuzzNumの値が同じだったらFizzBuzz（数字）と表示させる。
// if (i === j) {
//     fizzli.innerHTML = "FizzBuzz" + i;
//     fizzbuzzList.appendChild(fizzli);
//   }

// if (i % fizzNum === 0 && j % buzzNum === 0) {
//     const fizzli = document.createElement("li");
//     fizzbuzzList.appendChild(fizzli);
//     fizzli.innerHTML = "FizzBuzz" + i;
//   }
