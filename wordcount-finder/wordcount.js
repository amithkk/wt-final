function updateCounts(e){

    var text = e.target.value;

    var charcount = text.trim().length;
    var wordcount = text.trim().split(/^\s+$/).length-1;
    var linecount = text.split("\n").length;

    document.querySelector("#wordcount").innerHTML = wordcount;
    document.querySelector("#charcount").innerHTML = charcount;
    document.querySelector("#linecount").innerHTML = linecount;


}

document.querySelector("#count-target").addEventListener('keyup', updateCounts)