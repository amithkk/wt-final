function handleAJAX(e, firstRun=false){
    let qry, args;

    if(!firstRun){
        if(e.target.value == 0) return
        switch(e.target.id){
            case 'country': qry = 'state' ; break;
            case 'state': qry = 'city' ; break;
        }
         args = `?query=${qry}&id=${e.target.value}`;
    }
    else{
        qry = 'country';
        args =  '?query=country';
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            document.getElementById(qry).innerHTML = `<option value=0> Select ${qry}</option>${xhttp.responseText}`;
        }
    }
    xhttp.open("GET", "api"+args);
    xhttp.send();

}

document.querySelector("#country").addEventListener('change', handleAJAX);

document.querySelector("#state").addEventListener('change', handleAJAX);
handleAJAX(null, true);