// Import the file system module
const fs = require('fs');

// Define the user data in JSON format
const user_json_format = [
	{
		"id": 1,
		"first_name": "Tanya",
		"last_name": "Nichols",
		"email": "tanya.nichols@test.com",
		"company_id": 2,
		"email_status": true,
		"active_status": false,
		"tokens": 23
	},
	{
		"id": 2,
		"first_name": "Brent",
		"last_name": "Rodriquez",
		"email": "brent.rodriquez@test.com",
		"company_id": 4,
		"email_status": false,
		"active_status": true,
		"tokens": 96
	},
	{
		"id": 3,
		"first_name": "Monica",
		"last_name": "Castro",
		"email": "monica.castro@notreal.com",
		"company_id": 3,
		"email_status": false,
		"active_status": true,
		"tokens": 69
	},
	{
		"id": 4,
		"first_name": "Bernard",
		"last_name": "Wells",
		"email": "bernard.wells@demo.com",
		"company_id": 4,
		"email_status": true,
		"active_status": false,
		"tokens": 74
	},
	{
		"id": 5,
		"first_name": "Natalie",
		"last_name": "Simpson",
		"email": "natalie.simpson@test.com",
		"company_id": 2,
		"email_status": true,
		"active_status": false,
		"tokens": 89
	},
	{
		"id": 6,
		"first_name": "Mary",
		"last_name": "George",
		"email": "mary.george@test.com",
		"company_id": 3,
		"email_status": true,
		"active_status": true,
		"tokens": 37
	},
	{
		"id": 7,
		"first_name": "Amanda",
		"last_name": "Pierce",
		"email": "amanda.pierce@fake.com",
		"company_id": 1,
		"email_status": true,
		"active_status": false,
		"tokens": 24
	},
	{
		"id": 8,
		"first_name": "Alexis",
		"last_name": "Robinson",
		"email": "alexis.robinson@test.com",
		"company_id": 3,
		"email_status": true,
		"active_status": false,
		"tokens": 45
	},
	{
		"id": 9,
		"first_name": "Terra",
		"last_name": "Beck",
		"email": "terra.beck@demo.com",
		"company_id": 1,
		"email_status": true,
		"active_status": false,
		"tokens": 41
	},
	{
		"id": 10,
		"first_name": "Ava",
		"last_name": "Obrien",
		"email": "ava.obrien@demo.com",
		"company_id": 4,
		"email_status": false,
		"active_status": false,
		"tokens": 93
	},
	{
		"id": 11,
		"first_name": "Alexander",
		"last_name": "Gardner",
		"email": "alexander.gardner@demo.com",
		"company_id": 4,
		"email_status": false,
		"active_status": true,
		"tokens": 40
	},
	{
		"id": 12,
		"first_name": "Sebastian",
		"last_name": "Weaver",
		"email": "sebastian.weaver@fake.com",
		"company_id": 2,
		"email_status": false,
		"active_status": true,
		"tokens": 66
	},
	{
		"id": 13,
		"first_name": "Noah",
		"last_name": "Knight",
		"email": "noah.knight@fake.com",
		"company_id": 4,
		"email_status": true,
		"active_status": true,
		"tokens": 23
	},
	{
		"id": 14,
		"first_name": "Adrian",
		"last_name": "Ward",
		"email": "adrian.ward@notreal.com",
		"company_id": 4,
		"email_status": false,
		"active_status": true,
		"tokens": 25
	},
	{
		"id": 15,
		"first_name": "Claire",
		"last_name": "Dean",
		"email": "claire.dean@test.com",
		"company_id": 3,
		"email_status": false,
		"active_status": true,
		"tokens": 98
	},
	{
		"id": 16,
		"first_name": "Sara",
		"last_name": "Gordon",
		"email": "sara.gordon@test.com",
		"company_id": 2,
		"email_status": false,
		"active_status": true,
		"tokens": 22
	},
	{
		"id": 17,
		"first_name": "Edgar",
		"last_name": "Simpson",
		"email": "edgar.simpson@notreal.com",
		"company_id": 2,
		"email_status": true,
		"active_status": true,
		"tokens": 67
	},
	{
		"id": 18,
		"first_name": "Brian",
		"last_name": "Jackson",
		"email": "brian.jackson@notreal.com",
		"company_id": 1,
		"email_status": false,
		"active_status": false,
		"tokens": 100
	},
	{
		"id": 19,
		"first_name": "Eileen",
		"last_name": "Lynch",
		"email": "eileen.lynch@fake.com",
		"company_id": 1,
		"email_status": true,
		"active_status": true,
		"tokens": 40
	},
	{
		"id": 20,
		"first_name": "Fernando",
		"last_name": "Fox",
		"email": "fernando.fox@fake.com",
		"company_id": 1,
		"email_status": true,
		"active_status": false,
		"tokens": 48
	},
	{
		"id": 21,
		"first_name": "Rodney",
		"last_name": "Barnes",
		"email": "rodney.barnes@test.com",
		"company_id": 5,
		"email_status": false,
		"active_status": false,
		"tokens": 43
	},
	{
		"id": 22,
		"first_name": "Nicholas",
		"last_name": "Berry",
		"email": "nicholas.berry@notreal.com",
		"company_id": 5,
		"email_status": false,
		"active_status": true,
		"tokens": 39
	},
	{
		"id": 23,
		"first_name": "Rodney",
		"last_name": "White",
		"email": "rodney.white@fake.com",
		"company_id": 4,
		"email_status": true,
		"active_status": false,
		"tokens": 53
	},
	{
		"id": 24,
		"first_name": "Kenzi",
		"last_name": "Fisher",
		"email": "kenzi.fisher@demo.com",
		"company_id": 4,
		"email_status": false,
		"active_status": false,
		"tokens": 51
	},
	{
		"id": 25,
		"first_name": "Rachel",
		"last_name": "Graves",
		"email": "rachel.graves@fake.com",
		"company_id": 5,
		"email_status": false,
		"active_status": true,
		"tokens": 26
	},
	{
		"id": 26,
		"first_name": "Elsie",
		"last_name": "Silva",
		"email": "elsie.silva@fake.com",
		"company_id": 3,
		"email_status": false,
		"active_status": true,
		"tokens": 49
	},
	{
		"id": 27,
		"first_name": "Joy",
		"last_name": "Woods",
		"email": "joy.woods@test.com",
		"company_id": 4,
		"email_status": false,
		"active_status": false,
		"tokens": 1
	},
	{
		"id": 28,
		"first_name": "Billy",
		"last_name": "Gomez",
		"email": "billy.gomez@notreal.com",
		"company_id": 1,
		"email_status": false,
		"active_status": false,
		"tokens": 39
	},
	{
		"id": 29,
		"first_name": "Yvonne",
		"last_name": "Perkins",
		"email": "yvonne.perkins@notreal.com",
		"company_id": 4,
		"email_status": false,
		"active_status": false,
		"tokens": 51
	},
	{
		"id": 30,
		"first_name": "Genesis",
		"last_name": "Carr",
		"email": "genesis.carr@demo.com",
		"company_id": 1,
		"email_status": true,
		"active_status": true,
		"tokens": 71
	},
	{
		"id": 31,
		"first_name": "Bob",
		"last_name": "Boberson",
		"email": "bob.boberson@test.com",
		"company_id": 2,
		"email_status": true,
		"active_status": true,
		"tokens": 23
	},
	{
		"id": 32,
		"first_name": "John",
		"last_name": "Boberson",
		"email": "john.boberson@test.com",
		"company_id": 2,
		"email_status": true,
		"active_status": true,
		"tokens": 15
	},
	{
		"id": 33,
		"first_name": "Jim",
		"last_name": "Jimerson",
		"email": "jim.jimerson@test.com",
		"company_id": 3,
		"email_status": true,
		"active_status": true,
		"tokens": 10
	},
	{
		"id": 33,
		"first_name": "Ned",
		"last_name": "Nederson",
		"email": "ned.nederson@test.com",
		"company_id": 3,
		"email_status": true,
		"active_status": true,
		"tokens": 3
	},
	{
		"id": 34,
		"first_name": "Paul",
		"last_name": "Berry",
		"email": "paul.berry@notreal.com",
		"company_id": 5,
		"email_status": true,
		"active_status": true,
		"tokens": 19
	}
];

