class Calcolatrice {

    constructor(){
        this.numCorrente=0;
        this.numParziale=0;
        this.operazione="";
    }

    somma(){
       this.numParziale=parseInt(document.getElementById("schermo").value);
       document.getElementById("schermo").value="";
       this.operazione="+";
    }

    sottrai(){
        this.numParziale=parseInt(document.getElementById("schermo").value);
        document.getElementById("schermo").value="";
        this.operazione="-";
    }

    moltiplica(){
        this.numParziale=parseInt(document.getElementById("schermo").value);
        document.getElementById("schermo").value="";
        this.operazione="x"; 
    }

    dividi(){
        this.numParziale=parseInt(document.getElementById("schermo").value);
        document.getElementById("schermo").value="";
        this.operazione="/"; 
    }

    calcola(){
        this.numCorrente=parseInt(document.getElementById("schermo").value);
        
        if(this.operazione == "+"){
            alert(this.numParziale+this.numCorrente);
            document.getElementById("schermo").value="";
        } else if(this.operazione == "-"){
            alert(this.numParziale-this.numCorrente);
            document.getElementById("schermo").value="";
        } else if(this.operazione == "x"){
            alert(this.numParziale*this.numCorrente);
            document.getElementById("schermo").value="";
        } else if(this.operazione == "/"){
            alert(this.numParziale/this.numCorrente);
            document.getElementById("schermo").value="";
        }
    }
}

const c1 = new Calcolatrice();
