document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       МОБИЛЬНОЕ МЕНЮ
    ===================================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navigation =
        document.querySelector(".navigation") ||
        document.querySelector(".main-nav");

    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", () => {

            const isOpen = navigation.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen ? "Закрыть меню" : "Открыть меню"
            );

        });

    }


    /* =====================================================
       ВЫПАДАЮЩЕЕ МЕНЮ НА МОБИЛЬНЫХ
    ===================================================== */

    const dropdown =
        document.querySelector(".nav-dropdown") ||
        document.querySelector(".navigation__dropdown") ||
        document.querySelector(".dropdown");

    if (dropdown) {

        const dropdownLink =
            dropdown.querySelector(":scope > a") ||
            dropdown.querySelector(".dropdown-link");

        if (dropdownLink) {

            dropdownLink.addEventListener("click", (event) => {

                if (window.innerWidth <= 768) {

                    event.preventDefault();

                    dropdown.classList.toggle("active");

                }

            });

        }

    }


    /* =====================================================
       ЗАКРЫТИЕ МЕНЮ ПРИ ПЕРЕХОДЕ ПО ССЫЛКЕ
    ===================================================== */

    if (navigation) {

        const navigationLinks =
            navigation.querySelectorAll("a");

        navigationLinks.forEach((link) => {

            link.addEventListener("click", () => {

                /*
                 * Не закрываем меню при клике
                 * на кнопку раскрытия услуг.
                 */

                if (
                    window.innerWidth <= 768 &&
                    !link.closest(".nav-dropdown") &&
                    !link.closest(".navigation__dropdown") &&
                    !link.closest(".dropdown")
                ) {

                    navigation.classList.remove("active");

                    if (menuToggle) {
                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                        menuToggle.setAttribute(
                            "aria-label",
                            "Открыть меню"
                        );
                    }

                }

            });

        });

    }

});