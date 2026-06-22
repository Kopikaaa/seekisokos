document.addEventListener("DOMContentLoaded", () => {

    const menuButtons = document.querySelectorAll(".menu-btn");
    const pages = document.querySelectorAll(".page");
    const dashboardCards = document.querySelectorAll(".dashboard-card");

    const pageTitle = document.getElementById("page-title");
    const pageSubtitle = document.getElementById("page-subtitle");

    const pageInfo = {
        dashboard: {
            title: "Gyorselérés",
            subtitle: ""
        },

        tuning: {
            title: "Tuning Kalkulátor",

        },

        "carshop": {
            title: "Megvásárolható autók",
            subtitle: ""
        },

        boatshop: {
            title: "Megvásárolható hajók",
            subtitle: ""
        },


        antik: {
            title: "Antik kalkulátor",
            subtitle: "Add meg a darabszámot."
        },

        pp: {
            title: "PP Árak",
            subtitle: "Prémium Pont információk"
        },

        property: {
            title: "Ingatlanok",
            subtitle: "Házak és bizniszek"
        },

        cmds: {
            title: "Parancsok",
            
        },

        faq: {
            title: "GYIK",
            subtitle: "Gyakori kérdések"
        },

        links: {
            title: "Hasznos Linkek",
            subtitle: "Külső hivatkozások"
        }
    };

    function openPage(pageName) {

        pages.forEach(page => {
            page.classList.remove("active");
        });

        const targetPage =
            document.getElementById(`${pageName}-page`);

        if (targetPage) {
            targetPage.classList.add("active");
        }

        menuButtons.forEach(btn => {
            btn.classList.remove("active");

            if (btn.dataset.page === pageName) {
                btn.classList.add("active");
            }
        });

        if (pageInfo[pageName]) {

            pageTitle.textContent =
                pageInfo[pageName].title;

            pageSubtitle.textContent =
                pageInfo[pageName].subtitle;
        }

        localStorage.setItem(
            "seemta-last-page",
            pageName
        );
    }

    menuButtons.forEach(button => {

        button.addEventListener("click", () => {

            const page =
                button.dataset.page;

            openPage(page);
        });

    });

    dashboardCards.forEach(card => {

        card.addEventListener("click", () => {

            const page =
                card.dataset.pageOpen;

            openPage(page);
        });

    });

    const lastPage =
        localStorage.getItem(
            "seemta-last-page"
        );

    if (
        lastPage &&
        document.getElementById(
            `${lastPage}-page`
        )
    ) {
        openPage(lastPage);
    } else {
        openPage("dashboard");
    }

    const searchInput =
        document.getElementById(
            "searchInput"
        );

    searchInput.addEventListener(
        "input",
        function () {

            const search =
                this.value.toLowerCase();

            menuButtons.forEach(btn => {

                const text =
                    btn.textContent
                    .toLowerCase();

                if (
                    text.includes(search)
                ) {
                    btn.style.display =
                        "block";
                } else {
                    btn.style.display =
                        "none";
                }

            });

        }
    );

    console.log(
        "✅ SeeMTA V2 Kisokos betöltve"
    );

});
