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

        crab: {
            title: "Rákászat kalkulátor",
            subtitle: ""
        },

         cmds: {
            title: "Parancsok",
            subtitle: ""
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
    pageTitle.textContent = pageInfo[pageName].title;

    if (pageSubtitle) {
        pageSubtitle.textContent = pageInfo[pageName].subtitle;
    }
}
       
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


        openPage("dashboard");
    

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
        "Használjátok egészséggel. :)"
    );

});
