const gcdButton = document.getElementById("GCD");
const lcmButton = document.getElementById("LCM");
const pnButton = document.getElementById("PN");
const congruenceButton = document.getElementById("congruence");

const result = document.getElementById("result");

const getGreatestCommonDivisior = (numberA, numberB) => {
    const dividersArrA = getDividers(numberA);
    const dividersArrB = getDividers(numberB);

    let greatestComminDivisior = 0;

    for (let i = 0; i < dividersArrA.length; i++) {
        for (let j = 0; j < dividersArrB.length; j++) {
            if (dividersArrA[i] === dividersArrB[j]) {
                greatestComminDivisior = dividersArrA[i];
            }
        }
    }

    return greatestComminDivisior;
};

const getDividers = (num) => {
    const dividerArr = [];

    for (let i = 0; i <= num; i++) {
        if (num % i === 0) {
            dividerArr.push(i);
        }
    }

    return dividerArr;
};

const getLowestCommonMultiple = (numberA, numberB) => {
    return (numberA * numberB) / getGreatestCommonDivisior(numberA, numberB);
};

const getPrimeNumbers = (num) => {
    const primeNumbers = [];
    primeCycle: for (let i = 2; i <= num; i++) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) continue primeCycle;
        }
        primeNumbers.push(i);
    }
    return primeNumbers;
};

const getCongruence = (numA, numB) => {
    const congruenceNumbers = [];
    for (let i = 2; i < 10; i++) {
        if ((numA - numB) % i === 0) congruenceNumbers.push(i);
    }
    return congruenceNumbers;
};

gcdButton.addEventListener("click", () => {
    const inputA = document.getElementById("a").value;
    const inputB = document.getElementById("b").value;

    result.innerHTML = "Найбільший спільний дільник: " + getGreatestCommonDivisior(inputA, inputB);
});

lcmButton.addEventListener("click", () => {
    const inputA = document.getElementById("a").value;
    const inputB = document.getElementById("b").value;

    result.innerHTML = "Найменше спільне кратне: " + getLowestCommonMultiple(inputA, inputB);
});

pnButton.addEventListener("click", () => {
    const inputC = document.getElementById("c").value;

    result.innerHTML = "Ланцюг простих чисел: " + getPrimeNumbers(inputC);
});

congruenceButton.addEventListener("click", () => {
    const inputA = document.getElementById("a").value;
    const inputB = document.getElementById("b").value;

    result.innerHTML = "Модулі конгруенції: " + getCongruence(inputA, inputB);
});
