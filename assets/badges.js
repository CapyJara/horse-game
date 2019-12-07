import unicorn1 from './unicorn-1.png';
import unicorn2 from './unicorn-2.png';
import unicorn3 from './unicorn-3.png';
import unicorn4 from './unicorn-4.png';
import unicorn5 from './unicorn-5.png';

const badges = [
  unicorn1,
  unicorn2,
  unicorn3,
  unicorn4,
  unicorn5
];

export const achievement = (lines) => {
  if(lines > 3000) return badges[4];
  if(lines > 1500) return badges[3];
  if(lines > 800) return badges[2];
  if(lines > 400) return badges[1];
  if(lines > 150) return badges[0];
  return '';
};

