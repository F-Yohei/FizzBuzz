const button = document.getElementById("output");
const fizzbuzzList = document.getElementById("fizzbuzzList");

const listAdd = (a) => {
  const li = document.createElement("li");
  li.innerHTML = a;
  fizzbuzzList.appendChild(li);
  console.log(li);
};

button.addEventListener("click", () => {
  const fizzNum = parseInt(document.getElementById("fizzNum").value);
  const buzzNum = parseInt(document.getElementById("buzzNum").value);

  if (typeof fizzNum == "number" && typeof buzzNum == "number") {
    for (i = 1; i < 100; i++) {
      if (i % fizzNum === 0 && i % buzzNum === 0) {
        listAdd("FizzBuzz" + i);
      } else if (i % fizzNum === 0) {
        listAdd("Fizz" + i);
      } else if (i % buzzNum === 0) {
        listAdd("Buzz" + i);
      }
    }
  } else {
    listAdd("整数値を入力してください");
  }
});
