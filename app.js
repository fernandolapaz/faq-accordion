const accordion = document.querySelectorAll(".question")

for (question of accordion) {
    question.addEventListener("click", function () {
        this.classList.toggle("active")

        let answer = this.nextElementSibling
        if (answer.classList.contains("show")) {
            answer.classList.remove("show")
        } else {
            answer.classList.add("show")
        }

        for (question of accordion) {
            if (question != this) {
                question.classList.remove("active")
                question.nextElementSibling.classList.remove("show")
            }
        }
    })
}