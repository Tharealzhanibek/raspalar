function Subject(name, professor, cabinet) {
    this.name = name;
    this.professor = professor;
    this.cabinet = cabinet;
}

// ENGLISH
const tuleshova_218 = new Subject("English Language", "Tuleshova", "218");
const zhunusova_216b = new Subject("English Language", "Zhunusova", "216b");
const zhunusova_332b = new Subject("English Language", "Zhunusova", "332b");
const zhunusova_251 = new Subject("English Language", "Zhunusova", "332b");
const zhunisova_5 = new Subject("English Language", "Zhunisova", "5");
const koyantayeva_349 = new Subject("English Language", "Koyantayeva", "349");
const koyantayeva_156 = new Subject("English Language", "Koyantayeva", "156");
const li_435 = new Subject("English Language", "Li", "156");
const li_335 = new Subject("English Language", "Li", "332b");
const li_332b = new Subject("English Language", "Li", "332b");
const tasybayev_45 = new Subject("English Language", "Tasybayev", "45");

// PP 2
const kelgenbayev_382 = new Subject("Programming Principles 2", "Kelgenbayev", "382");
const saduakas_270 = new Subject("Programming Principles 2", "Saduakas", "270");
const ismagambetova_222 = new Subject("Programming Principles 2", "Ismagambetova", "222");
const ismagambetova_2 = new Subject("Programming Principles 2", "Ismagambetova", "2");
const baisakov_414 = new Subject("Programming Principles 2", "Baisakov", "414");
const baisakov_269 = new Subject("Programming Principles 2", "Baisakov", "269");
const sultan_438 = new Subject("Programming Principles 2", "Sultan", "438");
const usyukin_367 = new Subject("Programming Principles 2", "Usyukin", "367");
const usyukin_270 = new Subject("Programming Principles 2", "Usyukin", "270");

// DISCRETE STRUCTURES
const mustafayeva_428 = new Subject("Discrete Structures", "Mustafayeva", "428");
const mustafayeva_222 = new Subject("Discrete Structures", "Mustafayeva", "222");
const mustafayeva_249 = new Subject("Discrete Structures", "Mustafayeva", "249");
const mustafayeva_32 = new Subject("Discrete Structures", "Mustafayeva", "32");
const kalmurzayev_446 = new Subject("Discrete Structures", "Kalmurzayev", "446");
const nurlanbek_412 = new Subject("Discrete Structures", "Nurlanbek", "412");
const adilzhan_kunaeva = new Subject("Discrete Structures", "Adilzhan", "Kunaeva");
const adilzhan_32 = new Subject("Discrete Structures", "Adilzhan", "32");
const tazabekova_305 = new Subject("Discrete Structures", "Tazabekova", "305");
const tazabekova_410 = new Subject("Discrete Structures", "Tazabekova", "410");
const kaiym_kunaeva = new Subject("Discrete Structures", "Kaiym", "Kunaeva");
const kaiym_412 = new Subject("Discrete Structures", "Kaiym", "412");

// CALCULUS 2
const borsikbayeva_406 = new Subject("Calculus 2", "Borsikbayeva", "406");
const sarsenova_726 = new Subject("Calculus 2", "Sarsenova", "726");

// SOCIOLOGY
const zhampetova_461 = new Subject("Sociology", "Zhampetova", "461");
const zhampetova_336 = new Subject("Sociology", "Zhampetova", "336");
const zhampetova_232 = new Subject("Sociology", "Zhampetova", "232");

const empty_day = [null, null, null, null, null, null, null, null, null, null, null];

