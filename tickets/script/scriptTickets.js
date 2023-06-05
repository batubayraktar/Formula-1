document.getElementById("ticekts_volwassen").addEventListener("click", ()=>{
    let kaartjeVolw = document.getElementById("ticekts_volwassen").value;
    let kaartjeKind = document.getElementById("ticekts_kind").value;
    let output = document.getElementById("ditPrijs");

    let aantalVolw = document.getElementById("aantalKaartjesV");
    

    let prijsV = 149.99 * kaartjeVolw;
    let prijsK = 99.99 * kaartjeKind;

   

    let totaal = prijsV + prijsK;
    var twoPlacedFloat = parseFloat(totaal).toFixed(2)

    output.innerHTML = `&euro; ${twoPlacedFloat}`;
    if(kaartjeVolw >0){
        aantalVolw.innerHTML = `${kaartjeVolw}x`;
        
    }
    if(kaartjeVolw <1){
        aantalVolw.innerHTML = `0x`;
    }

    
})

document.getElementById("ticekts_kind").addEventListener("click", ()=>{
    let kaartjeVolw = document.getElementById("ticekts_volwassen").value;
    let kaartjeKind = document.getElementById("ticekts_kind").value;
    let output = document.getElementById("ditPrijs");

    let aantalKind = document.getElementById("aantalKaartjesK");
    
    let prijsV = 149.99 * kaartjeVolw;
    let prijsK = 99.99 * kaartjeKind;

    parseFloat(prijsV);
    parseFloat(prijsK);

    let totaal = prijsV + prijsK;
    var twoPlacedFloat = parseFloat(totaal).toFixed(2)

    output.innerHTML = `&euro; ${twoPlacedFloat}`;

    if(kaartjeKind >0){
        aantalKind.innerHTML = `${kaartjeKind}x`;
        
    }
    if(kaartjeKind <1){
        aantalKind.innerHTML = `0x`;
    }
})