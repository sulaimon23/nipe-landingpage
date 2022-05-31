window.addEventListener("load", function () {
    document
        .querySelector("#showMenu")
        .addEventListener("click", function (event) {
            document.querySelector("#mobileNav").classList.remove("hidden");
        });

    document.querySelectorAll(".hideMenu").forEach((toggle) => {
        toggle.addEventListener("click", function (event) {
            document.querySelector("#mobileNav").classList.add("hidden");
        });
    });

    document.querySelectorAll("[toggleElement]").forEach((toggle) => {
        toggle.addEventListener("click", function (event) {
            const answerElement = toggle.querySelector("[answer]");
            const caretElement = toggle.querySelector("img");
            if (answerElement.classList.contains("hidden")) {
                answerElement.classList.remove("hidden");
                caretElement.classList.add("rotate-90");
            } else {
                answerElement.classList.add("hidden");
                caretElement.classList.remove("rotate-90");
            }
        });
    });
});