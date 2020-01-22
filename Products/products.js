import surfboards from '../surfboard-data/surfboards.js';
import renderSurfboard from './renderSurboard.js';

const list = document.getElementById('surfboards'); 

for (let i = 0; i < surfboards.lenth; i++) {
    const surfboards = surfboards[i];
    const dom = renderSurfboard(surfboards);
    list.appendChild(dom);
}