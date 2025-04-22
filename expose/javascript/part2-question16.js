let statistics = { 
    redCars: 21,
    blueCars: 45,
    greencars: 12,
    racecars: 5,
    blackCars: 40,
    rareCars: 2,
};

for(let property in statistics) {
    if(property.startsWith('r')||statistics[property]%2 != 0)
    {
        console.log(statistics[property]);
    }
}