const Students = {
    "Kamila": {
        monday: [null, baisakov_414, li_435, null, null, tasybayev_45, null, null, null, null, null],
        tuesday: [null, null, null, baisakov_269, baisakov_269, null, null, null, null, null, null],
        wednesday: [null, null, null, null, tasybayev_45, mustafayeva_428, mustafayeva_428, null, null, null, null],
        thursday: [...empty_day],
        friday: [zhampetova_461, zhampetova_461, mustafayeva_32, null, null, tasybayev_45, null, null, sarsenova_726, sarsenova_726, null],
        saturday: [...empty_day]
    },
    "Zhubanysh": {
        monday: [usyukin_367, usyukin_367, zhunisova_5, null, null, null, null, null, null, null, null],
        tuesday: [...empty_day],
        wednesday: [usyukin_270, usyukin_270, zhunisova_5, mustafayeva_222, mustafayeva_222, null, null, null, null, null, null],
        thursday: [null, null, null, null, borsikbayeva_406, borsikbayeva_406, null, mustafayeva_249, null, null, null],
        friday: [zhampetova_461, zhampetova_461, zhunisova_5, null, null, null, null, null, null, null, null],
        saturday: [...empty_day]
    },
    "Elaman": {
        monday: [null, baisakov_414, li_435, null, null, null, kaiym_412, kaiym_412, null, null, null],
        tuesday: [null, null, null, baisakov_269, baisakov_269, null, null, null, null, null, null],
        wednesday: [null, null, null, li_335, null, null, null, kaiym_412, null, null, null],
        thursday: [...empty_day],
        friday: [null, null, null, li_332b, null, zhampetova_336, zhampetova_336, null, sarsenova_726, sarsenova_726, null],
        saturday: [...empty_day]
    },
    "Zhanibek": {
        monday: [null, kelgenbayev_382, kelgenbayev_382, tuleshova_218, null, saduakas_270, saduakas_270, null, null, null, null],
        tuesday: [...empty_day],
        wednesday: [null, null, null, tuleshova_218, null, null, mustafayeva_428, mustafayeva_428, null, null, null],
        thursday: [null, null, null, null, null, null, borsikbayeva_406, borsikbayeva_406, null, null, null],
        friday: [zhampetova_461, zhampetova_461, mustafayeva_428, tuleshova_218, null, null, null, null, null, null, null],
        saturday: [...empty_day]
    },
    "Aminya": {
        monday: [null, kelgenbayev_382, kelgenbayev_382, null, null, saduakas_270, saduakas_270, null, zhunusova_251, null, null],
        tuesday: [...empty_day],
        wednesday: [null, kalmurzayev_446, kalmurzayev_446, null, nurlanbek_412, null, null, null, zhunusova_251, null, null],
        thursday: [null, null, null, null, null, null, borsikbayeva_406, borsikbayeva_406, null, null, null],
        friday: [null, null, zhampetova_461, zhampetova_461, null, null, null, null, zhunusova_251, null, null],
        saturday: [...empty_day]
    },
    "Dana": {
        monday: [null, kelgenbayev_382, kelgenbayev_382, null, null, saduakas_270, saduakas_270, null, zhunusova_251, null, null],
        tuesday: [...empty_day],
        wednesday: [null, null, null, mustafayeva_222, mustafayeva_222, null, null, null, zhunusova_251, null, null],
        thursday: [null, null, null, null, null, null, borsikbayeva_406, borsikbayeva_406, null, mustafayeva_249, null],
        friday: [null, null, null, null, null, zhampetova_336, zhampetova_336, null, zhunusova_251, null, null],
        saturday: [...empty_day]
    },
    "Adil": {
        monday: [null, kelgenbayev_382, kelgenbayev_382, tuleshova_218, null, saduakas_270, saduakas_270, null, null, null, null],
        tuesday: [null, null, null, null, null, null, borsikbayeva_406, borsikbayeva_406, null, null, null],
        wednesday: [null, kalmurzayev_446, kalmurzayev_446, tuleshova_218, nurlanbek_412, null, null, null, null, null, null],
        thursday: [...empty_day],
        friday: [null, null, null, tuleshova_218, null, zhampetova_336, zhampetova_336, null, null, null, null],
        saturday: [...empty_day]
    },
    "Akniet": {
        monday: [null, kelgenbayev_382, kelgenbayev_382, tuleshova_218, null, saduakas_270, saduakas_270, null, null, null, null],
        tuesday: [...empty_day],
        wednesday: [null, null, null, tuleshova_218, null, null, mustafayeva_428, mustafayeva_428, null, null, null],
        thursday: [null, null, null, null, null, null, borsikbayeva_406, borsikbayeva_406, null, null, null],
        friday: [null, null, mustafayeva_428, tuleshova_218, null, zhampetova_336, zhampetova_336, null, null, null, null],
        saturday: [...empty_day]
    },
    "Dias": {
        monday: [koyantayeva_349, baisakov_414, baisakov_414, baisakov_269, baisakov_269, null, null, null, null, null, null],
        tuesday: [...empty_day],
        wednesday: [koyantayeva_349, null, null, null, null, tazabekova_305, tazabekova_305, null, tazabekova_410, null, null],
        thursday: [...empty_day],
        friday: [koyantayeva_349, null, null, null, null, zhampetova_336, zhampetova_336, null, sarsenova_726, sarsenova_726, null],
        saturday: [...empty_day]
    },
    "Daulet": {
        monday: [null, null, koyantayeva_156, kelgenbayev_382, kelgenbayev_382, null, null, null, null, null, null],
        tuesday: [...empty_day],
        wednesday: [null, null, koyantayeva_156, null, sultan_438, sultan_438, mustafayeva_428, mustafayeva_428, null, null, null],
        thursday: [null, null, null, zhampetova_232, zhampetova_232, null, borsikbayeva_406, borsikbayeva_406, null, null, null],
        friday: [null, mustafayeva_32, koyantayeva_156, null, null, null, null, null, null, null, null],
        saturday: [...empty_day]
    },
    "Aisana": {
        monday: [null, adilzhan_kunaeva, adilzhan_kunaeva, null, null, null, null, zhunusova_216b, null, null, null],
        tuesday: [null, null, ismagambetova_222, ismagambetova_222, null, null, null, null, borsikbayeva_406, borsikbayeva_406, null],
        wednesday: [null, null, null, adilzhan_32, null, null, null, zhunusova_332b, null, null, null],
        thursday: [null, null, null, null, ismagambetova_2, ismagambetova_2, null, null, null, null, null],
        friday: [null, null, zhampetova_461, zhampetova_461, null, null, null, zhunusova_216b, null, null, null],
        saturday: [...empty_day]
    }
}

export { Students };