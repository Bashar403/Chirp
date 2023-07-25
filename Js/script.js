var trigger = document.getElementById('nav-trigger');
var nav = document.getElementById('moblie-nav');

trigger.addEventListener('click', function () {
    nav.classList.toggle('show');
});


const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {
    question.addEventListener("click", () => {
        question.nextElementSibling.classList.toggle("active");
    });
});