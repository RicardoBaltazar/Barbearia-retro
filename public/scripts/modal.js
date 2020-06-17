let openModal = document.querySelector( 'form')//'#btnCreateItem')
let closeModal = document.querySelector('#btnModalClose')
let modal = document.querySelector('.modal')



openModal.addEventListener('submit', function(event){
    event.preventDefault()
    modal.classList.remove('hide')
})

closeModal.addEventListener('click', function(){
    modal.classList.add('hide')

    document.querySelector('input[name=name]').value = '' 
    document.querySelector('input[name=address]').value = '' 
    document.querySelector('input[name=address2]').value = '' 
})
