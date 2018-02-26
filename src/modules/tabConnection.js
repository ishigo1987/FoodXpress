module.exports = (tab)=>{
  return new Promise((resolve,reject)=>{
    const themeColor = '#3e9e5e';
    const font14px ="14px roboto, noto";
    const {TextView,ImageView,ui,ScrollView,Button,device,Composite,TextInput} = require('tabris');
    let iosOrAndroid = device.platform;
    let compositeLogin = compositePassword = inputLogin = inputPassword = undefined;
    const backgroundImage = new ImageView({top:0,right:0,bottom:0,left:0,image:{src:'src/img/r.jpg'},scaleMode:"fill"}).appendTo(tab);
    const scrollView = new ScrollView({top:0,right:0,bottom:0,left:0,background:'rgba(0,0,0,0.7)'}).appendTo(tab);
    const logo = new ImageView({top:"7%",centerX:0,scaleMode:'fill',image:{src:"src/img/logo.png"}}).appendTo(scrollView);
    const connectionText = new TextView({top:['prev()',30],alignment:'center',left:15,right:15,textColor:'#9e9e9e',text:'Se connecter',font:'18px roboto'}).appendTo(scrollView);
    if(iosOrAndroid === "Android"){
      compositeLogin = new Composite({top:['prev()',20],left:15,right:15,cornerRadius:3,height:50,background:'#9e9e9e'}).appendTo(scrollView);
      inputLogin = new TextInput({left:15,right:15,centerY:0,message:"Entrez votre Téléphone",font:font14px,textColor:"#757575",backgroundImage:null,keyboard:'phone'}).appendTo(compositeLogin);
      compositePassword = new Composite({top:['prev()',20],left:15,right:15,cornerRadius:3,height:50,background:'#9e9e9e'}).appendTo(scrollView);
      inputPassword = new TextInput({left:15,right:15,centerY:0,message:"Entrez votre mot de passe",font:font14px,textColor:"#757575",backgroundImage:null,type:'password'}).appendTo(compositePassword);
    }else{
      inputLogin = new TextInput({top:['prev()',20],left:15,right:15,height:45,message:"Entrez votre Téléphone",font:font14px,textColor:"#757575",autoCorrect:true,keyboard:'phone'}).appendTo(scrollView);
      inputPassword = new TextInput({top:['prev()',20],left:15,right:15,height:45,message:"Entrez votre mot de passe",font:font14px,textColor:"#757575",type:'password'}).appendTo(scrollView);
    }
    const forgottenPasswordText = new TextView({top:['prev()',10],left:15,right:15,textColor:themeColor,text:'Mot de passe oublié ?',font:'14px'})
    .on('tap',()=>{

    }).appendTo(scrollView);
    const buttonConnection = new Button({alignment:"center",top:['prev()',30],left:15,right:15,height:55,background:themeColor,textColor:"#fff",text:'Continuer'})
    .on('select',()=>{

    }).appendTo(scrollView);
    const inscriptionText = new TextView({top:['prev()',20],left:15,right:15,textColor:'#9e9e9e',alignment:'center',text:"Vous n'avez pas encore de compte?"}).appendTo(scrollView);
    const inscriptionLink = new TextView({top:['prev()',10],left:15,right:15,alignment:'center',textColor:themeColor,text:'Inscrivez vous'})
    .on('tap',()=>{
      resolve("Button Inscription clicked");
    }).appendTo(scrollView);
  });
};