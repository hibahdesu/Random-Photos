let section = document.querySelector('.section');
let container = document.querySelector('.container');

let imgs = 3;
for(let i = 0; i < imgs; i++) {
    let img = document.createElement('img');
    img.src = `https://picsum.photos/400?random=${Math.floor(Math.random() * 5000)}`;
    container.appendChild(img);  
}

//section.appendChild(container);
//Adding the button in the section
let button = document.createElement('button');
button.classList = 'btn';
button.innerHTML = 'Load More Photos';
section.appendChild(button);

//Using the button to load more photos if clicked
let btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    generateImg();
})

//Loading more Images
function generateImg() {
    for(let i = 0; i < imgs; i++) {
        let img = document.createElement('img');
        img.src = `https://picsum.photos/400?random=${Math.floor(Math.random() * 5000)}`;
        container.appendChild(img);
    }
    
}
