var persons = [
    {
        firstname: "Carol",
        lastname: "Baxtor",
        Company: "Revature",
        favfood: ["PadThai", "Burgers", "Sushi"],
        officeAddress: {
            buildingNumber: "11730",
            street1: "Plaza America",
            street2: "sunset dr #205",
            city: "Reston",
            state: "VA",
            zipcode: "20190"
        }
    },
    {
        firstname: "Karan",
        lastname: "Dhirar",
        Company: "EY",
        favfood: ["Tacos", "noodles", "salads"],
        officeAddress: {
            buildingNumber: "123",
            street1: "cooper dr",
            street2: "USF",
            city: "Tampa",
            state: "FL",
            zipcode: "11001"
        }
    }
];
for(let i=0;i<persons.length;i++)
    console.log(persons[i].firstname + " " + persons[i].lastname);