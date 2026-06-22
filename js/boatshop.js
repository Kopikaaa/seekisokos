const boats = [
    {
        logo: "img/brands/admin.png",
        name: "Squalo",
        money: 700000,
        pp: 30000,
        limit: "1/1",
        type: "Luxus motorcsónak"
    },
    {
        logo: "img/brands/admin.png",
        name: "Speeder",
        money: 500000,
        pp: 17000,
        limit: "0/8",
        type: "Motorcsónak"
    },
    {
        logo: "img/brands/admin.png",
        name: "Reefer",
        money: 150000,
        pp: 5000,
        limit: "0/8",
        type: "Halászhajó"
    },
    {
        logo: "img/brands/admin.png",
        name: "Dinghy",
        money: 150000,
        pp: 10000,
        limit: "0/8",
        type: "Gumicsónak"
    },
    {
        logo: "img/brands/admin.png",
        name: "Marquis",
        money: 700000,
        pp: 35000,
        limit: "1/10",
        type: "Vitorlás"
    },
    {
        logo: "img/brands/admin.png",
        name: "Tugboat",
        money: 700000,
        pp: 10000,
        limit: "2/20",
        type: "Vontatóhajó"
    }
];

document.addEventListener("DOMContentLoaded", () => {

    const page = document.getElementById("boatshop-page");

    if (!page) return;

    page.innerHTML = `
        <div class="module-header">

        </div>

        <div class="vehicle-wrapper">

            <input
                type="text"
                id="boatSearch"
                class="vehicle-search"
                placeholder="Hajó keresése..."
            >

            <table class="vehicle-table">

                <thead>
                    <tr>
                        <th>#</th>
                        <th>LOGÓ</th>
                        <th>Név</th>
                        <th>Típus</th>
                        <th>Ár</th>
                        <th>PP</th>
                        
                    </tr>
                </thead>

                <tbody id="boatTableBody"></tbody>

            </table>

        </div>
    `;

    const tbody = document.getElementById("boatTableBody");

    function render(list) {

        tbody.innerHTML = "";

        list.forEach((boat, index) => {

            tbody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>

                    <td>
                        <img
                            src="${boat.logo}"
                            class="brand-logo"
                            alt="${boat.name}"
                        >
                    </td>

                    <td>
                        <strong>${boat.name}</strong>
                    </td>

                    <td>${boat.type}</td>

                    <td class="price-money">
                        ${boat.money.toLocaleString("hu-HU")} $
                    </td>

                    <td class="price-pp">
                        ${boat.pp.toLocaleString("hu-HU")} PP
                    </td>

                
                </tr>
            `;
        });
    }

    render(boats);

    document
        .getElementById("boatSearch")
        .addEventListener("input", function() {

            const value = this.value.toLowerCase();

            const filtered = boats.filter(boat =>
                boat.name.toLowerCase().includes(value) ||
                boat.type.toLowerCase().includes(value)
            );

            render(filtered);
        });

});