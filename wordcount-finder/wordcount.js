function updateCounts(e){

    var text = e.target.value;

    var charcount = text.length;
    console.log(text.split(/(\s+)/))
    var wordcount = Math.ceil(text.trim().split(/(\s+)/).length/2);
    var linecount = text.split("\n").length;

    document.querySelector("#wordcount").innerHTML = wordcount;
    document.querySelector("#charcount").innerHTML = charcount;
    document.querySelector("#linecount").innerHTML = linecount;


}

document.querySelector("#count-target").addEventListener('keyup', updateCounts)