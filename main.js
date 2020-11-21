const button = document.getElementById("output");

button.addEventListener("click", () => {
  let fizzNum = document.getElementById("fizzNum").value * 2;
  let buzzNum = document.getElementById("buzzNum").value * 2;

  if (fizzNum % 2 === 0) {
    console.log("fizz");
  } else if (buzzNum % 2 === 0) {
    console.log("buzz");
  }
});
