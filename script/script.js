
function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');
    if (Number(fano.value.length) == 0 || Number(fano.value > ano)) {
        window.alert("Error, verifique os dados e tente novamente!");
    } else {
        var fsex = document.getElementsByName('radiosex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = "Homem"
            if(idade >=0 && idade <10){
                img.setAttribute('src','img/criança_menino.jpg')
            }else if( idade<21){
                img.setAttribute('src','img/jovem_menino.jpeg')
            }else if(idade < 50){
                img.setAttribute('src','img/homem.jpeg')
            }else{
                img.setAttribute('src','img/idoso.jpeg')
            }
        } else if(fsex[1].checked) {
            genero = "Mulher"
            if(idade >=0 && idade <10){
                img.setAttribute('src','img/criança.jpeg')
            }else if( idade<21){
                img.setAttribute('src','img/jovem_m.jpeg')
            }else if(idade < 50){
                img.setAttribute('src','img/mulher.jpeg')
            }else{
                img.setAttribute('src','img/idosa.jpeg')
            }
        }
        // res.style.textAlign = 'center' esse comando deixa o texto centralizado pelo js
        res.innerHTML = `Detectamos ${genero} com  ${idade} anos.`
        res.appendChild(img)
    }
}