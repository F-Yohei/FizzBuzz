const button = document.getElementById("output");
const fizzbuzzList = document.getElementById("fizzbuzzList");

const listAdd = (a) => {
  const li = document.createElement("li");
  li.innerHTML = a;
  fizzbuzzList.appendChild(li);
};

button.addEventListener("click", () => {
  const fizzNum = document.getElementById("fizzNum").value;
  const buzzNum = document.getElementById("buzzNum").value;

  if (fizzNum > 0 && buzzNum > 0) {
    for (i = 1; i < 100; i++) {
      if (i % fizzNum === 0 && i % buzzNum === 0) {
        listAdd("FizzBuzz" + i);
      } else if (i % fizzNum === 0) {
        listAdd("Fizz" + i);
      } else if (i % buzzNum === 0) {
        listAdd("Buzz" + i);
      }
    }
  } else if (fizzNum == "" || buzzNum == "") {
    listAdd("整数値を入力してください");
  } else if (typeof fizzNum === "string" || typeof buzzNum === "string") {
    listAdd("整数値を入力してください");
  } else if (fizzNum % 2 != 0 || buzzNum % 2 != 0) {
    listAdd("整数値を入力してください");
  }
});
