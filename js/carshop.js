

const vehicles = [
    {
        brand: 'Alfa Romeo',
        name: 'Alfa Romeo 159 Ti',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Alfa_Romeo_logo.svg',
        money: 150000,
        pp: 8000,
        year: 1995,
        fuel: 'Benzin',
        hp: 225,
        weight: 1500
    },
    {
        brand: 'Alfa Romeo',
        name: 'Alfa Romeo Giulia Quadrifoglio',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Alfa_Romeo_logo.svg',
        money: 675000,
        pp: 28000,
        year: 2022,
        fuel: 'Benzin',
        hp: 505,
        weight: 1600
    },
    {
        brand: 'Aston Martin',
        name: 'Aston Martin DBS Superleggera',
        logo: 'https://upload.wikimedia.org/wikipedia/en/c/c0/Aston_Martin_logo.svg',
        money: 1250000,
        pp: 30000,
        year: 2018,
        fuel: 'Benzin',
        hp: 715,
        weight: 1800
    },
    {
        brand: 'Audi',
        name: 'Audi Q7',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg',
        money: 550000,
        pp: 16500,
        year: 2008,
        fuel: 'Benzin',
        hp: 335,
        weight: 2200
    },
    {
        brand: 'Audi',
        name: 'Audi R8 V10',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg',
        money: 1000000,
        pp: 27000,
        year: 2014,
        fuel: 'Benzin',
        hp: 610,
        weight: 1600
    },
    {
        brand: 'Audi',
        name: 'Audi RS3 2020',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg',
        money: 300000,
        pp: 15000,
        year: 2022,
        fuel: 'Benzin',
        hp: 300,
        weight: 1500
    },
    {
        brand: 'Audi',
        name: 'Audi RS4',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg',
        money: 450000,
        pp: 19000,
        year: 2013,
        fuel: 'Benzin',
        hp: 450,
        weight: 1800
    },
    {
        brand: 'Audi',
        name: 'Audi RS5',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg',
        money: 450000,
        pp: 18000,
        year: 2017,
        fuel: 'Benzin',
        hp: 450,
        weight: 1650
    },
    {
        brand: 'Audi',
        name: 'Audi RS6',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg',
        money: 850000,
        pp: 25000,
        year: 2023,
        fuel: 'Benzin',
        hp: 600,
        weight: 2025
    },
    {
        brand: 'Audi',
        name: 'Audi RS6 C5',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg',
        money: 50000,
        pp: 4000,
        year: 2004,
        fuel: 'Benzin',
        hp: 450,
        weight: 1840
    },
    {
        brand: 'Audi',
        name: 'Audi RS7 2020',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg',
        money: 537500,
        pp: 28000,
        year: 2020,
        fuel: 'Benzin',
        hp: 600,
        weight: 2000
    },
    {
        brand: 'Audi',
        name: 'Audi RS7 Quattro',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg',
        money: 850000,
        pp: 27000,
        year: 2017,
        fuel: 'Benzin',
        hp: 600,
        weight: 1950
    },
    {
        brand: 'Audi',
        name: 'Audi RSQ8 Mansory',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg',
        money: 950000,
        pp: 36500,
        year: 2025,
        fuel: 'Benzin',
        hp: 625,
        weight: 2500
    },
    {
        brand: 'Audi',
        name: 'Audi Sport Quattro',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg',
        money: 550000,
        pp: 16000,
        year: 1983,
        fuel: 'Benzin',
        hp: 306,
        weight: 1300
    },
    {
        brand: 'BMW',
        name: 'BMW 750 Li',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg',
        money: 700000,
        pp: 25000,
        year: 2015,
        fuel: 'Benzin',
        hp: 530,
        weight: 2100
    },
    {
        brand: 'BMW',
        name: 'BMW 750i e38',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg',
        money: 65000,
        pp: 4100,
        year: 2000,
        fuel: 'Benzin',
        hp: 300,
        weight: 1800
    },
    {
        brand: 'BMW',
        name: 'BMW M3 G81',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg',
        money: 750000,
        pp: 30000,
        year: 2000,
        fuel: 'Benzin',
        hp: 355,
        weight: 2700
    },
    {
        brand: 'BMW',
        name: 'BMW M3 e46',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg',
        money: 535000,
        pp: 21500,
        year: 2003,
        fuel: 'Benzin',
        hp: 343,
        weight: 1575
    },
    {
        brand: 'BMW',
        name: 'BMW M4',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg',
        money: 537500,
        pp: 33000,
        year: 2023,
        fuel: 'Benzin',
        hp: 431,
        weight: 1670
    },
    {
        brand: 'BMW',
        name: 'BMW M5 F10',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg',
        money: 500000,
        pp: 25000,
        year: 2012,
        fuel: 'Benzin',
        hp: 560,
        weight: 1855
    },
    {
        brand: 'BMW',
        name: 'BMW M5 F11',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg',
        money: 600000,
        pp: 18000,
        year: 2016,
        fuel: 'Benzin',
        hp: 617,
        weight: 1940
    },
    {
        brand: 'BMW',
        name: 'BMW M5 F90',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg',
        money: 850000,
        pp: 27000,
        year: 2018,
        fuel: 'Benzin',
        hp: 625,
        weight: 1855
    },
    {
        brand: 'BMW',
        name: 'BMW M5 G90',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg',
        money: 800000,
        pp: 35000,
        year: 2025,
        fuel: 'Benzin',
        hp: 625,
        weight: 1855
    },
    {
        brand: 'BMW',
        name: 'BMW M5 e34',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg',
        money: 250000,
        pp: 24000,
        year: 1992,
        fuel: 'Benzin',
        hp: 315,
        weight: 1700
    },
    {
        brand: 'BMW',
        name: 'BMW M5 e60',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg',
        money: 800000,
        pp: 18000,
        year: 2005,
        fuel: 'Benzin',
        hp: 507,
        weight: 1840
    },
    {
        brand: 'BMW',
        name: 'BMW M6',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg',
        money: 450000,
        pp: 16000,
        year: 2020,
        fuel: 'Benzin',
        hp: 560,
        weight: 1850
    },
    {
        brand: 'BMW',
        name: 'BMW M635 CSi e24',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg',
        money: 450000,
        pp: 15000,
        year: 1984,
        fuel: 'Benzin',
        hp: 286,
        weight: 1500
    },
    {
        brand: 'BMW',
        name: 'BMW M8',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg',
        money: 500000,
        pp: 33500,
        year: 2022,
        fuel: 'Benzin',
        hp: 625,
        weight: 1900
    },
    {
        brand: 'BMW',
        name: 'BMW S1000RR',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg',
        money: 65000,
        pp: 8000,
        year: 2022,
        fuel: 'Benzin',
        hp: 205,
        weight: 205
    },
    {
        brand: 'BMW',
        name: 'BMW X5 M Competition',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg',
        money: 650000,
        pp: 25500,
        year: 2020,
        fuel: 'Benzin',
        hp: 625,
        weight: 2300
    },
    {
        brand: 'BMW',
        name: 'BMW X6',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg',
        money: 725000,
        pp: 35000,
        year: 2020,
        fuel: 'Benzin',
        hp: 625,
        weight: 2500
    },
    {
        brand: 'Barkas',
        name: 'Barkas B1000',
        logo: '',
        money: 35000,
        pp: 3000,
        year: 1988,
        fuel: 'Benzin',
        hp: 45,
        weight: 1400
    },
    {
        brand: 'Bentley',
        name: 'Bentley Bentayga',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Bentley_logo.svg',
        money: 775000,
        pp: 35000,
        year: 2022,
        fuel: 'Benzin',
        hp: 626,
        weight: 2300
    },
    {
        brand: 'Bugatti',
        name: 'Bugatti Chironl',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Bugatti_logo.svg',
        money: 1175000,
        pp: 38000,
        year: 2016,
        fuel: 'Benzin',
        hp: 1500,
        weight: 1996
    },
    {
        brand: 'Bugatti',
        name: 'Bugatti Veyron SS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Bugatti_logo.svg',
        money: 1000000,
        pp: 34000,
        year: 2011,
        fuel: 'Benzin',
        hp: 1200,
        weight: 1838
    },
    {
        brand: 'Chevrolet',
        name: 'Chevrolet Bel Air Sport Coupe',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Chevrolet_logo.svg',
        money: 190000,
        pp: 9000,
        year: 1957,
        fuel: 'Benzin',
        hp: 180,
        weight: 1600
    },
    {
        brand: 'Chevrolet',
        name: "Chevrolet Camaro Z28 '70",
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Chevrolet_logo.svg',
        money: 400000,
        pp: 20000,
        year: 2000,
        fuel: 'Benzin',
        hp: 400,
        weight: 1800
    },
    {
        brand: 'Chevrolet',
        name: 'Chevrolet Camaro ZL1 2018',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Chevrolet_logo.svg',
        money: 600000,
        pp: 20000,
        year: 2015,
        fuel: 'Benzin',
        hp: 650,
        weight: 1750
    },
    {
        brand: 'Chevrolet',
        name: "Chevrolet Caprice '87",
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Chevrolet_logo.svg',
        money: 220000,
        pp: 8100,
        year: 1987,
        fuel: 'Benzin',
        hp: 185,
        weight: 1600
    },
    {
        brand: 'Chevrolet',
        name: "Chevrolet Chevelle '71",
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Chevrolet_logo.svg',
        money: 37500,
        pp: 2000,
        year: 1971,
        fuel: 'Benzin',
        hp: 375,
        weight: 1600
    },
    {
        brand: 'Chevrolet',
        name: 'Chevrolet Corvette C8',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Chevrolet_logo.svg',
        money: 400000,
        pp: 40000,
        year: 2019,
        fuel: 'Benzin',
        hp: 250,
        weight: 2000
    },
    {
        brand: 'Chevrolet',
        name: 'Chevrolet Impala 64',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Chevrolet_logo.svg',
        money: 200000,
        pp: 15000,
        year: 1964,
        fuel: 'Benzin',
        hp: 230,
        weight: 1600
    },
    {
        brand: 'Dodge',
        name: 'Dodge Challenger SRT',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Dodge_logo.svg',
        money: 550000,
        pp: 18000,
        year: 2022,
        fuel: 'Benzin',
        hp: 485,
        weight: 1900
    },
    {
        brand: 'Ducati',
        name: 'Ducati Desmosedici RR',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Ducati_logo.svg',
        money: 245000,
        pp: 10900,
        year: 2007,
        fuel: 'Benzin',
        hp: 200,
        weight: 171
    },
    {
        brand: 'Ferrari',
        name: 'Ferrari 458 Italia',
        logo: 'https://upload.wikimedia.org/wikipedia/en/d/d1/Ferrari-Logo.svg',
        money: 1000000,
        pp: 28500,
        year: 2015,
        fuel: 'Benzin',
        hp: 562,
        weight: 1485
    },
    {
        brand: 'Ferrari',
        name: 'Ferrari F12 Berlinetta',
        logo: 'https://upload.wikimedia.org/wikipedia/en/d/d1/Ferrari-Logo.svg',
        money: 1000000,
        pp: 30000,
        year: 2009,
        fuel: 'Benzin',
        hp: 510,
        weight: 1350
    },
    {
        brand: 'Ferrari',
        name: 'Ferrari F40',
        logo: 'https://upload.wikimedia.org/wikipedia/en/d/d1/Ferrari-Logo.svg',
        money: 1000000,
        pp: 27000,
        year: 1992,
        fuel: 'Benzin',
        hp: 478,
        weight: 1100
    },
    {
        brand: 'Ferrari',
        name: 'Ferrari F8 Tributo 2020',
        logo: 'https://upload.wikimedia.org/wikipedia/en/d/d1/Ferrari-Logo.svg',
        money: 1000000,
        pp: 28000,
        year: 2020,
        fuel: 'Benzin',
        hp: 720,
        weight: 1435
    },
    {
        brand: 'Ferrari',
        name: 'LaFerrari',
        logo: 'https://upload.wikimedia.org/wikipedia/en/d/d1/Ferrari-Logo.svg',
        money: 1290000,
        pp: 36500,
        year: 2019,
        fuel: 'Benzin',
        hp: 950,
        weight: 1350
    },
    {
        brand: 'Ford',
        name: 'Ford 150 Ecoline',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg',
        money: 125000,
        pp: 3000,
        year: 1991,
        fuel: 'Benzin',
        hp: 300,
        weight: 2800
    },
    {
        brand: 'Ford',
        name: 'Ford F-150 Ecoline',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg',
        money: 70000,
        pp: 2200,
        year: 1995,
        fuel: 'Benzin',
        hp: 450,
        weight: 2200
    },
    {
        brand: 'Ford',
        name: 'Ford Focus RS 2017',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg',
        money: 100000,
        pp: 13000,
        year: 2017,
        fuel: 'Benzin',
        hp: 350,
        weight: 1600
    },
    {
        brand: 'Ford',
        name: 'Ford GT 2017',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg',
        money: 990000,
        pp: 36000,
        year: 2024,
        fuel: 'Benzin',
        hp: 800,
        weight: 1900
    },
    {
        brand: 'Ford',
        name: 'Ford Mustang Dark Horse',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg',
        money: 450000,
        pp: 18000,
        year: 2008,
        fuel: 'Benzin',
        hp: 760,
        weight: 1800
    },
    {
        brand: 'Ford',
        name: 'Ford Mustang GT 2015',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg',
        money: 450000,
        pp: 16000,
        year: 2015,
        fuel: 'Benzin',
        hp: 435,
        weight: 1700
    },
    {
        brand: 'Ford',
        name: 'Ford Raptor 2018',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg',
        money: 700000,
        pp: 20000,
        year: 2018,
        fuel: 'Benzin',
        hp: 250,
        weight: 2000
    },
    {
        brand: 'Harley Davidson',
        name: 'Harley Davidson',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Harley-Davidson_logo.svg',
        money: 150000,
        pp: 6500,
        year: 2006,
        fuel: 'Benzin',
        hp: 70,
        weight: 320
    },
    {
        brand: 'Harley Davidson',
        name: 'Harley Davidson Fat Boy',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Harley-Davidson_logo.svg',
        money: 75000,
        pp: 8000,
        year: 2020,
        fuel: 'Benzin',
        hp: 65,
        weight: 330
    },
    {
        brand: 'Honda',
        name: 'Honda Civic',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Honda_logo.svg',
        money: 250000,
        pp: 16500,
        year: 2000,
        fuel: 'Benzin',
        hp: 174,
        weight: 1200
    },
    {
        brand: 'Honda',
        name: 'Honda Click',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Honda_logo.svg',
        money: 1250,
        pp: 1000,
        year: 2023,
        fuel: 'Benzin',
        hp: 8,
        weight: 100
    },
    {
        brand: 'Honda',
        name: 'Honda NSX',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Honda_logo.svg',
        money: 119000,
        pp: 27500,
        year: 2017,
        fuel: 'Benzin',
        hp: 573,
        weight: 1400
    },
    {
        brand: 'Hyundai',
        name: 'Hyundai Encino EV',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Hyundai_logo.svg',
        money: 100000,
        pp: 12000,
        year: 2022,
        fuel: 'Elektromos',
        hp: 184,
        weight: 1600
    },
    {
        brand: 'Jeep',
        name: 'Jeep Grand Cherokee',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Jeep_logo.svg',
        money: 250000,
        pp: 14000,
        year: 2021,
        fuel: 'Benzin',
        hp: 295,
        weight: 2200
    },
    {
        brand: 'Jeep',
        name: 'Jeep Wrangler',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Jeep_logo.svg',
        money: 170000,
        pp: 10000,
        year: 2017,
        fuel: 'Benzin',
        hp: 270,
        weight: 1800
    },
    {
        brand: 'Kawasaki',
        name: 'Kawasaki KLS 250',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Kawasaki_logo.svg',
        money: 75000,
        pp: 4500,
        year: 2009,
        fuel: 'Benzin',
        hp: 23,
        weight: 150
    },
    {
        brand: 'Koenigsegg',
        name: 'Koenigsegg Jesko',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Koenigsegg_Logo.svg',
        money: 1250000,
        pp: 28000,
        year: 2023,
        fuel: 'Benzin',
        hp: 1600,
        weight: 1320
    },
    {
        brand: 'Koenigsegg',
        name: 'Koenigsegg One:1',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Koenigsegg_Logo.svg',
        money: 1000000,
        pp: 33000,
        year: 2015,
        fuel: 'Benzin',
        hp: 1340,
        weight: 1360
    },
    {
        brand: 'Lada',
        name: 'Lada 2107',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Lada_logo.svg',
        money: 10000,
        pp: 1500,
        year: 1982,
        fuel: 'Benzin',
        hp: 64,
        weight: 955
    },
    {
        brand: 'Lakóautó',
        name: 'Lakóautó',
        logo: '',
        money: 650000,
        pp: 15000,
        year: 2020,
        fuel: 'N/A',
        hp: 200,
        weight: 4000
    },
    {
        brand: 'Lakókocsi',
        name: 'Lakókocsi',
        logo: '',
        money: 550000,
        pp: 17000,
        year: 1997,
        fuel: 'Dízel',
        hp: 180,
        weight: 3200
    },
    {
        brand: 'Lamborghini',
        name: 'Lamborghini Huracan',
        logo: 'https://upload.wikimedia.org/wikipedia/en/d/df/Lamborghini_Logo.svg',
        money: 990000,
        pp: 29900,
        year: 2014,
        fuel: 'Benzin',
        hp: 640,
        weight: 1422
    },
    {
        brand: 'Lamborghini',
        name: 'Lamborghini Revuelto 2023',
        logo: 'https://upload.wikimedia.org/wikipedia/en/d/df/Lamborghini_Logo.svg',
        money: 1200000,
        pp: 30000,
        year: 2021,
        fuel: 'Benzin',
        hp: 610,
        weight: 1542
    },
    {
        brand: 'Lamborghini',
        name: 'Lamborghini Urus',
        logo: 'https://upload.wikimedia.org/wikipedia/en/d/df/Lamborghini_Logo.svg',
        money: 1250000,
        pp: 29900,
        year: 2018,
        fuel: 'Benzin',
        hp: 650,
        weight: 2200
    },
    {
        brand: 'Lincoln',
        name: 'Lincoln TC Limo',
        logo: 'https://via.placeholder.com/50?text=Lincoln',
        money: 525000,
        pp: 19000,
        year: 2000,
        fuel: 'Benzin',
        hp: 400,
        weight: 2800
    },
    {
        brand: 'Maserati',
        name: 'Maserati MC20',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Maserati_logo.svg',
        money: 800000,
        pp: 40000,
        year: 2021,
        fuel: 'Benzin',
        hp: 429,
        weight: 2100
    },
    {
        brand: 'Mazda',
        name: 'Mazda RX-8',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Mazda_logo.svg',
        money: 350000,
        pp: 16000,
        year: 2002,
        fuel: 'Benzin',
        hp: 276,
        weight: 1300
    },
    {
        brand: 'Mazda',
        name: 'Mazda RX7',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Mazda_logo.svg',
        money: 550000,
        pp: 19900,
        year: 1996,
        fuel: 'Benzin',
        hp: 280,
        weight: 1500
    },
    {
        brand: 'McLaren',
        name: 'McLaren 720s',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/34/McLaren_logo.svg',
        money: 950000,
        pp: 29500,
        year: 2019,
        fuel: 'Benzin',
        hp: 710,
        weight: 1283
    },
    {
        brand: 'McLaren',
        name: 'McLaren P1',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/34/McLaren_logo.svg',
        money: 1390000,
        pp: 33500,
        year: 2013,
        fuel: 'Benzin',
        hp: 903,
        weight: 1390
    },
    {
        brand: 'McLaren',
        name: 'McLaren Senna 2019',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/34/McLaren_logo.svg',
        money: 1490000,
        pp: 36500,
        year: 2019,
        fuel: 'Benzin',
        hp: 800,
        weight: 1198
    },
    {
        brand: 'Mercedes',
        name: 'Mercedes Benz 190E',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg',
        money: 480000,
        pp: 19900,
        year: 1993,
        fuel: 'Benzin',
        hp: 450,
        weight: 2000
    },
    {
        brand: 'Mercedes Benz',
        name: 'Mercedes Benz C63s AMG',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg',
        money: 575000,
        pp: 30000,
        year: 2022,
        fuel: 'Benzin',
        hp: 510,
        weight: 1800
    },
    {
        brand: 'Mercedes Benz',
        name: 'Mercedes Benz E63 AMG',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg',
        money: 700000,
        pp: 18000,
        year: 2009,
        fuel: 'Benzin',
        hp: 612,
        weight: 1850
    },
    {
        brand: 'Mercedes Benz',
        name: 'Mercedes Benz GTS AMG',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg',
        money: 725000,
        pp: 29000,
        year: 2017,
        fuel: 'Benzin',
        hp: 510,
        weight: 1700
    },
    {
        brand: 'Mercedes Benz',
        name: 'Mercedes Benz Sprinter',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg',
        money: 250000,
        pp: 15000,
        year: 2014,
        fuel: 'Dízel',
        hp: 190,
        weight: 3000
    },
    {
        brand: 'Mercedes',
        name: 'Mercedes C-Class W206',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg',
        money: 750000,
        pp: 20000,
        year: 2024,
        fuel: 'Benzin',
        hp: 429,
        weight: 2100
    },
    {
        brand: 'Mercedes-AMG',
        name: 'Mercedes-AMG Project One',
        logo: 'img/brands/Mercedes-Benz.png',
        money: 800000,
        pp: 36500,
        year: 2022,
        fuel: 'Benzin',
        hp: 1000,
        weight: 1600
    },
    {
        brand: 'Mercedes-Benz',
        name: 'Mercedes-Benz G65 AMG',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg',
        money: 500000,
        pp: 22000,
        year: 2019,
        fuel: 'Benzin',
        hp: 621,
        weight: 2700
    },
    {
        brand: 'Mercedes-Benz',
        name: 'Mercedes-Benz GT63s',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg',
        money: 225000,
        pp: 25000,
        year: 2019,
        fuel: 'Benzin',
        hp: 630,
        weight: 2100
    },
    {
        brand: 'Mercedes-Benz',
        name: 'Mercedes-Benz Maybach GLS 600',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg',
        money: 800000,
        pp: 30000,
        year: 2000,
        fuel: 'Benzin',
        hp: 400,
        weight: 1800
    },
    {
        brand: 'Mercedes-Benz',
        name: 'Mercedes-Benz S-Class W223',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg',
        money: 525000,
        pp: 37000,
        year: 2021,
        fuel: 'Benzin',
        hp: 429,
        weight: 2100
    },
    {
        brand: 'Mercedes-Benz',
        name: 'Mercedes-Benz SLS AMG',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg',
        money: 850000,
        pp: 29900,
        year: 2014,
        fuel: 'Benzin',
        hp: 622,
        weight: 1620
    },
    {
        brand: 'Mitsubishi',
        name: 'Mitsubishi Galant',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Mitsubishi_logo.svg',
        money: 73500,
        pp: 1500,
        year: 2005,
        fuel: 'Benzin',
        hp: 160,
        weight: 1400
    },
    {
        brand: 'Mitsubishi',
        name: 'Mitsubishi Lancer EVO 8',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Mitsubishi_logo.svg',
        money: 400000,
        pp: 17000,
        year: 2006,
        fuel: 'Benzin',
        hp: 280,
        weight: 1450
    },
    {
        brand: 'Mitsubishi',
        name: 'Mitsubishi EVO X',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Mitsubishi_logo.svg',
        money: 400000,
        pp: 19000,
        year: 2008,
        fuel: 'Benzin',
        hp: 300,
        weight: 1550
    },
    {
        brand: 'Nissan',
        name: 'Nissan 200SX',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Nissan_logo.svg',
        money: 100000,
        pp: 15000,
        year: 1998,
        fuel: 'Benzin',
        hp: 200,
        weight: 1200
    },
    {
        brand: 'Nissan',
        name: 'Nissan GT-R R35',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Nissan_logo.svg',
        money: 897500,
        pp: 31000,
        year: 2016,
        fuel: 'Benzin',
        hp: 565,
        weight: 1720
    },
    {
        brand: 'Nissan',
        name: 'Nissan Silvia S15',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Nissan_logo.svg',
        money: 550000,
        pp: 29900,
        year: 2002,
        fuel: 'Benzin',
        hp: 250,
        weight: 1200
    },
    {
        brand: 'Nissan',
        name: 'Nissan Skyline R34 GT-R',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Nissan_logo.svg',
        money: 525000,
        pp: 18500,
        year: 2002,
        fuel: 'Benzin',
        hp: 330,
        weight: 1560
    },
    {
        brand: 'Plymouth',
        name: "Plymouth Hemi 'Cuda '70",
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Plymouth_logo.svg',
        money: 300000,
        pp: 17000,
        year: 1970,
        fuel: 'Benzin',
        hp: 425,
        weight: 1588
    },
    {
        brand: 'Pontiac',
        name: "Pontiac Firebird '69",
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Pontiac_logo.svg',
        money: 350000,
        pp: 18000,
        year: 2005,
        fuel: 'Benzin',
        hp: 400,
        weight: 1800
    },
    {
        brand: 'Porsche',
        name: 'Porsche 911 Carrera 2022',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Porsche_logo.svg',
        money: 800000,
        pp: 30000,
        year: 2000,
        fuel: 'Benzin',
        hp: 400,
        weight: 1800
    },
    {
        brand: 'Porsche',
        name: 'Porsche 911 GT3 RS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Porsche_logo.svg',
        money: 950000,
        pp: 30000,
        year: 2021,
        fuel: 'Benzin',
        hp: 520,
        weight: 1420
    },
    {
        brand: 'Porsche',
        name: 'Porsche 911LM Evo Mansory',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Porsche_logo.svg',
        money: 1375000,
        pp: 35500,
        year: 2021,
        fuel: 'Benzin',
        hp: 1500,
        weight: 1960
    },
    {
        brand: 'Porsche',
        name: 'Porsche 918 Spyder',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Porsche_logo.svg',
        money: 925000,
        pp: 30000,
        year: 2022,
        fuel: 'Benzin',
        hp: 354,
        weight: 1700
    },
    {
        brand: 'Porsche',
        name: 'Porsche Boxter Spyder',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Porsche_logo.svg',
        money: 925000,
        pp: 28000,
        year: 2005,
        fuel: 'Benzin',
        hp: 425,
        weight: 1350
    },
    {
        brand: 'Porsche',
        name: 'Porsche Panamera Turbo S',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Porsche_logo.svg',
        money: 950000,
        pp: 34000,
        year: 2017,
        fuel: 'Benzin',
        hp: 630,
        weight: 2070
    },
    {
        brand: 'Porsche',
        name: 'Porsche Taycan',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Porsche_logo.svg',
        money: 700000,
        pp: 27000,
        year: 2019,
        fuel: 'Benzin',
        hp: 680,
        weight: 2150
    },
    {
        brand: 'Seat',
        name: 'Seat Leon',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/SEAT_logo.svg',
        money: 50000,
        pp: 3500,
        year: 1999,
        fuel: 'Benzin',
        hp: 150,
        weight: 1350
    },
    {
        brand: 'Skoda',
        name: 'Skoda Octavia RS',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Skoda_auto_logo.svg',
        money: 300000,
        pp: 16500,
        year: 2017,
        fuel: 'Benzin',
        hp: 316,
        weight: 1382
    },
    {
        brand: 'Skoda',
        name: 'Skoda Superb',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Skoda_auto_logo.svg',
        money: 109900,
        pp: 3000,
        year: 2023,
        fuel: 'Benzin',
        hp: 280,
        weight: 1500
    },
    {
        brand: 'Subaru',
        name: 'Subaru Impreza',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Subaru_logo.svg',
        money: 350000,
        pp: 21000,
        year: 2005,
        fuel: 'Benzin',
        hp: 300,
        weight: 1400
    },
    {
        brand: 'Tesla',
        name: 'Tesla Model S P90D',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg',
        money: 800000,
        pp: 28000,
        year: 2021,
        fuel: 'Elektromos',
        hp: 1020,
        weight: 2100
    },
    {
        brand: 'Tesla',
        name: 'Tesla Model X P100D',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg',
        money: 800000,
        pp: 28000,
        year: 2021,
        fuel: 'Elektromos',
        hp: 670,
        weight: 2300
    },
    {
        brand: 'Tesla',
        name: 'Tesla Roadster',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg',
        money: 800000,
        pp: 32000,
        year: 2012,
        fuel: 'Elektromos',
        hp: 248,
        weight: 1220
    },
    {
        brand: 'Toyota',
        name: 'Toyota Supra',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_logo.svg',
        money: 500000,
        pp: 18000,
        year: 2015,
        fuel: 'Benzin',
        hp: 382,
        weight: 1500
    },
    {
        brand: 'Toyota',
        name: 'Toyota Supra A90',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_logo.svg',
        money: 800000,
        pp: 20000,
        year: 2020,
        fuel: 'Benzin',
        hp: 410,
        weight: 1600
    },
    {
        brand: 'Trabant',
        name: 'Trabant 601',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Trabant_logo.svg',
        money: 30000,
        pp: 6000,
        year: 2010,
        fuel: 'Benzin',
        hp: 26,
        weight: 600
    },
    {
        brand: 'Utánfutó',
        name: 'Utánfutó',
        logo: '',
        money: 42500,
        pp: 6000,
        year: 2022,
        fuel: 'N/A',
        hp: 0,
        weight: 500
    },
    {
        brand: 'Volkswagen',
        name: 'Volkswagen Golf I',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Volkswagen_logo.svg',
        money: 43000,
        pp: 2100,
        year: 1974,
        fuel: 'Benzin',
        hp: 70,
        weight: 800
    },
    {
        brand: 'Volkswagen',
        name: 'Volkswagen Golf II',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Volkswagen_logo.svg',
        money: 15000,
        pp: 2000,
        year: 1983,
        fuel: 'Benzin',
        hp: 90,
        weight: 800
    },
    {
        brand: 'Volkswagen',
        name: 'Volkswagen Golf IV R32',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Volkswagen_logo.svg',
        money: 72500,
        pp: 10000,
        year: 2004,
        fuel: 'Benzin',
        hp: 240,
        weight: 1450
    },
    {
        brand: 'Volkswagen',
        name: 'Volkswagen Golf V',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Volkswagen_logo.svg',
        money: 500000,
        pp: 2500,
        year: 2003,
        fuel: 'Benzin',
        hp: 170,
        weight: 1400
    },
    {
        brand: 'Volkswagen',
        name: 'Volkswagen Golf VII R',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Volkswagen_logo.svg',
        money: 450000,
        pp: 15000,
        year: 2018,
        fuel: 'Benzin',
        hp: 300,
        weight: 1400
    },
    {
        brand: 'Volkswagen',
        name: 'Volkswagen Passat B6',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Volkswagen_logo.svg',
        money: 95000,
        pp: 9000,
        year: 2007,
        fuel: 'Benzin',
        hp: 200,
        weight: 1500
    },
    {
        brand: 'Volkswagen',
        name: 'Volkswagen Scirocco R',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Volkswagen_logo.svg',
        money: 275000,
        pp: 12000,
        year: 2017,
        fuel: 'Benzin',
        hp: 280,
        weight: 1375
    },
    {
        brand: 'Volkswagen',
        name: 'Volkswagen Touareg',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Volkswagen_logo.svg',
        money: 430000,
        pp: 15000,
        year: 2020,
        fuel: 'Benzin',
        hp: 340,
        weight: 2200
    },
    {
        brand: 'Munkajárművek',
        name: 'Bobcat',
        logo: '',
        money: 0,
        pp: 26000,
        year: 2024,
        fuel: 'Benzin',
        hp: 429,
        weight: 2100
    },
    {
        brand: 'GMC',
        name: 'GMC Sierra',
        logo: '',
        money: 0,
        pp: 26000,
        year: 2024,
        fuel: 'Benzin',
        hp: 429,
        weight: 2100
    },
    {
        brand: 'Kenworth',
        name: 'Kenworth W900',
        logo: '',
        money: 0,
        pp: 40000,
        year: 2024,
        fuel: 'Benzin',
        hp: 429,
        weight: 2100
    },
    {
        brand: 'Peterbilt',
        name: 'Peterbilt 386',
        logo: '',
        money: 1500000,
        pp: 33000,
        year: 2024,
        fuel: 'Dízel',
        hp: 429,
        weight: 2500
    },
    {
        brand: 'Renault',
        name: 'Renault Midlum 220 DCI',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Renault_2015_logo.svg',
        money: 0,
        pp: 35000,
        year: 2024,
        fuel: 'Benzin',
        hp: 429,
        weight: 2100
    },
    {
        brand: 'Tractor',
        name: 'Tractor',
        logo: '',
        money: 0,
        pp: 17000,
        year: 2024,
        fuel: 'Benzin',
        hp: 429,
        weight: 2100
    },
    {
        brand: 'Volvo',
        name: 'Volvo FH 750',
        logo: '',
        money: 0,
        pp: 35000,
        year: 2024,
        fuel: 'Benzin',
        hp: 429,
        weight: 2100
    },
    {
        brand: 'Walton',
        name: 'Walton',
        logo: '',
        money: 0,
        pp: 26000,
        year: 2024,
        fuel: 'Benzin',
        hp: 429,
        weight: 2100
    },
];

