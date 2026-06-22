document.addEventListener("DOMContentLoaded", () => {

    const page = document.getElementById("cmds-page");

    if (!page) return;

    const commands = [
        ["/me", "Látható cselekvés"],
        ["/melow", "Látható cselekvés kisebb láthatósággal"],
        ["/do", "Láthatatlan történés"],
        ["/dolow", "Láthatatlan történés kisebb láthatósággal"],
        ["/ame", "Karakter leírása"],
        ["/b", "OOC chat"],
        ["/togtips", "Tippek kikapcsolása"],
        ["/toghud", "HUD kikapcsolása"],
        ["/headmove", "Fejmozgás kikapcsolása"],
        ["/togsnow", "Hóesés kikapcsolása"],
        ["/togspeedo", "KM/H kikapcsolása"],
        ["/clearooc", "OOC chat törlése"],
        ["/togaj", "Adminjail infó ki/be"],
        ["/getskin", "Skin ID megjelenítése"],
        ["/park", "Jármű leparkolása"],
        ["/placedo", "Láthatatlan történés lerakása"],
        ["/protect", "Jármű levédése"],
        ["/removeprotect", "Jármű levédés feloldása"],
        ["/r", "Elsődleges rádió"],
        ["/r2", "Másodlagos rádió"],
        ["/tuneradio", "Rádió frekvencia beállítása"],
        ["/tuneradio2", "Másodlagos rádió frekvencia"],
        ["/kr", "Kamionos rádió"],
        ["/buy", "Interior vásárlása"],
        ["/id", "Játékos keresése"],
        ["/szint", "Játékos szint lekérése"],
        ["/lvl", "Játékos szint lekérése"],
        ["/kiszed", "Játékos kiszedése járműből"],
        ["/cveh", "Ajtó nyitása belülről"],
        ["/felmond", "Munka felmondása"],
        ["/description", "Karakter leírás beállítása"],
        ["/cuccaim", "Kiegészítő panel"],
        ["/bind", "Parancs bindelése"],
        ["/unbind", "Bind törlése"],
        ["/airride", "AirRide állítása"],
        ["/backfire", "Backfire ki/be"],
        ["/drivetype", "Meghajtás állítása"],
        ["/halalido", "Halál idő megjelenítése"],
        ["/gate", "Kapu kezelése"],
        ["/bortonido", "Börtön idő lekérése"],
        ["/motozas", "Játékos motozása"],
        ["/paytaxi", "Taxi fizetése"],
        ["/pay", "Pénz átadása"],
        ["/pm", "Privát üzenet"],
        ["/admins", "Elérhető adminok"],
        ["/nearbyvehicles", "Közeli járművek"],
        ["/getpos", "Pozíció megjelenítése"],
        ["/fp", "First Person nézet"],
        ["/togdeathmusic", "Halálzene ki/be"],

        ["F2", "Animpanel"],
        ["F3", "Frakciópanel"],
        ["F4", "Ablak lehúzás"],
        ["F6", "Elakadásjelző"],
        ["F7", "PP Shop"],
        ["F8", "Konzol"],
        ["F10", "Rendszámok"],
        ["F11", "Térkép"],
        ["F12", "Képernyőkép"],
        ["HOME", "Dashboard"],

        ["/m", "Megaphone"],
        ["/d", "Sürgősségi rádió"],
        ["/zsakelvesz", "Zsák lerakása"],
        ["/takebag", "Zsák lerakása"],
        ["/jail", "Börtön"],
        ["/prison", "Fegyház"],
        ["/prisoners", "Fegyház lista"],
        ["/cuff", "Bilincselés"],
        ["/visz", "Bilincsben vezetés"],
        ["/backup", "Erősítés kérés"],
        ["/settraffi", "Traffipax lerakás"],
        ["/hatar", "Határ kezelés"],
        ["/toghatar", "Határ értesítések"],
        ["/gclean", "Graffiti eltávolítás"],
        ["/nearbyspikes", "Közeli szögesdrót"],
        ["/rbs", "Útzár panel"],
        ["/nearbyrb", "Közeli útzárak"],
        ["/mdc", "MDC aktiválása"],
        ["/togmdcmsg", "MDC értesítések"],
        ["/sirenpanel", "Sziréna panel"],
        ["/togsirengui", "Sziréna GUI"],
        ["/setunitstate", "Egység állapot"],
        ["/listcalls", "Aktív hívások"],
        ["/delnearbyrb", "Saját útzár törlése"],
        ["/togtraffi", "Traffi értesítések"],

        ["/scaleon", "Kamion mérleg lerakása"],
        ["/scaleremove", "Kamion mérleg felszedése"],

        ["/lenyomoz", "Telefonszám lenyomozása"],
        ["/lenyomoz ki", "Lenyomozás kikapcsolása"],
        ["/alnev", "Álnév bekapcsolása"],
        ["/alnev ki", "Álnév kikapcsolása"],

        ["/prisondoors", "Fegyház ajtók kezelése"],

        ["/fixvehbug", "Bugos jármű javítása"],
        ["/acceptmechanic", "Szerelő hívás elfogadása"],
        ["/calls_fix", "Szerelő hívások"],
        ["/calls_sccs", "SCCS hívások"],
        ["/delsccs", "SCCS hívás törlése"],

        ["/accepttaxi", "Taxi hívás elfogadása"],
        ["/calls_taxi", "Taxi hívások"],
        ["/deltaxi", "Taxi hívás törlése"],

        ["/acceptfd", "Tűzoltó hívás elfogadása"],
        ["/togfires", "Tűz spawnolás"],

        ["/calls_omsz", "OMSZ hívások"],
        ["/acceptmedic", "Mentős hívás elfogadása"],
        ["/cancelmedic", "Mentős hívás törlése"],
        ["/gyogyit", "Játékos gyógyítása"],

        ["/lefoglal", "Jármű lefoglalása"],

        ["/graffiti", "Graffiti felfestése"]
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
            placeholder="Parancs keresése..."
        >

        <div class="commands-grid" id="commandsGrid"></div>
    `;

    const grid = document.getElementById("commandsGrid");

    function render(search = "") {

        grid.innerHTML = "";

        commands
            .filter(cmd =>
                cmd[0].toLowerCase().includes(search.toLowerCase()) ||
                cmd[1].toLowerCase().includes(search.toLowerCase())
            )
            .forEach(cmd => {

                grid.innerHTML += `
                    <div class="command-item">

                        <div class="command-name">
                            ${cmd[0]}
                        </div>

                        <div class="command-desc">
                            ${cmd[1]}
                        </div>

                    </div>
                `;
            }); }

    render();

    document
        .getElementById("commandSearch")
        .addEventListener("input", e => {
            render(e.target.value);
        });
});
