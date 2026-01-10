const findMatchingClasses = (first, second) => {

    const null_arr = [null, null, null, null, null, null, null, null, null, null, null];

    const matching = {
        monday: [...null_arr],
        tuesday: [...null_arr],
        wednesday: [...null_arr],
        thursday: [...null_arr],
        friday: [...null_arr],
        saturday: [...null_arr],
    }

    console.log(first['monday']);
    console.log(second['monday']);

    ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].forEach((day) => {
        for (let i = 0; i < 11; i++) {
            if (first[day][i] == second[day][i]) {
                matching[day][i] = first[day][i];
            }
        }
    })

    const fillWindows = (originalRaspa) => {
        const raspa = structuredClone(originalRaspa);

        for (let key in raspa) {

            let first_entry;
            let last_entry;
    
            if (raspa[key] == null_arr) {
                continue;
            }
    
            for (let i = 0; i < 11; i++) {
                if (raspa[key][i] != null) {
    
                    last_entry = i;
    
                    if (first_entry == undefined) {
                        first_entry = i;
                    }
                }
            }     
    
            for (let i = first_entry; i < last_entry; i++) {
                if (raspa[key][i] == null) {
                    raspa[key][i] = "window";
                }
            }
        }

        return raspa;
    }

    const firstWithWindows = fillWindows(first);
    const secondWithWindows = fillWindows(second);

    for (let key in firstWithWindows) {
        if (firstWithWindows[key] == null_arr || secondWithWindows[key] == null_arr) {
            continue;
        }

        for (let i = 0; i < 11; i++) {
            if (firstWithWindows[key][i] == "window" && secondWithWindows[key][i] == "window") {
                matching[key][i] = "window";
            }
        }
    }

    return matching;
}

export { findMatchingClasses };