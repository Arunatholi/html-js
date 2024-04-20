const inputTitle = document.getElementById('title');
const inputImage = document.getElementById('image');
const inputPrice = document.getElementById('price')
const productarea = document.getElementById('productarea');
productarea.addEventListener('submit', addNewProduct)

function addNewProduct(event) {
    event.preventDefault()

    const title = inputTitle.value 
    const price = inputPrice.value
    const image = inputImage.value

    const borderarea = document.createElement('article')
    borderarea.classList.add('borderarea')
    
    



}

