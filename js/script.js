function generateExcuse(){
    

    var who = ['The mailman', 'The teacher', 'The bus driver', 'The meteorologyst', 'The president'];
    var what = ['fell down', 'threw up', 'had hiccups', 'was late', 'threw a fit'];
    var when = ['on the way here!', 'this morning!', 'last night!', 'last week!', 'yesterday!'];
    
    var excuse = who[Math.floor(Math.random() * 5)] + " " + what[Math.floor(Math.random() * 5)] + " " + when[Math.floor(Math.random() * 5)];
    
    
    document.getElementById("excuse").innerHTML = excuse;
}
