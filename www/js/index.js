document.addEventListener('deviceready', onDeviceReady, false);

window.addEventListener("scroll", (event) => {

    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
        var num = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
        mostraCards(num);
    }
    
});

function onDeviceReady() {

    var num = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
    mostraCards(num);
     num = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
    mostraCards(num);
     num = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
    mostraCards(num);
}

function mostraCards(num) {
    fetch(`https://jsonplaceholder.typicode.com/albums/1/photos?id=${num}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("card-container");
             const card = createCard(data[0]);
              container.append(card);
        })
        .catch(error => console.error('Erro ao carregar os cards:', error));
}

function createCard(item) {
   

    const card = document.createElement('div');
    card.className = 'card';
    card.id = 'card-' + item.id;

    const img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = item.thumbnailUrl;
    card.appendChild(img);

    const title = document.createElement('h3');
    title.className = 'card-title';
    title.textContent = item.title;
    card.appendChild(title);

    
    return card;
}






