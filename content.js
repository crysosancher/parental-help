console.log("Your bacha is safe");
console.log(location.href);
let u=[];//solution array
let c = 0;

function randomUrl() {
 u = [
    "http://powerline.io/",
    "https://www.cartoonnetworkhq.com/show/ben-10/games",
    "https://www.youtube.com/watch?v=p9TIP6Cc7I8",
    "https://www.youtube.com/watch?v=h3k1fcwXmXo",
    "https://www.youtube.com/watch?v=dbYWKVAeu6Y",
    "https://smashkarts.io/",
    "https://www.youtube.com/watch?v=26_BGVm2M0k",
    "https://supermarioplay.com/fullscreen",
    "https://www.youtube.com/watch?v=3adhnLRoxig",
    "https://www.numuki.com/games/ben-10/",
  ];
  console.log(u.length);
  return u[generateRandom(0,u.length-1)];
}
function generateRandom(min = 0, max = 9) {
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
  },3500);
  
}