// Define the company data in JSON format
const company_json_format = [
	{
		"id": 1,
		"name": "Blue Cat Inc.",
		"top_up": 71,
		"email_status": false
	},
	{
		"id": 2,
		"name": "Yellow Mouse Inc.",
		"top_up": 37,
		"email_status": true
	},
	{
		"id": 3,
		"name": "Red Horse Inc.",
		"top_up": 55,
		"email_status": true
	},
	{
		"id": 4,
		"name": "Yellow Frog Inc.",
		"top_up": 33,
		"email_status": false
	},
	{
		"id": 5,
		"name": "Purple Fish Inc.",
		"top_up": 82,
		"email_status": true
	},
	{
		"id": 6,
		"name": "Red Deer Inc.",
		"top_up": 60,
		"email_status": true
	}
];

// Initialize an empty string to store the output
let output = '';

// Sort the company data by id in ascending order
company_json_format.sort((a, b) => a.id - b.id);

// Loop through each company in the sorted company data
company_json_format.forEach(company => {
    // Initialize arrays to store users who were emailed and not emailed
    let usersEmailed = [];
    let usersNotEmailed = [];
    // Initialize a variable to store the total top ups for the company
    let totalTopUps = 0;
    
    // Loop through each user in the user data
    user_json_format.forEach(user => {
        // Check if the user is associated with the current company and if they are active
        if (user.company_id === company.id && user.active_status) {
            // Add the top up amount to the total top ups for the company
            totalTopUps += company.top_up;
            
            // Check if the user has email status set to true
            if (user.email_status) {
                // Add the user to the usersEmailed array with their updated token balance
                usersEmailed.push({
                    name: `${user.last_name}, ${user.first_name}`,
                    email: user.email,
                    previousTokens: user.tokens,
                    newTokens: user.tokens + company.top_up
                });
            } else {
                // Add the user to the usersNotEmailed array with their updated token balance
                usersNotEmailed.push({
                    name: `${user.last_name}, ${user.first_name}`,
                    email: user.email,
                    previousTokens: user.tokens,
                    newTokens: user.tokens + company.top_up
                });
            }
        }
    });
    
    // Sort the usersEmailed and usersNotEmailed arrays by last name in ascending order
    usersEmailed.sort((a, b) => a.name.localeCompare(b.name));
    usersNotEmailed.sort((a, b) => a.name.localeCompare(b.name));
    
    // Add information about the current company to the output string
    output += `Company Id: ${company.id}\n`;
    output += `Company Name: ${company.name}\n`;
    
    // Add information about users who were emailed to the output string
    output += `Users Emailed:\n`;
    usersEmailed.forEach(user => {
        output += `  ${user.name}, ${user.email}\n`;
        output += `    Previous Token Balance: ${user.previousTokens}\n`;
        output += `    New Token Balance: ${user.newTokens}\n`;
    });
    
    // Add information about users who were not emailed to the output string
    output += `Users Not Emailed:\n`;
    usersNotEmailed.forEach(user => {
        output += `  ${user.name}, ${user.email}\n`;
        output += `    Previous Token Balance: ${user.previousTokens}\n`;
        output += `    New Token Balance: ${user.newTokens}\n`;
    });
    
    // Add information about the total top ups for the current company to the output string
    output += `Total amount of top ups for ${company.name}: ${totalTopUps}\n\n`;
});

// Write the output string to a file named 'outputfinal.txt'
fs.writeFileSync('output.txt', output);