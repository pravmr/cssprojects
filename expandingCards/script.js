const panels = document.querySelectorAll('.panel');

function removeActiveClass() {
    panels.forEach( panel => {
        panel.classList.remove('active');
    });
}

panels.forEach( panel => {
    panel.addEventListener('click', () => {
        removeActiveClass();
        panel.classList.add('active');
    });
})

// function fnOldWay(divNode) {
//     console.log(divNode)
//     divNode.classList.add('active');
// }