exports.create = ()=>{
    "use strict";
    const themeColor = "#3e9e5e";
    const font15px = "15px roboto, noto";
    const {Page,TextView,ImageView,ui,ScrollView,Button,TabFolder,Tab,Composite,TextInput,device,DateDialog,SearchAction} = require('tabris');
    ui.statusBar.displayMode = "float";
    ui.statusBar.background = 'rgba(0, 0, 0, 0)';
    let createnavigationView;
    const executeNavigationView = require("../helpers/navigationViewAnimation.js")(createnavigationView, false);
          executeNavigationView.toolbarVisible = false;
    const gettingAccesPage = new Page({}).appendTo(executeNavigationView);
    const arrayTabTitle = ["tabConnection","tabInscription","tabVerificationCode","tabForgottenPassword","tabEnterNewPassword"];
    const tabFolderGettingAccessUi = new TabFolder({left: 0, top: 0, right: 0, bottom:0,paging:false,tabBarLocation:"hidden",id:'tabFolderGettingAccessUi'})
  .on("scroll", function({selection:tab}){
    if(arrayTabTitle.includes(tab.title) === true){
      this.paging = false;
    }
  }).appendTo(gettingAccesPage);
  const tabIntro = new Tab({title:"tabIntro"}).appendTo(tabFolderGettingAccessUi);
  const tabConnection = new Tab({title:"tabConnection"}).appendTo(tabFolderGettingAccessUi);
  const tabInscription = new Tab({title:"tabInscription"}).appendTo(tabFolderGettingAccessUi);
  const tabVerificationCode = new Tab({title:"tabVerificationCode"}).appendTo(tabFolderGettingAccessUi);
  const tabForgottenPassword = new Tab({title:"tabForgottenPassword",id:"tabForgottenPassword"}).appendTo(tabFolderGettingAccessUi);
  const tabEnterNewPassword = new Tab({title:"tabEnterNewPassword"}).appendTo(tabFolderGettingAccessUi);
  tabFolderGettingAccessUi.selection = tabIntro;
  const handleTabIntro = require('../modules/tabIntro.js')(tabIntro);
        handleTabIntro.then((selection)=>{
         if(selection === "Button Continue Clicked"){
            tabFolderGettingAccessUi.paging = true;
            tabFolderGettingAccessUi.selection = tabConnection;
         }
        }).catch((error)=>{
          console.log(error);
        });
  
  const handleTabConnection = require('../modules/tabConnection.js')(tabConnection);
        handleTabConnection.then((selection)=>{
         if(selection === 'Button Inscription clicked'){
           console.log('you le fort');
         }
        }).catch((error)=>{
           console.log(error);
        });
}