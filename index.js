// Remove the 'main' element
const main = document.getElementById('main');
main.remove();

// Create new header
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'William is the champion';
document.body.append(newHeader);
