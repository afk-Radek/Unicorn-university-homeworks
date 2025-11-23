/* Rozhodl jsem se napsat kod tak, aby byl více použitelný, tak jsem se rozhodl rozdělit jména a přijmení podle toho, jaké se nám vygeneruje pohlaví. */

const dtoIn = {
  count: 50,
  age: { min: 19, max: 35 },
};
console.log(main(dtoIn));

function main(dtoIn) {
  const firstNames = {
    male: [
      "Petr",
      "Karel",
      "Jan",
      "Lukáš",
      "Tomáš",
      "David",
      "Martin",
      "Jakub",
      "Ondřej",
      "Filip",
      "Matěj",
      "Michal",
      "Daniel",
      "Adam",
      "Vojtěch",
      "Jaroslav",
      "Marek",
      "Roman",
      "Radek",
      "Šimon",
      "Dominik",
      "Patrik",
      "Václav",
      "Josef",
      "Aleš",
    ],
    female: [
      "Jana",
      "Lucie",
      "Tereza",
      "Anna",
      "Eliška",
      "Kristýna",
      "Kateřina",
      "Veronika",
      "Adéla",
      "Natálie",
      "Karolína",
      "Klára",
      "Barbora",
      "Nikola",
      "Markéta",
      "Alžběta",
      "Monika",
      "Simona",
      "Hana",
      "Sabina",
      "Petra",
      "Laura",
      "Sofie",
      "Magdaléna",
      "Andrea",
    ],
  };

  const lastNames = {
    male: [
      "Novák",
      "Svoboda",
      "Novotný",
      "Dvořák",
      "Černý",
      "Procházka",
      "Kučera",
      "Veselý",
      "Horák",
      "Němec",
      "Marek",
      "Pospíšil",
      "Hájek",
      "Král",
      "Jelínek",
      "Růžička",
      "Beneš",
      "Fiala",
      "Sedláček",
      "Doležal",
      "Zeman",
      "Kolář",
      "Navrátil",
      "Čermák",
      "Vaněk",
    ],
    female: [
      "Nováková",
      "Svobodová",
      "Novotná",
      "Dvořáková",
      "Černá",
      "Procházková",
      "Kučerová",
      "Veselá",
      "Horáková",
      "Němcová",
      "Marková",
      "Pospíšilová",
      "Hájeková",
      "Králová",
      "Jelínková",
      "Růžičková",
      "Benešová",
      "Fialová",
      "Sedláčková",
      "Doležalová",
      "Zemanová",
      "Kolářová",
      "Navrátilová",
      "Čermáková",
      "Vaňková",
    ],
  };

  // Pracovní úvazky dle zadání
  const workloads = [10, 20, 30, 40];

  function getRandomFromArray(array) {
    // Ověření, že pole existuje a není prázdné
    if (!array || array.length === 0) return undefined;

    // Náhodný index v poli
    const randomIndex = Math.floor(Math.random() * array.length);

    return array[randomIndex];
  }

  // Funkce pro generování náhodného data narození v ISO formátu
  function randomBirthdate(minAge, maxAge) {
    const now = new Date(); // Aktuální datum
    const currentYear = now.getFullYear(); // Současný rok

    // Náhodný věk v zadaném pásmu
    const randomAge =
      Math.floor(Math.random() * (maxAge - minAge + 1)) + minAge;

    const year = currentYear - randomAge;

    // Náhodný měsíc a den , rozhodl jsem se úvest max počet dnů 28, protože např únor nemůže být více jak 28 dnů
    const month = Math.floor(Math.random() * 12);
    const day = Math.floor(Math.random() * 28) + 1;

    return new Date(Date.UTC(year, month, day)).toISOString();
  }

  // Výstupní pole zaměstnanců
  const result = [];

  for (let i = 0; i < dtoIn.count; i++) {
    // Náhodně vybereme pohlaví
    const gender = Math.random() < 0.5 ? "male" : "female";

    // Sestavíme objekt zaměstnance
    const employee = {
      gender: gender,
      birthdate: randomBirthdate(dtoIn.age.min, dtoIn.age.max), // Náhodné datum narození
      name: getRandomFromArray(firstNames[gender]), // Jméno odpovídající pohlaví
      surname: getRandomFromArray(lastNames[gender]), // Příjmení odpovídající pohlaví
      workload: getRandomFromArray(workloads), // Náhodný úvazek
    };

    result.push(employee);
  }

  return result;
}
