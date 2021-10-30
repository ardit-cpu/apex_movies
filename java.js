function to(){
    var x = document.forms['ret']['user'].value
    if(x == "apex"){
        alert('still working on database')
        window.location = "profile.html"
        return false;
    }
}