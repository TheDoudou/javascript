let xhr = new XMLHttpRequest()
xhr.open('GET', 'https://thatsthespir.it/api', true)

xhr.onload = function() 
{
    let blocquote = document.getElementById('quote')
    let rep = JSON.parse(xhr.responseText)
    if (this.status === 200) {
        if (rep.quote.length > 260){
            location.reload()
        }
        console.log(rep.quote.length)
        console.log(rep+' '+rep.quote.length)
        let pquote = document.createElement('p')
        pquote.setAttribute("id", "pquote")
        let aquote = document.createElement('p')
        let img = document.getElementById('image')
        aquote.setAttribute("id", "aquote")
        blocquote.appendChild(pquote)
        blocquote.appendChild(aquote)
        pquote.style = "color: white; text-align: center; padding: 35px 35px 35px 35px; font-size: 25px;"
        pquote.innerHTML = "\""+rep.quote+"\""
        aquote.style = "color: white; font-size: 20px; position:absolute; bottom:25px; left:25px;"
        aquote.innerHTML = rep.author
        if (rep.photo.length > 0) {
            img.src = rep.photo
            img.alt = rep.author
        }
    } else {
        pquote.style = 'color: red;'
        pquote.innerText = 'Erreur lors de la requete code : '+this.status
    }
}

xhr.send()


$.getJSON( "https://thatsthespir.it/api", function( data ) {
    $.each( data, function( key, val ) {
      console.log(key+" "+val)
    })
  })