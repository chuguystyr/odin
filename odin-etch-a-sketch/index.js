let container = document.getElementById('container');

function gridMaker(number) {
    for (let i = 0; i < number; i++) {
        let div = document.createElement('div');
        container.appendChild(div);
        for (let j = 0; j < number; j++) {
        let innerDiv = document.createElement('div');
        innerDiv.addEventListener('mouseover', () => {
            innerDiv.setAttribute('colored', 'yes');
            setTimeout(() => innerDiv.removeAttribute('colored'), 2000);
        });
        div.appendChild(innerDiv);
        }
    }
}
gridMaker(16);