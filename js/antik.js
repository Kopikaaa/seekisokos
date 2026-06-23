
const antikItems = [
    {
        name: "Korabeli bankjegy",
        image: "img/antik/570.png",
        price: 54259
    },
    {
        name: "Korabeli érme",
        image: "img/antik/571.png",
        price: 61357
    },
    {
        name: "SeeWelry Nyaklánc",
        image: "img/antik/517.png",
        price: 51641
    },
    {
        name: "SeeWelry Karkötő",
        image: "img/antik/518.png",
        price: 48557
    },
    {
        name: "Arany óra",
        image: "img/antik/499.png",
        price: 33481
    },
    {
        name: "Arany gyűrű",
        image: "img/antik/501.png",
        price: 29656
    },
    {
        name: "Arany kereszt",
        image: "img/antik/504.png",
        price: 20692
    },
    {
        name: "Fehérarany zsebóra",
        image: "img/antik/506.png",
        price: 18387
    },
    {
        name: "Ezüst villa",
        image: "img/antik/502.png",
        price: 18214
    },
    {
        name: "Ezüst érmék",
        image: "img/antik/505.png",
        price: 11745
    },
    {
        name: "Katonai kitüntetés",
        image: "img/antik/492.png",
        price: 12785
    },
    {
        name: "Antik lándzsahegy",
        image: "img/antik/503.png",
        price: 10073
    },
    {
        name: "Antik írógép",
        image: "img/antik/500.png",
        price: 10341
    },
    {
        name: "Ezüst gyűrű",
        image: "img/antik/528.png",
        price: 10341
    },
    {
        name: "Arany nyaklánc",
        image: "img/antik/517.png",
        price: 14796
    },
    {
        name: "Ősi amulett",
        image: "img/antik/531.png",
        price: 41290
    },

{
    name: '<span style="color:#ff8c00">[Új]</span> Réz gyertyatartó',
    image: "img/antik/589.png",
    price: 18450
},
{
    name: '<span style="color:#ff8c00">[Új]</span> Antik monokli',
    image: "img/antik/582.png",
    price: 22100
},
{
    name: '<span style="color:#ff8c00">[Új]</span> Kovácsolt sarkantyú',
    image: "img/antik/588.png",
    price: 16800
},
{
    name: '<span style="color:#ff8c00">[Új]</span> Bronz szobrocska',
    image: "img/antik/585.png",
    price: 39600
},
{
    name: '<span style="color:#ff8c00">[Új]</span> Hajóskapitányi szextáns',
    image: "img/antik/587.png",
    price: 58750
},
{
    name: '<span style="color:#ff8c00">[Új]</span> Antik sárgaréz iránytű',
    image: "img/antik/583.png",
    price: 32400
},
{
    name: '<span style="color:#ff8c00">[Új]</span> Antik díszes zsebkés',
    image: "img/antik/581.png",
    price: 24750
},
{
    name: '<span style="color:#ff8c00">[Új]</span> Viktoriánus pecsétnyomó',
    image: "img/antik/590.png",
    price: 27900
},
{
    name: '<span style="color:#ff8c00">[Új]</span> Aranyozott tubákos szelence',
    image: "img/antik/584.png",
    price: 47250
},
{
    name: '<span style="color:#ff8c00">[Új]</span> Ezüst tubákos szelence',
    image: "img/antik/586.png",
    price: 28400
}

];

document.addEventListener("DOMContentLoaded", () => {

    const page = document.getElementById("antik-page");

    if (!page) return;

    page.innerHTML = `
        <div class="info-card">



            <div class="antik-grid" id="antikGrid"></div>

            <div style="
                margin-top:25px;
                border-top:1px solid rgba(255,255,255,.08);
                padding-top:20px;
            ">

                <div style="margin-bottom:15px;">
                    <label>Százalék:</label>

                    <input
                        type="number"
                        id="antikPercent"
                        value="100"
                        min="0"
                        max="100"
                        style="
                            width:90px;
                            margin-left:10px;
                            background:#11161d;
                            color:white;
                            border:1px solid rgba(255,255,255,.08);
                            border-radius:10px;
                            padding:8px;
                        "
                    > %
                </div>

                <div id="antikSummary">

                    <div>
                        Darabok:
                        <span style="color:#5fda8b;font-weight:600;">
                            0 db
                        </span>
                    </div>

                    <div style="margin-top:8px;">
                        Összérték:
                        <span style="color:#5fda8b;font-weight:700;">
                            0 $
                        </span>
                    </div>

                </div>

            </div>

        </div>
    `;

    const grid = document.getElementById("antikGrid");

    antikItems.forEach((item, index) => {

        grid.innerHTML += `
            <div class="antik-item">

                <img
                    src="${item.image}"
                    class="antik-image"
                >

                <div class="antik-name">
                    ${item.name}
                </div>

                <div class="antik-price">
                    ${item.price.toLocaleString("hu-HU")} $
                </div>

                <input
                    type="number"
                    min="0"
                    value="0"
                    class="antik-input"
                    data-index="${index}"
                >

            </div>
        `;
    });

    const percentInput =
        document.getElementById("antikPercent");

    function updateSummary() {

        let totalItems = 0;
        let totalMoney = 0;

        const percent =
            Number(percentInput.value) || 0;

        document
            .querySelectorAll(".antik-input")
            .forEach(input => {

                const amount =
                    Number(input.value) || 0;

                const item =
                    antikItems[input.dataset.index];

                totalItems += amount;

                totalMoney +=
                    amount * item.price;
            });

        totalMoney =
            totalMoney * (percent / 100);

        document.getElementById(
            "antikSummary"
        ).innerHTML = `
            <div>
                Darabok:
                <span style="
                    color:#5fda8b;
                    font-weight:600;
                ">
                    ${totalItems.toLocaleString("hu-HU")} db
                </span>
            </div>

            <div style="margin-top:8px;">
                Összérték:
                <span style="
                    color:#5fda8b;
                    font-weight:700;
                ">
                    ${Math.round(totalMoney)
                        .toLocaleString("hu-HU")} $
                </span>
            </div>
        `;
    }

    document
        .querySelectorAll(".antik-input")
        .forEach(input => {

            input.addEventListener(
                "input",
                updateSummary
            );
        });

    percentInput.addEventListener(
        "input",
        updateSummary
    );
});
