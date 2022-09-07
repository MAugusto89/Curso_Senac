function mostra(id) {
    if (document.getElementById(id).style.display == 'block') {
        document.getElementById(id).style.display = 'none';
        
    }else{
        document.getElementById(id).style.display = 'block';
    }
}

function redirect(id) {
    window.location.href="/HTML/login.html"
};

                
document.querySelector(".basculante_elevacao");
addEventListener("wheel", event => {
    if (event.deltaY > 0) {
        event.target.scrollBy(-300,0)
    } else {
        event.target.scrollBy(300,0)
    }
})

function cerca(flag){
    if (flag == 'one') {
        document.getElementById('one').style.display = 'block';
        document.getElementById('two').style.display = 'none';

    }else if (flag == 'two') {
        document.getElementById('two').style.display = 'block';
        document.getElementById('one').style.display = 'none';
    }
}