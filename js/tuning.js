document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("tuning-container");
    if (!container) return;

    const tuningData = {
        performance: [
            {
                group: "Motor",
                options: [
                    { name: "Gyári", money: 0, pp: 0 },
                    { name: "Alap", money: 3000, pp: 0 },
                    { name: "Profi", money: 7500, pp: 0 },
                    { name: "Verseny", money: 12000, pp: 0 },
                    { name: "Venom", money: 0, pp: 1100 }
                ]
            },
            {
                group: "Turbo",
                options: [
                    { name: "Gyári", money: 0, pp: 0 },
                    { name: "Alap", money: 3000, pp: 0 },
                    { name: "Profi", money: 7500, pp: 0 },
                    { name: "Verseny", money: 12000, pp: 0 },
                    { name: "Venom", money: 0, pp: 1100 }
                ]
            },
            {
                group: "ECU",
                options: [
                    { name: "Gyári", money: 0, pp: 0 },
                    { name: "Alap", money: 3000, pp: 0 },
                    { name: "Profi", money: 7500, pp: 0 },
                    { name: "Verseny", money: 12000, pp: 0 },
                    { name: "Venom", money: 0, pp: 1100 }
                ]
            },
            {
                group: "Váltó",
                options: [
                    { name: "Gyári", money: 0, pp: 0 },
                    { name: "Alap", money: 3000, pp: 0 },
                    { name: "Profi", money: 7500, pp: 0 },
                    { name: "Verseny", money: 12000, pp: 0 },
                    { name: "Venom", money: 0, pp: 1100 }
                ]
            },
            {
                group: "Súlycsökkentés",
                options: [
                    { name: "Gyári", money: 0, pp: 0 },
                    { name: "Alap", money: 3000, pp: 0 },
                    { name: "Profi", money: 7500, pp: 0 },
                    { name: "Verseny", money: 12000, pp: 0 },
                    { name: "Venom", money: 0, pp: 1100 }
                ]
            },
            {
                group: "Gumi",
                options: [
                    { name: "Gyári", money: 0, pp: 0 },
                    { name: "Alap", money: 3000, pp: 0 },
                    { name: "Profi", money: 7500, pp: 0 },
                    { name: "Verseny", money: 12000, pp: 0 },
                    { name: "Venom", money: 0, pp: 1100 }
                ]
            },
            {
                group: "Felfüggesztés",
                options: [
                    { name: "Gyári", money: 0, pp: 0 },
                    { name: "Alap", money: 3000, pp: 0 },
                    { name: "Profi", money: 7500, pp: 0 },
                    { name: "Verseny", money: 12000, pp: 0 },
                    { name: "Venom", money: 0, pp: 1100 }
                ]
            },
            {
                group: "Fék",
                options: [
                    { name: "Gyári", money: 0, pp: 0 },
                    { name: "Alap", money: 3000, pp: 0 },
                    { name: "Profi", money: 7500, pp: 0 },
                    { name: "Verseny", money: 12000, pp: 0 },
                    { name: "Venom", money: 0, pp: 1100 }
                ]
            }
        ],

        optical: [

    {
        group: "Felni",
        options: [
            { name: "Gyári", money: 0, pp: 0 },
            { name: "Felni #1", money: 5000, pp: 0 },
            { name: "Felni #2", money: 5000, pp: 0 },
            { name: "Felni #3", money: 5000, pp: 0 },
            { name: "Felni #4", money: 5000, pp: 0 }
        ]
    },
    {
        group: "Fényezés",
        options: [
            { name: "Gyári", money: 0, pp: 0 },
            { name: "Szín 1", money: 2500, pp: 0 },
            { name: "Szín 2", money: 2500, pp: 0 },
            { name: "Szín 3", money: 2500, pp: 0 },
            { name: "Felni szín", money: 2500, pp: 0 }
        ]
    },
    {
        group: "Neon",
        options: [
            { name: "Nincs", money: 0, pp: 0 },
            { name: "Piros", money: 5000, pp: 0 },
            { name: "Kék", money: 5000, pp: 0 },
            { name: "Zöld", money: 5000, pp: 0 },
            { name: "Sárga", money: 5000, pp: 0 },
            { name: "Rózsaszín", money: 5000, pp: 0 },
            { name: "Fehér", money: 5000, pp: 0 }
        ]
    },
    {
        group: "Air Ride",
        options: [
            { name: "Nincs", money: 0, pp: 0 },
            { name: "Beszerelés", money: 13000, pp: 0 }
        ]
    },
    {
        group: "LSD Ajtó",
        options: [
            { name: "Nincs", money: 0, pp: 0 },
            { name: "Felszerelés", money: 0, pp: 1200 }
        ]
    },
    {
        group: "Variáns",
        options: [
            { name: "Gyári", money: 0, pp: 0 },
            { name: "Variáns 1", money: 25000, pp: 0 },
            { name: "Variáns 2", money: 25000, pp: 0 },
            { name: "Variáns 3", money: 25000, pp: 0 },
            { name: "Variáns 4", money: 25000, pp: 0 },
            { name: "Variáns 5", money: 25000, pp: 0 },
            { name: "Variáns 6", money: 25000, pp: 0 }
        ]
    }
],

        extras: [

    {
        group: "Traffiradar",
        options: [
            { name: "Nincs", money: 0, pp: 0 },
            { name: "Felszerelés", money: 0, pp: 2500 }
        ]
    },
    {
        group: "Egyedi rendszám",
        options: [
            { name: "Gyári", money: 0, pp: 0 },
            { name: "Egyedi rendszám", money: 0, pp: 2000 }
        ]
    },
    {
        group: "Offroad optika",
        options: [
            { name: "Nincs", money: 0, pp: 0 },
            { name: "Terep beállítás", money: 12500, pp: 0 },
            { name: "Murva beállítás", money: 12500, pp: 0 }
        ]
    },
    {
        group: "Önzáró differenciálmű",
        options: [
            { name: "Nincs", money: 0, pp: 0 },
            { name: "Felszerelés", money: 7500, pp: 0 }
        ]
    },
    {
        group: "Meghajtás",
        options: [
            { name: "Gyári", money: 0, pp: 0 },
            { name: "Elsőkerék", money: 7500, pp: 0 },
            { name: "Hátsókerék", money: 7500, pp: 0 },
            { name: "Összkerék", money: 10000, pp: 0 },
            { name: "Kapcsolható", money: 25000, pp: 0 }
        ]
    },
    {
        group: "Duda",
        options: [
            { name: "Gyári", money: 0, pp: 0 },
            { name: "Duda 21", money: 0, pp: 1500 },
            { name: "Duda 22", money: 0, pp: 1500 }
        ]
    },
    {
        group: "Backfire",
        options: [
            { name: "Nincs", money: 0, pp: 0 },
            { name: "Sima", money: 0, pp: 2000 },
            { name: "Egyedi(1-11)", money: 0, pp: 3000 },
            { name: "Gyors", money: 0, pp: 2500 },

        ]
    },


    {
        group: "Turbó hang",
        options: [
            { name: "Gyári", money: 0, pp: 0 },
            { name: "Van(1-10)", money: 0, pp: 1750 },

        ]
    },

    {
        group: "Nitró",
        options: [
            { name: "Nincs", money: 0, pp: 0 },
            { name: "25%", money: 15000, pp: 0 },
            { name: "50%", money: 30000, pp: 0 },
            { name: "75%", money: 45000, pp: 0 },
            { name: "100%", money: 60000, pp: 0 },

        ]
    },


    {
        group: "GPS",
        options: [
            { name: "Nincs", money: 0, pp: 0 },
            { name: "Felszerelés", money: 2500, pp: 0 }
        ]
    },
    {
        group: "Fordulókör",
        options: [
            { name: "Gyári - 20°", money: 0, pp: 0 },
            { name: "25°", money: 5000, pp: 0 },
            { name: "30°", money: 5000, pp: 0 },
            { name: "35°", money: 5000, pp: 0 },
            { name: "40°", money: 5000, pp: 0 },
            { name: "45°", money: 5000, pp: 0 },
            { name: "50°", money: 5000, pp: 0 },
            { name: "55°", money: 5000, pp: 0 },
            { name: "60°", money: 5000, pp: 0 }
        ]
    }
],  


 paintjob: [

    {
        group: "Egyedi PaintJob",
        options: [
            { name: "Nincs", money: 0, pp: 0 },
            { name: "Felszerelés", money: 0, pp: 4000 }
        ]
    },
]
    };





    let activeTab = "performance";

    container.innerHTML = `
        <div class="info-card">
            <div style="display:flex;gap:10px;margin-bottom:20px;">
                <button class="btn tab-btn active" data-tab="performance">Teljesítmény</button>
                <button class="btn tab-btn" data-tab="optical">Optikai</button>
                <button class="btn tab-btn" data-tab="extras">Extrák</button>
                <button class="btn tab-btn" data-tab="paintjob">PaintJob</button>
            </div>
<div id="tuning-fields"></div>
<div class="tuning-summary">

    <div class="summary-header">
        <h3>Összesítő</h3>
    </div>

    <div id="selected-build" class="selected-build"></div>

    <div class="summary-totals">

        <div class="summary-box money">
            <div class="summary-label">Összesen ($)</div>
            <div id="sum-money" class="summary-value">0 $</div>
        </div>

        <div class="summary-box pp">
            <div class="summary-label">Összesen (PP)</div>
            <div id="sum-pp" class="summary-value">0 PP</div>
        </div>

    </div>

</div>
    `;

    const selected = {};

    function renderTab() {

        const fields = document.getElementById("tuning-fields");
        fields.innerHTML = "";

        tuningData[activeTab].forEach(group => {

            const row = document.createElement("div");

            row.style.display = "flex";
            row.style.justifyContent = "space-between";
            row.style.alignItems = "center";
            row.style.marginBottom = "12px";

            const current = selected[group.group] || 0;

            row.innerHTML = `
                <span>${group.group}</span>
                <select class="tuning-select" data-group="${group.group}">
                    ${group.options.map((opt,index)=>`
                       <option value="${index}" ${index===current?'selected':''}>
    ${opt.name}
    ${
        opt.money > 0
        ? ` - ${opt.money.toLocaleString("hu-HU")} $`
        : opt.pp > 0
        ? ` - ${opt.pp.toLocaleString("hu-HU")} PP`
        : ""
    }
</option>
                    `).join("")}
                </select>
            `;

            fields.appendChild(row);
        });

        document.querySelectorAll(".tuning-select").forEach(select => {
            select.addEventListener("change", () => {
                selected[select.dataset.group] = Number(select.value);
                updateSummary();
            });
        });

        updateSummary();
    }

    function updateSummary() {

        let money = 0;
        let pp = 0;
        let html = "";

        Object.keys(tuningData).forEach(cat => {

            tuningData[cat].forEach(group => {

                const index = selected[group.group] || 0;
                const option = group.options[index];

                money += option.money;
                pp += option.pp;

                html += `${group.group}: ${option.name}<br>`;
            });
        });

        document.getElementById("selected-build").innerHTML = html;
        document.getElementById("sum-money").textContent = money.toLocaleString("hu-HU") + " $";
        document.getElementById("sum-pp").textContent = pp.toLocaleString("hu-HU") + " PP";
    }

    
document.querySelectorAll(".tab-btn").forEach(btn => {

    btn.addEventListener("click", () => {

        document.querySelectorAll(".tab-btn")
            .forEach(b => b.classList.remove("active"));

        btn.classList.add("active");

        activeTab = btn.dataset.tab;

        renderTab();
    });

});

    renderTab();
});