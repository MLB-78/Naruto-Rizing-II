// Menu Sandwich 
let toogle = document.querySelector(".toogle");
let body = document.querySelector('body');

// Commencement du quizz
let btn = document.getElementById("commencez");

// Questionnaire 1
let questionnaire = document.querySelector(".questionnaire");
let bonne_repId = document.getElementById("bon");
let notBonne_repId = document.getElementById("notbon");
let notBonne_repId1_2 = document.getElementById("notbon_1.2");

// Questionnaire 2 
let questionnaire2 = document.querySelector(".questionnaire2");
let bonne_repId2 = document.getElementById("bon2");
let notBonne_repId2 = document.getElementById("notbon2");

// Questionnaire 3
let questionnaire3 = document.querySelector(".questionnaire3");
let bonne_repId3 = document.getElementById("bon3");
let notBonne_repId3 = document.getElementById("notbon3");
let notBonne_repId3_2 = document.getElementById("notbon_3.2");

// Questionnaire 4
let questionnaire4 = document.querySelector(".questionnaire4");
let bonne_repId4 = document.getElementById("bon4");
let notBonne_repId4 = document.getElementById("notbon4");
let notBonne_repId4_2 = document.getElementById("notbon_4.2");
let notBonne_repId4_3 = document.getElementById("notbon_4.3");

// Questionnaire 5
let questionnaire5 = document.querySelector(".questionnaire5");
let bonne_repId5 = document.getElementById("bon5");
let notBonne_repId5 = document.getElementById("notbon5");

// Les Réponses Final
let rep_global = document.querySelector(".responses");

let rep_final1 = document.querySelector(".response_final1");
let rep_final2 = document.querySelector(".response_final2");
let rep_final3 = document.querySelector(".response_final3");
let rep_final4 = document.querySelector(".response_final4");
let rep_final5 = document.querySelector(".response_final5");



// Si est cliqué : Questionnaire 1
clicked_bon1 = () =>{

    rep_final1.classList.add("finGood2");

}

clicked_notbon1 = () => {

    rep_final1.classList.add("finFalse2");


}

clicked_notbon1_2 = () => {

    rep_final1.classList.add("finFalse2");


}

// Si est cliqué : Questionnaire 2
clicked_bon2 = () =>{

    rep_final2.classList.add("finGood2");

}

clicked_notbon2 = () => {

    rep_final2.classList.add("finFalse2");


}

// Si est cliqué : Questionnaire 3
clicked_bon3 = () =>{

    rep_final3.classList.add("finGood2");

}

clicked_notbon3 = () => {

    rep_final3.classList.add("finFalse2");


}

clicked_notbon3_2 = () => {

    rep_final3.classList.add("finFalse2");


}

// Si est cliqué : Questionnaire 4
clicked_bon4 = () =>{

    rep_final4.classList.add("finGood2");

}

clicked_notbon4 = () =>{

    rep_final4.classList.add("finFalse2");

}

clicked_notbon4_2 = () =>{

    rep_final4.classList.add("finFalse2");

}

clicked_notbon4_3 = () =>{

    rep_final4.classList.add("finFalse2");

}

// Si est cliqué : Questionnaire 5

clicked_bon5 = () =>{

    rep_final5.classList.add("finGood2");

}

clicked_notbon5 = () =>{

    rep_final5.classList.add("finFalse2");

}


// Commencement du quizz (instruction)
btn.addEventListener("click", () => {
    
    questionnaire.classList.add("awd");
    
})

// Questionnaire 1 (instruction)

bonne_repId.addEventListener('click', () => {

   
    bonne_repId.classList.add("finGood");
    notBonne_repId.style.display = "none";
    notBonne_repId1_2.style.display = "none";

    time1 = () =>{
        
        questionnaire.style.display = "none";
        questionnaire2.style.display = "block";
    }

    setTimeout(time1, 1500)

})

notBonne_repId.addEventListener('click', () => {

   
    notBonne_repId.classList.add("finFalse");
    notBonne_repId1_2.style.display = "none";
    bonne_repId.style.display = "none";

    time1_2 = () =>{
        
        questionnaire.style.display = "none";
        questionnaire2.style.display = "block";
    }

    setTimeout(time1_2, 1500)

})

notBonne_repId1_2.addEventListener('click', () => {

   
    notBonne_repId1_2.classList.add("finFalse");
    notBonne_repId.style.display = "none";
    bonne_repId.style.display = "none";

    time1_3 = () =>{
        
        questionnaire.style.display = "none";
        questionnaire2.style.display = "block";
    }

    setTimeout(time1_3, 1500)

})



