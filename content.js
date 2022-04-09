console.log("Your bacha is safe");
console.log(location.href);
let c = 0;
function randomUrl() {
  let u = [
    "https://fightthenewdrug.org/wp-content/uploads/2021/05/FTND_YouAreNotABadPerson_v2-2021.jpg",
    "http://powerline.io/",
    "https://smashkarts.io/",
    "https://wealthygorilla.com/19-reasons-stop-watching-porn/",
    "https://fightthenewdrug.org/40-reasons-you-should-quit-watching-porn-today/",
  ];
  return u[generateRandom()];
}
function generateRandom(min = 0, max = 4) {
  // find diff
  let difference = max - min;
  // generate random number
  let rand = Math.random();
  // multiply with difference
  rand = Math.floor(rand * difference);

  // add with min value
  rand = rand + min;
console.log(rand);
  return rand;
}
if (
  location.href ==
    "https://res.cloudinary.com/dy9tzgg9i/image/upload/v1649535845/Bhai-Kya-Kar-Raha-Hai-Tu-Meme-Template-on-Ashneer-Grover_glgoqo.jpg" ||
  location.href ==
    "https://res.cloudinary.com/dy9tzgg9i/image/upload/v1649536322/ias_zey7a3.jpg" ||
  location.href ==
    "https://res.cloudinary.com/dy9tzgg9i/image/upload/v1649536497/kaha_tz2les.jpg" ||
  location.href ==
    "https://res.cloudinary.com/dy9tzgg9i/image/upload/v1649536638/desh_yntxhl.jpg" ||
  location.href ==
    "https://res.cloudinary.com/ddgbz6b9y/image/upload/v1649538007/WhatsApp_Image_2022-04-10_at_2.16.03_AM_ncjwno.png" ||
  location.href ==
    "https://res.cloudinary.com/ddgbz6b9y/image/upload/v1649538007/WhatsApp_Image_2022-04-10_at_2.16.04_AM_1_yd46jj.png"
) {
  let randmUrl = randomUrl();
  setTimeout(()=>{
    console.log("here");
    console.log(randmUrl);
    location.replace(randmUrl);
  },4000);
  
}
