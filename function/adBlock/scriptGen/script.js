const fs = require("fs");
const arr = [];
async function main() {
  var text = fs.readFileSync("function/list/pornsite-list.txt", "utf8");
  var textByLine = text.split("\n");
  //console.log(textByLine.length);
  for (let i = 0; i < textByLine.length; i++) {
    let web = textByLine[i];
    if (web == "") {
      continue;
    }
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
const randomUrl = () => {
  let u = [
    "https://res.cloudinary.com/dy9tzgg9i/image/upload/v1649535845/Bhai-Kya-Kar-Raha-Hai-Tu-Meme-Template-on-Ashneer-Grover_glgoqo.jpg",
    "https://res.cloudinary.com/dy9tzgg9i/image/upload/v1649536322/ias_zey7a3.jpg",
    "https://res.cloudinary.com/dy9tzgg9i/image/upload/v1649536497/kaha_tz2les.jpg",
    "https://res.cloudinary.com/dy9tzgg9i/image/upload/v1649536638/desh_yntxhl.jpg",
    "https://res.cloudinary.com/ddgbz6b9y/image/upload/v1649538007/WhatsApp_Image_2022-04-10_at_2.16.03_AM_ncjwno.png",
    "https://res.cloudinary.com/ddgbz6b9y/image/upload/v1649538007/WhatsApp_Image_2022-04-10_at_2.16.04_AM_1_yd46jj.png",
  ];
  return u[generateRandom()];
};
function generateRandom(min = 0, max = 5) {
  // find diff
  let difference = max - min;
  // generate random number
  let rand = Math.random();
  // multiply with difference
  rand = Math.floor(rand * difference);

  // add with min value
  rand = rand + min;

  return rand;
}

main().then(() => {
  fs.writeFileSync("function/adBlock/rule_1.json", JSON.stringify(arr));
  console.log(arr);
});
