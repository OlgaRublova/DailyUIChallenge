const btns = document.querySelectorAll(".key");
const screen = document.querySelector(".screen");
const equalBtn = document.querySelector(".key--even");
const clearBtn = document.querySelector(".all-clear");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let number = btns[i].getAttribute("value");
        screen.value += number
    })
}
equalBtn.addEventListener("click", function () {
        if (screen.value === "") {
            alert("Input is empty");
        } else {
            // let value = eval(screen.value);
            // screen.value = value;

            screen.value = eval(screen.value);
        }
    }
);

clearBtn.addEventListener("click", function () {
    screen.value = "";
});
