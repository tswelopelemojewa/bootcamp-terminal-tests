function findItemsOver20(plus20){
    let over20 = [];
   for(let i in plus20){
       let items = plus20[i];
         if(items.qty > 20){
              over20.push(plus20[i])
          }
   }
 return over20;
}

export default findItemsOver20;