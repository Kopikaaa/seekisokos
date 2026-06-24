document.addEventListener("DOMContentLoaded", () => {

    const page = document.getElementById("crab-page");

    if (!page) return;

    page.innerHTML = `
        <div class="module-header">
       
        </div>

        <div class="info-card" style="max-width:600px;">

            <div style="margin-bottom:15px;">
                <label>Mennyi kilót sikerült kifogni?</label>

                <input
                    type="number"
                    id="crabKg"
                    class="command-search"
                    placeholder="Pl.: 250"
                    min="0"
                >
            </div>

            <div style="margin-bottom:15px;">
                <label>Mi a jelenlegi árfolyam? ($/kg)</label>

                <input
                    type="number"
                    id="crabPrice"
                    class="command-search"
                    placeholder="Pl.: 90$/kg"
                    min="0"
                >
            </div>

            <div class="tuning-summary">

                <div class="summary-header">
                    <h3>Várható bevétel</h3>
                </div>

                <div class="summary-box money">
                    <div class="summary-value" id="crabTotal">
                        0 $
                    </div>
                </div>

            </div>

        </div>
    `;

    const kgInput = document.getElementById("crabKg");
    const priceInput = document.getElementById("crabPrice");
    const totalEl = document.getElementById("crabTotal");

    function calculate() {

        const kg = Number(kgInput.value) || 0;
        const price = Number(priceInput.value) || 0;

        const total = kg * price;

        totalEl.textContent =
            total.toLocaleString("hu-HU") + " $";
    }

    kgInput.addEventListener("input", calculate);
    priceInput.addEventListener("input", calculate);

});
