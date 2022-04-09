const fs = require("fs");
const arr = [];
async function main() {
  var text = fs.readFileSync("function/list/pornsite-list.txt", "utf8");
  var textByLine = text.split("\n");
  //console.log(textByLine.length);
  for (let i = 0; i < textByLine.length; i++) {
    let web = textByLine[i];
    if(web==""){ continue; }
    let redurl = randomUrl();
    await arr.push({
      id: i + 1,
      priority: 1,
      action: { type: "redirect", redirect: { url: redurl } },
      condition: {
        urlFilter: `${web}`,
        resourceTypes: ["main_frame"],
      },
    });
  }
}
const randomUrl = ()=>{
  let u = ['https://fightthenewdrug.org/wp-content/uploads/2021/05/FTND_YouAreNotABadPerson_v2-2021.jpg','http://powerline.io/','https://fightthenewdrug.org/things-to-do-instead-of-watch-porn/ ','https://wealthygorilla.com/19-reasons-stop-watching-porn/','https://fightthenewdrug.org/40-reasons-you-should-quit-watching-porn-today/']
  return u[generateRandom()];
}
function generateRandom(min = 0, max = 4) {
  // find diff
  let difference = max - min;
  // generate random number 
  let rand = Math.random();
  // multiply with difference 
  rand = Math.floor( rand * difference);

  // add with min value 
  rand = rand + min;

  return rand;
}

main().then(() => {
  fs.writeFileSync("function/adBlock/rule_1.json", JSON.stringify(arr));
  console.log(arr);
});
