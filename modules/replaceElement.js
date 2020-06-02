

module.exports=(temp,el)=>{
    let output=temp.replace(/{%PRODUCT_NAME%}/g,el.productName);
     output=output.replace(/{%IMAGE%}/g,el.image);
     output=output.replace(/{%PRODUCT_PRICE%}/g,el.price);
     output=output.replace(/{%PRODUCT_QUANTITY%}/g,el.quantity);
     output=output.replace(/{%PRODUCT_COUNTRY%}/g,el.from);
     output=output.replace(/{%NUTRIENTS_NAME%}/g,el.nutrients);
     output=output.replace(/{%PRODUCT_DESC%}/g,el.description);
     output=output.replace(/{%ID%}/g,el.id);
   
    if(!el.organic)
     output=output.replace(/{%NOT_ORGANIC%}/g,'not-organic');
    return output;
   }