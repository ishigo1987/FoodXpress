exports.create = ()=>{
    "use strict";
    const themeColor = "#3e9e5e"
    const {Page,TextView,ImageView,ui,ScrollView,Button,device,app} = require('tabris');
    const lang = require("../helpers/handleLanguage.js")();
    let createnavigationView;
    const executeNavigationView = require("../helpers/navigationViewAnimation.js")(createnavigationView, false);
          executeNavigationView.toolbarVisible = false;
    const badOsVersionPage = new Page({background:themeColor}).appendTo(executeNavigationView);
    const scrollView = new ScrollView({top:0,bottom:0,right:0,left:0}).appendTo(badOsVersionPage);
    const wrongOsPicture = new ImageView({top:"15%",centerX:0,scaleMode:'fit',width:128,height:128,image:{src:"src/img/wrong_os.png"}}).appendTo(scrollView);
    const wrongOsTitle = new TextView({top:['prev()',50],left:"5%",right:"5%",textColor:"#fff",font:"20px roboto,noto",text:"Erreur lors de l'initialisation de FoodXpress"}).appendTo(scrollView);
    const wrongOsMessage = new TextView({alignment:"center",top:['prev()',10],left:"5%",right:"5%",markupEnabled:true,textColor:"#fff",font:"14px roboto,noto",text:"La version de votre systeme n'est pas prise en charge par FoodXpress<br />Vous devez avoir au moins une version d'android supérieur ou egale a 5 et une version d'ios supérieure ou egale a 9"}).appendTo(scrollView);
  
  };
  