const container = document.querySelector('#container');
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'

for(let i = 1; i < 1026; i++){
    const imgBox = document.createElement('div');
    
    const imgLabel = document.createElement('span');
    const newImg = document.createElement('img');
    newImg.src = `${baseUrl}/${i}.png`;
    imgLabel.innerText = `#${i}`;
    //styling vai JS
    imgBox.classList.add('pokemon');
    
    newImg.style.display = 'block'
    container.appendChild(imgBox);
    imgBox.appendChild(newImg);
    imgBox.appendChild(imgLabel);   
}