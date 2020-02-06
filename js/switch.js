console.clear();

$(document).ready(function() {
  
 

var superHeroes = {
    "1": {"name": "Captain America Navidad",
    "image": "capam1.jpg"
    },
    "2": {"name": "Superman",
    "image": "superman1.jpg"
},
    "3": {"name": "Superman Lego",
    "image": "superman2.jpg"
},
    "4": {"name": "Superman Grande",
    "image": "superman3.jpg"
},
    "5": {"name": "Captain America",
    "image": "capam2.jpg"
},

    "6": {"name": "Spiderman",
    "image": "spidman1.jpg"
},

    "7": {"name": "Hulk",
    "image": "hulk.jpg"}

};



function random() {
    let Value = Math.floor(Math.random() * 10);
    Value += 4;
    if (Value > 7) {
        Value = Value - 7;
    }; 
    
    return Value;
};




$("#capam1").on("click", function(){
    let ranNumber = random();
    $("#capam1").html(`<h2> ${superHeroes[ranNumber].name} </h2> <img src='images/${superHeroes[ranNumber].image}'>`);
});

    

 $("#superman1").on("click", function(){
    let ranNumber = random();
     $("#superman1").html(`<h2> ${superHeroes[ranNumber].name} </h2> <img src='images/${superHeroes[ranNumber].image}'>`);
         }); 

$("#superman2").on("click", function(){
        let ranNumber = random();
            $("#superman2").html(`<h2> ${superHeroes[ranNumber].name} </h2> <img src='images/${superHeroes[ranNumber].image}'>`);
        }); 

$("#superman3").on("click", function(){
            let ranNumber = random();
                $("#superman3").html(`<h2> ${superHeroes[ranNumber].name} </h2> <img src='images/${superHeroes[ranNumber].image}'>`);
            }); 
$("#capam2").on("click", function(){
            let ranNumber = random();
                $("#capam2").html(`<h2> ${superHeroes[ranNumber].name} </h2> <img src='images/${superHeroes[ranNumber].image}'>`);
                }); 
$("#spiman1").on("click", function(){
                    let ranNumber = random();
                        $("#spiman1").html(`<h2> ${superHeroes[ranNumber].name} </h2> <img src='images/${superHeroes[ranNumber].image}'>`);
                        });   
$("#hulk").on("click", function(){
                    let ranNumber = random();
                        $("#hulk").html(`<h2> ${superHeroes[ranNumber].name} </h2> <img src='images/${superHeroes[ranNumber].image}'>`);
                    }); 
                                                 

    
}); 
