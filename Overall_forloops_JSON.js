let req = new XMLHttpRequest();

req.open("GET","https://restcountries.com/v2/all");
req.onload = ()=>{
  let a = JSON.parse(req.response);

  //I have added all overall loops and commented it. Please uncomment the specific loop to run and get response.
    ////////////////////// For Loop ///////////////////

    for(let i = 0; i<a.length; i++){
      console.log(a[i].flags.png);
    };

    /////////////////////////For in ////////////////////
    // for (let x in a){
    //         console.log(a[x].name);
    // };

    /////////////////////////For of ////////////////////    
    // for(x of a){
    //     console.log(x);

    /////////////////////////ForEach ////////////////////
    // a.forEach(element => {
    //     console.log(element.nativeName);
    // });
};
req.send();