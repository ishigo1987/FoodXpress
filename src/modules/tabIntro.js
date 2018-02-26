module.exports = (tab)=>{
  return new Promise((resolve,reject)=>{
    const themeColor = '#3e9e5e';
    const {TextView,ImageView,ui,ScrollView,Button} = require('tabris');
    const scrollView = new ScrollView({top:0,right:0,bottom:0,left:0,background:themeColor}).appendTo(tab);
    const logo = new ImageView({top:"13%",centerX:0,scaleMode:'fill',image:{src:"src/img/logo.png"}}).appendTo(scrollView);
    const textIntro = new TextView({top:['prev()',15],alignment:'center',left:15,right:15,textColor:'#ffffff',font:'bold 28px',text:'Bienvenue'}).appendTo(scrollView);
    const textDescriptionFoodXpress = new TextView({alignment:"center",top:['prev()',30],left:15,right:15,textColor:"#ffffff",font:"17px roboto",text:"FoodXpress est une plateforme vous offrant la possibilité de manger un delicieux repas comme à la maison, sans vous déplacer, en vous faisant livrer sur votre lieu de service ou a votre domicile."}).appendTo(scrollView);
    const openHours = new TextView({alignment:"center",top:['prev()',15],left:15,right:15,textColor:"#ffffff",text:"Jours de livraison: de Lundi a Vendredi de 12h00 à 16h00"}).appendTo(scrollView);
    const continueButton = new Button({alignment:"center",top:['prev()',30],left:15,right:15,height:50,background:"#fff",textColor:themeColor,text:'Continuer'})
    .on('select',()=>{
      resolve("Button Continue Clicked");
    }).appendTo(scrollView);
  });
};