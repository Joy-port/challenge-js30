const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

    function makeGreen() {
      const p = document.querySelector('p');
      p.style.color = '#BADA55';
      p.style.fontSize = '50px';
    }

    // Regular
    console.log("hello");
    // Interpolated
    console.log("WoW It's so weird %s", "đŠ");
    // Styled
    console.log("%c Cool Style", "font-size:50px, background-color:#efefef; text-shadow: 10px 5px 0px blue");
    // warning!
    console.warn("oh nooo");

    // Error :|
    console.error("it's not right");
    // Info
    console.info("icon gives u much more infomation");
    // Testing
    const p = document.querySelector('p');

    console.assert(p.classList.contains('ouch'), 'That is wrong!'); //if true ,then hide
    // clearing
    console.clear();
    // Viewing DOM Elements
    console.log(p);
    console.dir(p); //view properties
    // Grouping together

    dogs.forEach(item => {
        //start from console.group or
        console.groupCollapsed(item.name);
        console.log(`${item.name} is ${item.age} years old`);
        console.log(`${item.name} is ${item.age * 7} dog years old`);
        //end with
        console.groupEnd(item.name);
    });

    
    // counting
    console.count("me");
    console.count("her");
    console.count("her");
    console.count("him");
    console.count("him");
    console.count("him");
    console.count("her");
    console.count("him");
    console.count("him");
    console.count("me");

    // timing 
    //promise 
    console.time("fetching data"); //éééå§č¨įŽæé
    fetch('https://api.github.com/users/wesbos')
        .then(data => data.json())
        .then(data =>{
            console.timeEnd('fetching data');   //ééįĩæč¨įŽæé
            console.log(data);  //įĩæåžæé˛čĄéä¸čĄ
    });


    //**table
    console.table(dogs);