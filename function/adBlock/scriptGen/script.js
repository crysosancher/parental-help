const fs = require("fs");
const arr = [];
async function main() {
  var text = fs.readFileSync("function/list/pornsite-list.txt", "utf8");
  var textByLine = text.split("\n");
  //console.log(textByLine.length);
  for (let i = 0; i < textByLine.length; i++) {
    let web = textByLine[i];
    await arr.push({
      id: i + 1,
      priority: 1,
      action: { type: "redirect", redirect: { url: "https://facebook.com" } },
      condition: {
        urlFilter: `://*.${web}/*`,
        resourceTypes: ["main_frame"],
      },
    });
  }
}
main().then(() => {
  fs.writeFileSync("function/adBlock/rule_1.json", JSON.stringify(arr));
  console.log(arr);
});
