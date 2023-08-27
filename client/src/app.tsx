
import AnimalPyramid from './animal-pyramid/AnimalPyramid';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<AnimalPyramid/>);