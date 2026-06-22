document.addEventListener("DOMContentLoaded", () => {

    const page = document.getElementById("cmds-page");
    if (!page) return;

    const categories = [
        {
            title: "Általános parancsok",
            commands: [
                "/me", "/melow", "/do", "/dolow", "/ame", "/b",
                "/togtips", "/toghud", "/headmove", "/togsnow",
                "/togspeedo", "/clearooc", "/togaj",
                "/getskin", "/park", "/placedo",
                "/protect", "/removeprotect",
                "/buy", "/id", "/szint",
                "/lvl", "/description",
                "/cuccaim", "/bind", "/unbind",
                "/airride", "/backfire",
                "/drivetype", "/halalido",
                "/gate", "/bortonido",
                "/motozas", "/paytaxi",
                "/pay", "/pm", "/admins",
                "/nearbyvehicles",
                "/getpos", "/fp",
                "/togdeathmusic"
            ]
        },

        {
            title: "Gombok",
            commands: [
                "F2 - Animpanel",
                "F3 - Frakciópanel",
                "F4 - Ablak lehúzás",
                "F6 - Elakadásjelző",
                "F7 - PP Shop",
                "F8 - Konzol",
                "F10 - Rendszámok",
                "F11 - Térkép",
                "F12 - Képernyőkép",
                "HOME - Dashboard"
            ]
        },

        {
            title: "Rendőrség",
            commands: [
                "/m",
                "/d",
                "/zsakelvesz",
                "/takebag",
                "/jail",
                "/prison",
                "/prisoners",
                "/cuff",
                "/visz",
                "/backup",
                "/settraffi",
                "/hatar",
                "/toghatar",
                "/gclean",
                "/nearbyspikes",
                "/rbs",
                "/nearbyrb",
                "/mdc",
                "/togmdcmsg",
                "/sirenpanel",
                "/togsirengui",
                "/setunitstate",
                "/listcalls",
                "/delnearbyrb",
                "/togtraffi"
            ]
        },

        {
            title: "NNI",
            commands: [
                "/lenyomoz",
                "/lenyomoz ki",
                "/alnev",
                "/alnev ki"
            ]
        },

        {
            title: "Kamionos",
            commands: [
                "/scaleon",
                "/scaleremove",
                "/kr"
            ]
        },

        {
            title: "BV",
            commands: [
                "/prisondoors"
            ]
        },

        {
            title: "SCCS",
            commands: [
                "/fixvehbug",
                "/acceptmechanic",
                "/calls_fix",
                "/calls_sccs",
                "/delsccs"
            ]
        },

        {
            title: "Taxi",
            commands: [
                "/accepttaxi",
                "/calls_taxi",
                "/deltaxi"
            ]
        },

        {
            title: "Katasztrófavédelem",
            commands: [
                "/acceptfd",
                "/togfires"
            ]
        },

        {
            title: "OMSZ",
            commands: [
                "/calls_omsz",
                "/acceptmedic",
                "/cancelmedic",
                "/gyogyit"
            ]
        },

        {
            title: "NAV",
            commands: [
                "/lefoglal"
            ]
        },

        {
            title: "Bandák",
            commands: [
                "/graffiti"
            ]
        }
    ];

    page.innerHTML = `
      

        <div style="margin-bottom:20px;">
            <a
                href="https://forum.seev2.hu/threads/szerveren-megtalalhato-parancsok.165/"
                target="_blank"
                class="btn"
            >
                Fórum leírás megnyitása
            </a>
        </div>

        <input
            type="text"
            id="commandSearch"
            class="vehicle-search"
            placeholder="Parancs keresése..."
            style="margin-bottom:20px;"
        >

        <div id="commandsContainer"></div>
    `;

    const container = document.getElementById("commandsContainer");

    function render(filter = "") {

        container.innerHTML = "";

        categories.forEach(category => {

            const commands = category.commands.filter(cmd =>
                cmd.toLowerCase().includes(filter.toLowerCase())
            );

            if (!commands.length) return;

            const card = document.createElement("div");

            card.className = "info-card";
            card.style.marginBottom = "20px";

            card.innerHTML = `
                <h3 style="
                    color:var(--accent);
                    margin-bottom:15px;
                ">
                    ${category.title}
                </h3>

                <div style="
                    display:grid;
                    grid-template-columns:
                    repeat(auto-fill,minmax(220px,1fr));
                    gap:10px;
                ">
                    ${commands.map(cmd => `
                        <div style="
                            background:#11161d;
                            padding:12px;
                            border-radius:10px;
                            border:1px solid rgba(255,255,255,.05);
                        ">
                            ${cmd}
                        </div>
                    `).join("")}
                </div>
            `;

            container.appendChild(card);
        });
    }

    render();

    document
        .getElementById("commandSearch")
        .addEventListener("input", e => {
            render(e.target.value);
        });

});