// Questionnaire 2 (instruction)

bonne_repId2.addEventListener('click', () => {

   
    bonne_repId2.classList.add("finGood");
    notBonne_repId2.style.display = "none";

    time2 = () =>{
        
        questionnaire2.style.display = "none";
        questionnaire3.style.display = "block";
    }

    setTimeout(time2, 1500)

})

notBonne_repId2.addEventListener('click', () => {

    notBonne_repId2.classList.add("finFalse");
    bonne_repId2.style.display = "none";

    time2_2 = () =>{
        
        questionnaire2.style.display = "none";
        questionnaire3.style.display = "block";
    }

    setTimeout(time2_2, 1500)

})

// Qestionnaire 3

bonne_repId3.addEventListener('click', () => {

   
    bonne_repId3.classList.add("finGood");
    notBonne_repId3.style.display = "none";
    notBonne_repId3_2.style.display = "none";

    time3 = () =>{
        
        questionnaire3.style.display = "none";
        questionnaire4.style.display = "block";
    }

    setTimeout(time3, 1500)

})

notBonne_repId3.addEventListener('click', () => {

   
    notBonne_repId3.classList.add("finFalse");
    notBonne_repId3_2.style.display = "none";
    bonne_repId3.style.display = "none";

    time3_2 = () =>{
        
        questionnaire3.style.display = "none";
        questionnaire4.style.display = "block";
    }

    setTimeout(time3_2, 1500)

})

notBonne_repId3_2.addEventListener('click', () => {

   
    notBonne_repId3_2.classList.add("finFalse");
    notBonne_repId3.style.display = "none";
    bonne_repId3.style.display = "none";

    time3_3 = () =>{
        
        questionnaire3.style.display = "none";
        questionnaire4.style.display = "block";
    }

    setTimeout(time3_3, 1500)

})

// Questionnaire 4 (instruction)

bonne_repId4.addEventListener('click', () => {

   
    bonne_repId4.classList.add("finGood");
    notBonne_repId4.style.display = "none";
    notBonne_repId4_2.style.display = "none";
    notBonne_repId4_3.style.display = "none";

    time4 = () =>{
        
        questionnaire4.style.display = "none";
        questionnaire5.style.display = "block";
    }

    setTimeout(time4, 1500)

})

notBonne_repId4.addEventListener('click', () => {

    notBonne_repId4.classList.add("finFalse");
    notBonne_repId4_2.style.display = "none";
    notBonne_repId4_3.style.display = "none";
    bonne_repId4.style.display = "none";

    time4_2 = () =>{
        
        questionnaire4.style.display = "none";
        questionnaire5.style.display = "block";
    }

    setTimeout(time4_2, 1500)

})

notBonne_repId4_2.addEventListener('click', () => {

    notBonne_repId4_2.classList.add("finFalse");
    notBonne_repId4.style.display = "none";
    notBonne_repId4_3.style.display = "none";
    bonne_repId4.style.display = "none";

    time4_3 = () =>{
        
        questionnaire4.style.display = "none";
        questionnaire5.style.display = "block";
    }

    setTimeout(time4_3, 1500)

})

notBonne_repId4_3.addEventListener('click', () => {

    notBonne_repId4_3.classList.add("finFalse");
    notBonne_repId4.style.display = "none";
    notBonne_repId4_2.style.display = "none";
    bonne_repId4.style.display = "none";

    time4_4 = () =>{
        
        questionnaire4.style.display = "none";
        questionnaire5.style.display = "block";
    }

    setTimeout(time4_4, 1500)

})

// Questionnaire 5

bonne_repId5.addEventListener('click', () => {

   
    bonne_repId5.classList.add("finGood");
    notBonne_repId5.style.display = "none";

    time5 = () =>{
        
        questionnaire5.style.display = "none";
        rep_global.classList.add("final");
    }

    setTimeout(time5, 1500)

})

notBonne_repId5.addEventListener('click', () => {

    notBonne_repId5.classList.add("finFalse");
    bonne_repId5.style.display = "none";

    time5_2 = () =>{
        
        questionnaire5.style.display = "none";
        rep_global.classList.add("final");
        
    }

    setTimeout(time5_2, 1500)

})


// Menu Sandwich (instruction)
toogle.addEventListener('click',() => {

    body.classList.toggle('open');

})



