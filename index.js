"use strict";
// Question # 1
// Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.
function fetchGreeting() {
    setTimeout(function () {
        console.log("hello world I am javeria rehman");
    }, 2000);
}
fetchGreeting();
// Question # 2
// Write a f+mopmounction simulateTask that simulates a task by logging "Task started",
// waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.
function simulateTask() {
    console.log("task started");
    setTimeout(() => console.log("task completed"), 1000);
}
simulateTask();
// Question # 3
// Write a function fetchData that returns a Promise which resolves with the string
// "Data fetched successfully!" after a delay of 1 second.
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            return resolve("Data fetched successfully!");
        }, 1000);
    });
}
fetchData().then((message) => {
    console.log(message);
});
// Question # 4
// Write a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// delay of 1 second. Handle the rejection using .catch
function fetchWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const randomNumber = Math.floor(Math.random() * 5 + 1);
            if (randomNumber < 1) {
                resolve("Data fetched successfully!");
            }
            else
                (reject("Data fetch failed!"));
        }, 1000);
    });
}
fetchWithError().then((value) => { console.log(value); }).catch((error) => { console.log(error); });
