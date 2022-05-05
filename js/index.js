const modal = $.modal({
    title: 'My Modal Window',
    closable: true,
    content: '\
        <p>Lorem ipsum dolor sit amet.</p> \
        <p>Lorem ipsum dolor sit amet.</p> \
    ',
    width: '400px'

})

document.addEventListener('click', event => {
    event.preventDefault()
    const btnType = event.target.dataset.btn
    if (btnType === 'info') {
        modal.open()
    }
})