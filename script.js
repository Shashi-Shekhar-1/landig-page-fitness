let heading=document.querySelector(".heading-container");
heading.addEventListener("click",function(){
  alert(" Not Added yet!!")
})

const question = document.querySelector(".question");

question.addEventListener("click", () => {
    const answer = document.querySelector(".answer");
    const arrow = document.querySelector(".arrow");

    answer.style.display =
        answer.style.display === "block" ? "none" : "block";

    arrow.classList.toggle("rotate");
});







