const student = {
    name: "abc",
    email: "abc@gmail.com",
    school: "Build School",
    habits: ["切版", "切版", "切版"]
};

const photoList = [
    "https://fakeimg.pl/300x200/200?text=1",
    "https://fakeimg.pl/300x200/300?text=2",
    "https://fakeimg.pl/300x200/400?text=3"
];

document.querySelector('.main p:nth-of-type(1)').innerText += student["name"];
document.querySelector('.main p:nth-of-type(2)').innerText += student["email"];
document.querySelector('.main p:nth-of-type(3)').innerText += student["school"];


document.querySelector('.main p:nth-of-type(4)').innerText += student.habits.join(', ');

photoList.forEach((photo) => {
    document.querySelector('.footer').innerHTML += `<img src="${photo}" class="footer-image">`;
});

