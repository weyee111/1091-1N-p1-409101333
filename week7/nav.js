function change(index){
    const p = document.getElementById('show');
    console.log('p',p);
    switch(index){
        case 1:
        p.innerHTML = '<iframe width=100% height=100% src="../week1/intro.html" />'    
        break;
        case 2:
            p.innerHTML = '<iframe width=100% height=100% src="../week1/pokemon.html" />'    
        break;
        case 3:
            p.innerHTML = '<iframe width=100% height=100% src="../week2/Imagegellery.html" />'    
        break;
        case 4:
            p.innerHTML = '<iframe width=100% height=100% src="../blog/blog.html" />'    
        break;
        case 5:
            p.innerHTML = '<iframe width=100% height=100% src="../week3 div/div.html" />'    
        break;
        case 6:
            p.innerHTML = '<iframe width=100% height=100% src="../week3/div_tku60.html" />'    
        break;
        case 7:
            p.innerHTML = '<iframe width=100% height=100% src="../week6/microsoft.html" />'    
        break;
    }
}