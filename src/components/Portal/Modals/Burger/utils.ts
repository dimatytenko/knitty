export const clipPath: (percentage: number) => string[] = (percentage) => [
  `circle(${percentage}% at 75% 78%)`,
  `circle(${percentage}% at 75% 27%)`,
  `circle(${percentage}% at 22% 20%)`,
  `circle(${percentage}% at 26% 78%)`,
  `circle(${percentage}% at 48% 53%)`,
];

export const items = new Array(5).fill(1);