const brandLogos = {
    'Alfa Romeo': 'img/brands/Alfa.png',
    'Aston Martin': 'img/brands/Aston.png',
    'Audi': 'img/brands/Audi.png',
    'BMW': 'img/brands/BMW.png',
    'Bentley': 'img/brands/Bentley.png',
    'Bugatti': 'img/brands/Bugatti.png',
    'Chevrolet': 'img/brands/Chevrolet.png',
    'Dodge': 'img/brands/Dodge.png',
    'Ducati': 'img/brands/Ducati.png',
    'Ferrari': 'img/brands/Ferrari.png',
    'Ford': 'img/brands/Ford.png',
    'Harley Davidson': 'img/brands/Harley.png',
    'Honda': 'img/brands/Honda.png',
    'Hyundai': 'img/brands/Hyundai.png',
    'Jeep': 'img/brands/Jeep.png',
    'Kawasaki': 'img/brands/Kawasaki.png',
    'Koenigsegg': 'img/brands/Koenigsegg.png',
    'Lada': 'img/brands/Lada.png',
    'Lamborghini': 'img/brands/Lamborghini.png',
    'Lincoln': 'img/brands/Lincoln.png',
    'Maserati': 'img/brands/Maseratti.png',
    'Mazda': 'img/brands/Mazda.png',
    'McLaren': 'img/brands/McLaren.png',
    'Mercedes': 'img/brands/Mercedes-Benz.png',
    'Mercedes-Benz': 'img/brands/Mercedes-Benz.png',
    'Mercedes Benz': 'img/brands/Mercedes-Benz.png',
    'Mitsubishi': 'img/brands/Mitsubishi.png',
    'Nissan': 'img/brands/Nissan.png',
    'Opel': 'img/brands/Opel.png',
    'Plymouth': 'img/brands/Plymouth.png',
    'Pontiac': 'img/brands/Pontiac.png',
    'Porsche': 'img/brands/Porsche.png',
    'Renault': 'img/brands/Renault.png',
    'Seat': 'img/brands/Seat.png',
    'Skoda': 'img/brands/Skoda.png',
    'Subaru': 'img/brands/Subaru.png',
    'Tesla': 'img/brands/Tesla.png',
    'Toyota': 'img/brands/Toyota.png',
    'Trabant': 'img/brands/Trabant.png',
    'Volkswagen': 'img/brands/Volkswagen.png',
    'Volvo': 'img/brands/Volvo.png'
};

