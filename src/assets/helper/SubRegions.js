function subregionsFunction(countries) {
    const allSubRegions = [
        ...new Set(countries.map((country) => country.subregion))
    ];
    const subRegions = new Map();
    subRegions.set('All', allSubRegions);
    countries.forEach((country) => {
        const region = country.region;
        const subregion = country.subregion;
        if (!subRegions.has(region)) {
            subRegions.set(region, [subregion]);
        } else {
            const subregionArray = subRegions.get(region);
            if (!subregionArray.includes(subregion)) {
                subregionArray.push(subregion);
                subRegions.set(region, subregionArray);
            }
        }
    });

    return subRegions;
}

export default subregionsFunction;
