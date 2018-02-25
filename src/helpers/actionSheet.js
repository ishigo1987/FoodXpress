module.exports = (titleActionSheet,itemsActioSheet)=>{
  return new Promise((resolve,reject)=>{
    let indexToReturn;
    const as = new tabris.ActionSheet({
        title: titleActionSheet,
        actions:itemsActioSheet
      }).on({
        select:({target: actionSheet, index})=>{
          indexToReturn = index;
        },
        close:()=>{
          resolve(indexToReturn);
        }
      }).open();
 });
}