function getBrandLogo(brand, fallback) {
    return brandLogos[brand] || brandLogos[brand.split(' ')[0]] || fallback || 'img/brands/admin.png';
}

document.addEventListener("DOMContentLoaded", () => {

    const carPage = document.getElementById("carshop-page");

    if (!carPage) return;

    carPage.innerHTML = `
        <div class="module-header">
         
        </div>

        <div class="vehicle-wrapper">

            <input
                type="text"
                id="vehicleSearch"
                class="vehicle-search"
                placeholder="Keresés..."
            >

            <table class="vehicle-table">

                <thead>
                    <tr>
                        <th>#</th>
                        <th>LOGÓ</th>
                        <th>NÉV</th>
                        <th>ÁR</th>
                        <th>PP</th>
                        <th>ÉVJÁRAT</th>
                        <th>ÜZEMANYAG</th>
                        <th>LE</th>
                        <th>SÚLY</th>
                    </tr>
                </thead>

                <tbody id="vehicleTableBody"></tbody>

            </table>

        </div>
    `;

    const tbody = document.getElementById("vehicleTableBody");

    function renderVehicles(list) {

        tbody.innerHTML = "";

        list.forEach((vehicle, index) => {
            const logoUrl = getBrandLogo(vehicle.brand, vehicle.logo);

            tbody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>

                    <td>
                        ${logoUrl ? `
                            <img
                                src="${logoUrl}"
                                class="brand-logo"
                                alt="${vehicle.brand}"
                            >
                        ` : '<span class="no-logo">Nincs kép</span>'}
                    </td>

                    <td>
                        <strong>${vehicle.name}</strong>
                    </td>

                    <td class="price-money">
                        ${vehicle.money.toLocaleString("hu-HU")} $
                    </td>

                    <td class="price-pp">
                        ${vehicle.pp.toLocaleString("hu-HU")} PP
                    </td>

                    <td>
                        ${vehicle.year}
                    </td>

                    <td>
                        ${vehicle.fuel}
                    </td>

                    <td>
                        ${vehicle.hp} LE
                    </td>

                    <td>
                        ${vehicle.weight.toLocaleString("hu-HU")} kg
                    </td>
                </tr>
            `;
        });
    }

    renderVehicles(vehicles);

    document
        .getElementById("vehicleSearch")
        .addEventListener("input", function () {

            const value = this.value.toLowerCase();

            const filtered = vehicles.filter(vehicle =>
                vehicle.name.toLowerCase().includes(value)
            );

            renderVehicles(filtered);
        });
});
