'use strict';

// SeeMTA V2 Kisokos - externalized JS
(function(){
  ('seev2.js executing (start of file)');
  // Data model
  const data = {
    performance: [
      {group:'Motor', options:[
        {id:'motor_stock',name:'Gyári',money:0,pp:0},
        {id:'motor_alap',name:'Alap',money:3000,pp:0},
        {id:'motor_profi',name:'Profi',money:7500,pp:0},
        {id:'motor_verseny',name:'Verseny',money:12000,pp:0},
        {id:'motor_venom',name:'Venom',money:0,pp:1100},
      ]},
      {group:'Turbo', options:[
        {id:'turbo_stock',name:'Gyári',money:0,pp:0},
        {id:'turbo_alap',name:'Alap',money:3000,pp:0},
        {id:'turbo_profi',name:'Profi',money:7500,pp:0},
        {id:'turbo_verseny',name:'Verseny',money:12000,pp:0},
        {id:'turbo_venom',name:'Venom',money:0,pp:1100},
      ]},
      {group:'ECU', options:[
        {id:'ecu_stock',name:'Gyári',money:0,pp:0},
        {id:'ecu_alap',name:'Alap',money:3000,pp:0},
        {id:'ecu_profi',name:'Profi',money:7500,pp:0},
        {id:'ecu_verseny',name:'Verseny',money:12000,pp:0},
        {id:'ecu_venom',name:'Venom',money:0,pp:1100},
      ]},
      {group:'Váltó', options:[
        {id:'box_stock',name:'Gyári',money:0,pp:0},
        {id:'box_alap',name:'Alap',money:3000,pp:0},
        {id:'box_profi',name:'Profi',money:7500,pp:0},
        {id:'box_verseny',name:'Verseny',money:12000,pp:0},
        {id:'box_venom',name:'Venom',money:0,pp:1100},
      ]},
      {group:'Súlycsökkentés', options:[
        {id:'wt_stock',name:'Gyári',money:0,pp:0},
        {id:'wt_alap',name:'Alap',money:3000,pp:0},
        {id:'wt_profi',name:'Profi',money:7500,pp:0},
        {id:'wt_verseny',name:'Verseny',money:12000,pp:0},
        {id:'wt_venom',name:'Venom',money:0,pp:1100},
      ]},
      {group:'Gumi', options:[
        {id:'tyre_stock',name:'Gyári',money:0,pp:0},
        {id:'tyre_alap',name:'Alap',money:3000,pp:0},
        {id:'tyre_profi',name:'Profi',money:7500,pp:0},
        {id:'tyre_verseny',name:'Verseny',money:12000,pp:0},
        {id:'tyre_venom',name:'Venom',money:0,pp:1100},
      ]},
      {group:'Felfüggesztés', options:[
        {id:'susp_stock',name:'Gyári',money:0,pp:0},
        {id:'susp_alap',name:'Alap',money:3000,pp:0},
        {id:'susp_profi',name:'Profi',money:7500,pp:0},
        {id:'susp_verseny',name:'Verseny',money:12000,pp:0},
        {id:'susp_venom',name:'Venom',money:0,pp:1100},
      ]},
      {group:'Fék', options:[
        {id:'brake_stock',name:'Gyári',money:0,pp:0},
        {id:'brake_alap',name:'Alap',money:3000,pp:0},
        {id:'brake_profi',name:'Profi',money:7500,pp:0},
        {id:'brake_verseny',name:'Verseny',money:12000,pp:0},
        {id:'brake_venom',name:'Venom',money:0,pp:1100},
      ]},
    ],
    optical: [
      {group:'Felni', options:[
        {id:'rim_stock',name:'Gyári',money:0,pp:0},
        {id:'rim_1',name:'Felni #1',money:5000,pp:0},
        {id:'rim_2',name:'Felni #2',money:5000,pp:0},
        {id:'rim_3',name:'Felni #3',money:5000,pp:0},
        {id:'rim_4',name:'Felni #4',money:5000,pp:0},
      ]},
      {group:'Fényezés', options:[
        {id:'paint_1',name:'Szín 1',money:2500,pp:0},
        {id:'paint_2',name:'Szín 2',money:2500,pp:0},
        {id:'paint_3',name:'Szín 3',money:2500,pp:0},
        {id:'rim_color',name:'Felni szín',money:2500,pp:0},
      ]},
      {group:'Izzó szín', options:[
        {id:'bulb_none',name:'Nincs',money:0,pp:0},
        {id:'bulb_red',name:'Piros',money:5000,pp:0},
        {id:'bulb_blue',name:'Kék',money:5000,pp:0},
        {id:'bulb_green',name:'Zöld',money:5000,pp:0},
        {id:'bulb_yellow',name:'Sárga',money:5000,pp:0},
        {id:'bulb_pink',name:'Rózsaszín',money:5000,pp:0},
        {id:'bulb_white',name:'Fehér',money:5000,pp:0},
      ]},
      {group:'Air Ride', options:[
        {id:'air_none',name:'Kiszerelés',money:0,pp:0},
        {id:'air_install',name:'Beszerelés',money:13000,pp:0},
      ]},
      {group:'LSD Ajtó', options:[
        {id:'lsd_none',name:'Leszerelés',money:0,pp:0},
        {id:'lsd_install',name:'Felszerelés',money:0,pp:1200},
      ]},
      {group:'Variáns', options:[
        {id:'var_stock',name:'Gyári',money:0,pp:0},
        {id:'var_1',name:'Variáns 1',money:25000,pp:0},
        {id:'var_2',name:'Variáns 2',money:25000,pp:0},
        {id:'var_3',name:'Variáns 3',money:25000,pp:0},
        {id:'var_4',name:'Variáns 4',money:25000,pp:0},
        {id:'var_5',name:'Variáns 5',money:25000,pp:0},
        {id:'var_6',name:'Variáns 6',money:25000,pp:0},
      ]}
    ],
    extras:[
      {group:'Traffiradar', options:[{id:'radar_install',name:'Felszerelés',money:0,pp:2500}]},
      {group:'Egyedi rendszám', options:[{id:'plate_stock',name:'Gyári rendszám',money:0,pp:0},{id:'plate_custom',name:'Egyedi rendszám',money:0,pp:2000}]},
      {group:'Offroad optika', options:[{id:'off_none',name:'Nincs',money:0,pp:0},{id:'off_terra',name:'Terep beállítás',money:12500,pp:0},{id:'off_gravel',name:'Murva beállítás',money:12500,pp:0}]},
      {group:'Önzáró differenciálmű', options:[{id:'diff_none',name:'Nincs',money:0,pp:0},{id:'diff_install',name:'Felszerelés',money:7500,pp:0}]},
      {group:'Meghajtás', options:[{id:'drive_fwd',name:'Elsőkerék',money:7500,pp:0},{id:'drive_rwd',name:'Hátsókerék',money:7500,pp:0},{id:'drive_awd',name:'Összkerék',money:10000,pp:0},{id:'drive_switch',name:'Kapcsolható',money:25000,pp:0}]},
      {group:'Duda', options:[{id:'horn_21',name:'Duda 21',money:0,pp:1500},{id:'horn_22',name:'Duda 22',money:0,pp:1500}]},
      {group:'Kipufogó effekt', options:[{id:'ef_turbo',name:'Turbó hang',money:0,pp:0},{id:'ef_backfire',name:'Backfire',money:0,pp:0}]},
      {group:'GPS', options:[{id:'gps_none',name:'Nincs',money:0,pp:0},{id:'gps_install',name:'Felszerelés',money:2500,pp:0}]},
      {group:'Kormányszög', options:[
        {id:'steer_20',name:'20° (Gyári)',money:0,pp:0},
        {id:'steer_25',name:'25°',money:5000,pp:0},
        {id:'steer_30',name:'30°',money:5000,pp:0},
        {id:'steer_35',name:'35°',money:5000,pp:0},
        {id:'steer_40',name:'40°',money:5000,pp:0},
        {id:'steer_45',name:'45°',money:5000,pp:0},
        {id:'steer_50',name:'50°',money:5000,pp:0},
        {id:'steer_55',name:'55°',money:5000,pp:0},
        {id:'steer_60',name:'60°',money:5000,pp:0},
      ]}
    ]
  };

  // State holds selected option id per group
  const state = {};

  // Utilities
  function fmtMoney(n){return n.toLocaleString('hu-HU') + ' $'}
  function fmtPP(n){return n.toLocaleString('hu-HU') + ' PP'}

  // Elements
  const panelsEl = document.getElementById('panels')
  const catTitle = document.getElementById('cat-title')
  const catSub = document.getElementById('cat-sub')
  let activeCat = 'performance'

  function renderCategory(cat){
    panelsEl.innerHTML = ''
    const groups = data[cat]
    if(!groups){
      panelsEl.innerHTML = '<div class="muted">Nincs megjeleníthető kategória.</div>'
      return
    }
    catTitle.textContent = (cat==='performance')? 'Teljesítmény tuning' : (cat==='optical')? 'Optikai tuning' : 'Extrák'
    catSub.textContent = 'Válassz tuningot a jobb oldali összesítőhöz'
    groups.forEach(group=>{
      const section = document.createElement('section')
      section.style.marginBottom = '18px'
      const h = document.createElement('h4')
      h.textContent = group.group
      h.style.margin='8px 0'
      h.style.color='var(--muted)'
      section.appendChild(h)

      const grid = document.createElement('div')
      grid.className = 'grid'
      group.options.forEach(opt=>{
        const card = document.createElement('div')
        card.className = 'card'
        card.dataset.group = group.group
        card.dataset.id = opt.id
        card.innerHTML = `\n          <div class="icon">🚗</div>\n          <div class="meta">\n            <div class="name">${opt.name}</div>\n            <div class="price">${opt.money?fmtMoney(opt.money):(opt.pp?fmtPP(opt.pp):'Ingyen')}</div>\n          </div>\n        `
        if(state[group.group] && state[group.group] === opt.id) card.classList.add('selected')

        card.addEventListener('click', ()=>{
          state[group.group] = opt.id
          const siblings = grid.querySelectorAll('.card')
          siblings.forEach(s=>s.classList.toggle('selected', s.dataset.id===opt.id))
          updateSummary()
        })

        grid.appendChild(card)
      })

      section.appendChild(grid)
      panelsEl.appendChild(section)
    })
  }

function updateSummary(){
    try{

        const listEl = document.getElementById('selected-list');

        if(!listEl){
            console.error("selected-list nem található");
            return;
        }

        listEl.innerHTML = '';

        let money = 0;
        let pp = 0;
        let count = 0;

        ['performance','optical','extras'].forEach(cat=>{

            ("CAT:", cat);

            const groups = data[cat];


            if(!Array.isArray(groups)){
                console.error("Nem tömb:", cat, groups);
                return;
            }

            groups.forEach(group=>{



                if(!group.options){
                    console.error("Nincs options:", group);
                    return;
                }

                const sel = state[group.group];

                if(sel){

                    const opt = group.options.find(o=>o.id===sel);

                    if(opt){
                        money += opt.money || 0;
                        pp += opt.pp || 0;
                        count++;
                    }
                }
            });
        });

        document.getElementById('total-money').textContent = fmtMoney(money);
        document.getElementById('total-pp').textContent = fmtPP(pp);
        document.getElementById('total-count').textContent = count + ' db';
        document.getElementById('total-money-big').textContent = fmtMoney(money);
        document.getElementById('total-pp-big').textContent = fmtPP(pp);

    }catch(err){
        console.error("updateSummary error", err);
    }
}
  function buildString(){
    try{
      const parts = []
      parts.push('SeeMTA V2 Kisokos')
      const lines = []
      ['performance','optical','extras'].forEach(cat=>{
        if(!(data && cat in data)) return
        const groups = data[cat]
        if(!groups) return
        groups.forEach(group=>{
          const sel = state[group.group]
          if(sel){
            const opt = group.options.find(o=>o.id===sel)
            if(opt) lines.push(`${group.group}: ${opt.name}`)
          }
        })
      })
      parts.push(lines.join(': '))
      const moneyText = document.getElementById('total-money').textContent
      const ppText = document.getElementById('total-pp').textContent
      parts.push('Összesen:' + moneyText + ' ' + ppText)
      return parts.join('\n')
    }catch(err){
      console.error('buildString error',err)
      return 'Error building string'
    }
  }

  // Wire menu and controls
  document.getElementById('tuning-toggle').addEventListener('click', ()=>{
    const btns = document.getElementById('tuning-buttons')
    const caret = document.getElementById('tuning-caret')
    const isHidden = btns.style.display === 'none'
    btns.style.display = isHidden ? 'block' : 'none'
    caret.textContent = isHidden ? '▾' : '▸'
  })

  document.querySelectorAll('#tuning-buttons button').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      document.querySelectorAll('#tuning-buttons button').forEach(b=>b.classList.remove('active'))
      btn.classList.add('active')
      activeCat = btn.dataset.cat
      renderCategory(activeCat)
    })
  })

  document.getElementById('copy-build').addEventListener('click', async ()=>{
    const text = buildString()
    try{
      await navigator.clipboard.writeText(text)
      document.getElementById('copy-build').textContent = 'Másolva ✅'
      setTimeout(()=>document.getElementById('copy-build').textContent = 'Build másolása',1500)
    }catch(e){
      alert('Másolás sikertelen — engedélyezd a vágólap használatát.')
    }
  })

// defaults


['performance','optical','extras'].forEach(cat=>{


    const groups = data?.[cat];

    if(!groups){
  
        return;
    }

    groups.forEach(group=>{
        const defaultOpt = group.options[0];
        if(defaultOpt) state[group.group] = defaultOpt.id;
    });
});
  // init
  renderCategory(activeCat)
  updateSummary()

  // expose for debug (optional)
  window.seemta = { data, state, renderCategory, updateSummary, buildString }

})();
