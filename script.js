function createGrid() {
    const dimension = parseInt(document.getElementById('dimension').value);
    const gridSize = 9;
    const squareSize = gridSize / dimension;
    const svgContainer = document.getElementById('grid-container');
    svgContainer.innerHTML = '';

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', gridSize * 50);
    svg.setAttribute('height', gridSize * 50);

    for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
            const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('x', x * squareSize * 50);
            rect.setAttribute('y', y * squareSize * 50);
            rect.setAttribute('width', squareSize * 50);
            rect.setAttribute('height', squareSize * 50);
            rect.setAttribute('fill', 'transparent');
            rect.setAttribute('stroke-width', '1');
            rect.setAttribute('stroke', '#000');
            rect.addEventListener('click', () => {
                alert(`Coordinates: (${x + 1}, ${y + 1})`);
            });
            svg.appendChild(rect);
        }
    }

    svgContainer.appendChild(svg);
}

createGrid(); 
