document.addEventListener("DOMContentLoaded", () => {

    const page = document.getElementById("cmds-page");

    if (!page) return;

    const commandGroups = [
        {
            title: "Általános parancsok",
            commands: [
                ["/b", "OOC chat előhozás ( b betűvel is működik )."],
                ["/togtips", "Tippek kikapcsolása."],
                ["/toghud", "Teljes hud kikapcsolása."],
                ["/headmove", "Fejmozgás kikapcsolás."],
                ["/togsnow", "Hó esés kikapcsolása."],
                ["/togspeedo", "KM/H kikapcsolás."],
                ["/clearooc | /co", "OOC chat törlése."],
                ["/clearchat", "IC chat törlése."],
                ["/togaj", "Adminjail infó ki-bekapcsolása."],
                ["/getskin", "Jelenlegi kinézetedet (skin ID-t.) adja meg."],
                ["/park", "Jármű leparkolása egy adott helyre."],
                ["/protect", "Jármű levédése."],
                ["/removeprotect", "Jármű levédésének levétele"],
                ["/r", "Elsőfokú rádióba való beszélés."],
                ["/tuneradio", "Elsőfokú rádiófrekvencia beállítása."],
                ["/tuneradio2", "Másodfokú rádiófrekvencia beállítása."],
                ["/r2", "Másodfokú rádióba való beszélés"],
                ["/kr", "Kamionos rádió."],
                ["/buy", "Interior vásárlása."],
                ["/id", "Játékosok keresése."],
                ["/szint | /lvl", "Játékos szintjének lekérése"],
                ["/kiszed", "Játékos kiszedése járműből."],
                ["/cveh", "Járműved ajtaját tudod nyitni a kocsi belsejéből."],
                ["/felmond", "Jelenlegi munkád felmondása ( Városházán )."],
                ["/description", "Karakter leírásának beállítása."],
                ["/cuccaim", "Kiegészítő panel."],
                ["/bind", "Automatikus parancsot ír be helyetted a gomb lenyomásával."],
                ["/unbind", "Meglévő bindet tudsz vele törölni."],
                ["/airride", "Kocsi magassága / alacsonysága állítása."],
                ["/backfire", "Backfire ki/be kapcsolása."],
                ["/drivetype", "Kerék beállítása."],
                ["/halalido", "Mennyi ideje éledtél."],
                ["/gate", "Kapu nyitása / zárása."],
                ["/bortonido", "Mennyi időd van még a börtönből."],
                ["/motozas", "Adott játékos megmotozása ID alapján."],
                ["/paytaxi", "Taxi fuvar kifizetése."],
                ["/pay", "Pénz átadása másik játékosnak."],
                ["/pm", "Privát üzenet ( IDG | SGH és Adminok felé )."],
                ["/admins", "Jelenleg elérhető és fent lévő IDG | SGH és Adminokat jelenit meg."],
                ["/nearbyvehicles", "Közeledben lévő járműketet jelzi névvel, rendszámmal és ID-vel ellátva."],
                ["/getpos", "Jelenlegi pozíció kimutatása."],
                ["/fp", "First person mód [belső nézet]"],
                ["/togdeathmusic", "Halálzene kikapcsolása."]
            ]
        },

 {
            title: "RP parancsok",
            commands: [
                ["/me", "Látható cselekvés ( előveszi a csekk könyvet )."],
                ["/melow", "Látható cselekvés ( kisebb láthatósága van )."],
                ["/do", "Láthatatlan történés ( eltörik a lábában egy csont )."],
                ["/dolow", "Láthatatlan történés ( kisebb láthatósága van )."],
                ["/ame", "Karakter leírása ( 180 cm magas , 80 kg )."],
                ["/placedo", "Animációval nem megjeleníthető ( vér található a földön)."]
            ]
        },
        
        {
            title: "Gyorsgombok",
            commands: [
                ["F2 ", "Animpanel előhozása."],
                ["F3 ", "Frakciópanel"],
                ["F4 ", "Jármű ablak lehúzása."],
                ["F5 ", "Öv"],
                ["F6 ", "Elakadás jelző."],
                ["F7 ", "PP Shop."],
                ["F8 ", "Konzol."],
                ["F10 ", "Rendszámok megjelenítése."],
                ["F11 ", "Térkép."],
                ["F12 ", "Képernyőmentés."],
                ["Home ", "Dashboard."]
            ]
        },
        {
            title: "Rendvédelem",
            commands: [
                ["/m", "Meghapone használata."],
                ["/d", "Sürgősségi rádió használata."],
                ["/zsakelvesz | /takebag", "Játékos mellé lerakja a zsákot amit vitt."],
                ["/jail", "Játékos börtönbe tevése."],
                ["/prison", "Játékos fegyházba tevése."],
                ["/prisoners", "Játékosok megjelenítése aki fegyházba van"],
                ["/cuff", "Játékos megbilincselése."],
                ["/visz", "Játékos vezetése bilincsbe."],
                ["/backup", "Erősítés hívás."],
                ["/settraffi", "Traffipax beállítása."],
                ["/hatar", "Határ kezelése."],
                ["/toghatar", "Határon átment gépjárművek kikapcsolása."],
                ["/gclean", "Graffiti eltávolítása ( Spray kanna szükséges )."],
                ["/nearbyspikes", "Közeledbe lévő szögesdrót tulajdonosa neve és felvétel fül."],
                ["/rbs", "Gépjárműből kivehető útzárak előhozása."],
                ["/nearbyrb", "Közeledbe lévő útzárak tulajdonosának neve és felvétel fül."],
                ["/mdc", "Járőr bekapcsolása MDC-s gépjárműbe."],
                ["/jelvenyadas", "Jelvényadás."],
                ["/jelvenyelvetel", "Jelvény elvétele."],
                ["/togmdcmsg", "MDC jelzések kikapcsolás."],
                ["/sirenpanel [1-6]", "Szirénapanel kezelése."],
                ["/togsirengui", "Szirénapanel eltüntetése."],
                ["/setunitstate [0-3]", "Egység státusz/állapot beállítása"],
                ["/listcalls", "Aktív hívások/bejelentések listázása."],
                ["/delnearbyrb", "Játékos közelében lerakott saját RBS-ek törlése."],
                ["/togtraffi", "Játékos álltal használt traffipax értesítéseinek kikapcsolása."]
            ]
        },
        {
            title: "NAV egyéb parancsok",
            commands: [
                ["/scaleon", "Kamion rakomány mérő lerakása."],
                ["/scaleremove", "Kaminos súlymérő felszedése."]
            ]
        },
        {
            title: "NNI egyéb parancsok",
            commands: [
                ["/lenyomoz", "Telefonszám lenyomozása."],
                ["/lenyomoz ki", "Bemért telefonszám lenyomozásának kikapcsolása."],
                ["/alnev", "Álnév bekapcsolása."],
                ["/alnev ki", "Álnév kikapcsolása."]
            ]
        },
        {
            title: "BV egyéb parancsok",
            commands: [
                ["/prisondoors", "Fegyház cella ajtók nyitása/zárása"]
            ]
        },
        {
            title: "SCCS",
            commands: [
                ["/fixvehbug", "Buggos elem esetén használható."],
                ["/acceptmechanic", "Hívás fogásása."],
                ["/calls_fix", "Összes hívás előhozása."],
                ["/calls_sccs", "Összes hívás előhozása."],
                ["/delsccs", "Aktív hívás lemondása."]
            ]
        },
        {
            title: "Taxi",
            commands: [
                ["/accepttaxi", "Hívás elfogadása."],
                ["/calls_taxi", "Hívások előhozása."],
                ["/deltaxi", "Hívás lemondása."]
            ]
        },
        {
            title: "Tűzoltóság",
            commands: [
                ["/m", "Meghapone használata."],
                ["/d", "Sürgősségi rádió használata."],
                ["/rbs", "Gépjárműből kivehető útzárak előhozása."],
                ["/nearbyrb", "Közeledbe lévő útzárak tulajdonosának neve és felvétel fül."],
                ["/acceptfd", "Hívás elfogadása."],
                ["/togfires", "Tűz spawnolása."]
            ]
        },
        {
            title: "OMSZ",
            commands: [
                ["/m", "Meghapone használata."],
                ["/d", "Sürgősségi rádió használata."],
                ["/rbs", "Gépjárműből kivehető útzárak előhozása."],
                ["/nearbyrb", "Közeledbe lévő útzárak tulajdonosának neve és felvétel fül."],
                ["/calls_omsz", "Hívások megjelenítése."],
                ["/acceptmedic", "Hívás elfogadása."],
                ["/cancelmedic", "Hívás lemondása."],
                ["/gyogyit", "Játékos meggyógyítása."]
            ]
        },
        {
            title: "Parkolás Felügyelet",
            commands: [
                ["/d", "Sürgősségi rádió használata."],
                ["/rbs", "Gépjárműből kivehető útzárak előhozása."],
                ["/nearbyrb", "Közeledbe lévő útzárak tulajdonosának neve és felvétel fül."],
                ["/lefoglal", "Helikopter , motor , utánfutó , bicikli lefoglalására alkalmas."]
            ]
        },
        {
            title: "Bandák",
            commands: [
                ["/graffiti", "Graffiti felfestésére használatos ( Spray kanna és patron szükséges )."]
            ]
        }
    ];

    page.innerHTML = `
        <a
            href="https://forum.seev2.hu/threads/szerveren-megtalalhato-parancsok.165/"
            target="_blank"
            class="command-forum-btn"
        >
            Fórum leírás megnyitása
        </a>

        <input
            type="text"
            id="commandSearch"
            class="command-search"
            placeholder="Parancs vagy kategória keresése..."
        >

        <div class="commands-list" id="commandsList"></div>
    `;

    const list = document.getElementById("commandsList");

    function normalize(value) {
        return value
            .toString()
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();
    }

    function renderCommand(command) {
        return `
            <div class="command-item">

                <div class="command-name">
                    ${command[0]}
                </div>

                <div class="command-desc">
                    ${command[1]}
                </div>

            </div>
        `;
    }

    function render(search = "") {

        const query = normalize(search);

        const visibleGroups = commandGroups
            .map(group => {

                const categoryMatch =
                    normalize(group.title).includes(query);

                const commands = categoryMatch
                    ? group.commands
                    : group.commands.filter(command =>
                        normalize(command[0]).includes(query) ||
                        normalize(command[1]).includes(query)
                    );

                return {
                    ...group,
                    commands
                };
            })
            .filter(group => group.commands.length > 0);

        if (!visibleGroups.length) {
            list.innerHTML = `
                <div class="command-empty">
                    Nincs találat erre a keresésre.
                </div>
            `;
            return;
        }

        list.innerHTML = visibleGroups
            .map(group => `
                <section class="command-section">

                    <div class="command-section-header">
                        <div class="command-section-title">
                            <h3>
                                ${group.title}
                            </h3>
                        </div>
                    </div>

                    <div class="commands-grid">
                        ${group.commands.map(renderCommand).join("")}
                    </div>

                </section>
            `)
            .join("");
    }

    render();

    document
        .getElementById("commandSearch")
        .addEventListener("input", event => {
            render(event.target.value);
        });
});
