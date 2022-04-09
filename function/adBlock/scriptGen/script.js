const fs = require('fs');
let arr = [];
const website = ["github.com","heroku.com","instagram.com"];
for(let i=0;i<website.length;i++){
    let web = website[i];
    arr.push({
        "id": i+1,
        "priority": 1,
        "action": { "type": "redirect", "redirect": { "url": "https://facebook.com" } },
	"condition": {
		"urlFilter": `://*.${web}/*`, "resourceTypes": ["main_frame"]
	}
    })
}
fs.writeFileSync('../rule_1.json', JSON.stringify(arr));
console.log(arr);