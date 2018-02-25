"use strict";
const themeColor = '#3e9e5e';
require("./modules/tabrisUi.js")(`dark`, `#317e4b`, themeColor);
const {app,device} = require('tabris');
const storeFoodXpressInformations = localStorage.getItem("storeFoodXpressInformations");
if((device.platform === "Android" && device.version < 210) ||(device.platform.toUpperCase() === "IOS" && Math.round(device.version.substring(0,2)) < Math.round(9))){
   // badPhoneVersion.js
   let badPhoneVersion = require("./views/badPhoneVersion.js");
       badPhoneVersion.create();
 }else if(1==2){
   // Juste une condition bete dans le else if en fait il s'agit du test de la mise a jour
   // ca sert a savoir si l'utilisateur doit mettre a jour You! Messenger
 }else if(storeFoodXpressInformations === null){
   // vue de presentation et d'inscription a You! Messenger
  //  const youMessengerGettingAccessView = require("./views/youMessengerGettingAccess.js");
  //        youMessengerGettingAccessView.create();

  }else{
      // home.js
    //  let homePage = require("./views/home.js");
    //      homePage.create();
  }
