function Subject(name, professor, cabinet) {
    this.name = name;
    this.professor = professor;
    this.cabinet = cabinet;
}

// ENGLISH
const tuleshova_218 = new Subject("English Language", "Tuleshova", "218");
const zhunusova_216b = new Subject("English Language", "Zhunusova", "216b");
const zhunusova_332b = new Subject("English Language", "Zhunusova", "332b");

// PP 2
const kelgenbayev_382 = new Subject("Programming Principles", "Kelgenbayev", "382");
const saduakas_270 = new Subject("Programming Principles", "Saduakas", "270");
const ismagambetova_222 = new Subject("Programming Principles", "Ismagambetova", "222");
const ismagambetova_2 = new Subject("Programming Principles", "Ismagambetova", "2");

// DISCRETE STRUCTURES
const mustafayeva_428 = new Subject("Discrete Structures", "Mustafayeva", "428");
const kalmurzayev_446 = new Subject("Discrete Structures", "Kalmurzayev", "446");
const nurlanbek_412 = new Subject("Discrete Structures", "Nurlanbek", "412");
const adilzhan_kunaeva = new Subject("Discrete Structures", "Adilzhan", "Kunaeva");
const adilzhan_32 = new Subject("Discrete Structures", "Adilzhan", "32");

// CALCULUS 2
const borsikbayeva_406 = new Subject("Calculus 2", "Borsikbayeva", "406");

// SOCIOLOGY
const zhampetova_461 = new Subject("Sociology", "Zhampetova", "461");
const zhampetova_336 = new Subject("Sociology", "Zhampetova", "336");

const empty_day = [null, null, null, null, null, null, null, null, null, null, null];

const Students = {
    "Zhanibek": {
        monday: [null, kelgenbayev_382, kelgenbayev_382, tuleshova_218, null, saduakas_270, saduakas_270, null, null, null, null],
        tuesday: empty_day,
        wednesday: [null, null, null, tuleshova_218, null, null, mustafayeva_428, mustafayeva_428, null, null, null],
        thursday: [null, null, null, null, null, null, borsikbayeva_406, borsikbayeva_406, null, null, null],
        friday: [zhampetova_406, zhampetova_406, mustafayeva_428, tuleshova_218, null, null, null, null, null, null, null],
        saturday: empty_day
    },
    "Adil": {
        monday: [null, kelgenbayev_382, kelgenbayev_382, tuleshova_218, null, saduakas_270, saduakas_270, null, null, null, null],
        tuesday: [null, null, null, null, null, null, borsikbayeva_406, borsikbayeva_406, null, null, null],
        wednesday: [null, kalmurzayev_446, kalmurzayev_446, tuleshova_218, nurlanbek_412, null, null, null, null, null, null],
        thursday: empty_day,
        friday: [null, null, null, tuleshova_218, null, zhampetova_336, zhampetova_336, null, null, null, null],
        saturday: empty_day
    },
    "Akniet": {
        monday: [null, kelgenbayev_382, kelgenbayev_382, tuleshova_218, null, saduakas_270, saduakas_270, null, null, null, null],
        tuesday: empty_day,
        wednesday: [null, null, null, tuleshova_218, null, null, mustafayeva_428, mustafayeva_428, null, null, null],
        thursday: [null, null, null, null, null, null, borsikbayeva_406, borsikbayeva_406, null, null, null],
        friday: [null, null, mustafayeva_428, tuleshova_218, null, zhampetova_336, zhampetova_336, null, null, null, null],
        saturday: empty_day
    },
    "Aisana": {
        monday: [null, adilzhan_kunaeva, adilzhan_kunaeva, null, null, null, null, zhunusova_216b, null, null, null],
        tuesday: [null, null, ismagambetova_222, ismagambetova_222, null, null, null, null, borsikbayeva_406, borsikbayeva_406, null],
        wednesday: [null, null, null, adilzhan_32, null, null, null, zhunusova_332b, null, null, null],
        thursday: [null, null, null, null, ismagambetova_2, ismagambetova_2, null, null, null, null, null],
        friday: [null, null, zhampetova_461, zhampetova_461, null, null, null, zhunusova_216b, null, null, null],
        saturday: empty_day
    }
}

export { Students };