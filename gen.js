const fs = require('fs');
let arr = [];
website = ["github.com","herouku.com"];
for(let i=0;i<2;i++){
    let web = website[i];
    arr.push({
        "id": i,
        "priority": 1,
        "action": { "type": "redirect", "redirect": { "url": "https://facebook.com" } },
	"condition": {
		"urlFilter": `${web}`, "resourceTypes": ["main_frame"]
	}
    })
}
fs.writeFileSync('./gen.json', JSON.stringify(arr));
console.log(arr);