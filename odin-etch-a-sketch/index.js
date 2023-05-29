let container = document.getElementById('container');

function gridMaker(number) {
    for (let i = 0; i < number; i++) {
        let div = document.createElement('div');
        div.style.height = (500/number).toFixed(1).toString() + 'px';
        container.appendChild(div);
        for (let j = 0; j < number; j++) {
        let innerDiv = document.createElement('div');
        innerDiv.style.height = (500/number).toFixed(1).toString() + 'px';
        innerDiv.style.width = (500/number).toFixed(1).toString() + 'px';
        innerDiv.addEventListener('mouseenter', () => innerDiv.setAttribute('colored', 'yes'));
        div.appendChild(innerDiv);
        }
    }
}
gridMaker(16);

function newGreed() {
    let number = Number(prompt('Type in the number of squares for grid:', '16'));
    if (number < 100) {
        container.replaceChildren();
        gridMaker(number);
    } else alert('Number of squares mustn\'t be greater than 100');
}