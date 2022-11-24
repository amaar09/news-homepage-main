const navbar = document.querySelector(".navbar")
const popUp = document.querySelector(".popUp")
const navChildElement = navbar.childNodes;

navChildElement.forEach(child => {
    child.addEventListener("click", function () {
        console.log("menu btn clicked", child)

        popUp.style.display = "block";
        popUp.style.width = "50%";
        popUp.classList.add("transform-active")

        popUp.innerHTML =
            `<div>
            <img class="closeBtnImage" src="/assets/images/icon-menu-close.svg" alt="">
                <ul>
                    <li>Home</li>
                    <li>New</li>
                    <li>Popular</li>
                    <li>Trending</li>
                    <li>Categories</li>
                </ul>
            </div>`
        const closeBtnImage = document.querySelector(".closeBtnImage")
        closeBtnImage.addEventListener("click", () => {
            popUp.style.display = "none";

            popUp.style.width = "0%";
            popUp.classList.remove("transform-active")

            closeBtnImage.style.display = "none";
        })
    })
})

window.addEventListener("resize", function () {
    if (window.matchMedia("(max-width:999px)").matches) {
        console.log("Screen width is at least 999px")
        popUp.style.display = "none";

    } else {
        // console.log("Screen less than 500px")
    }
})