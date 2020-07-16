let fields = Array();
let actualField = "";

window.onload = () => {
    try{
        fields = this.document.getElementsByTagName("input");
        for(let cont = 0 ;cont <= fields.length ; cont++) {
          this.document.getElementById(fields[cont].id).addEventListener("focus", function(event) {
            actualField = event.currentTarget.id;            
          })
        }     
        for(let cont = 0; cont <= fields.length ; cont++) {
          this.document.getElementById(fields[contador].id).addEventListener("keypress", function(event) {
            if(event.keyCode == "13") {
                nextField(actualField);
            }
          })
        }
    }catch(e){
        console.log("Ocorreu uma falha ao registrar eventos => "+e);
    }
}

function nextField(current){  
    for(let cont = 0; cont < fields.length; cont++) {
        if(fields[cont].id == current) {
            document.getElementById(fields[cont+1].id).focus();
        }
    }
}
