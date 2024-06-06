let start: number = new Date().getTime();

interface Position {
  x: number;
  y: number;
}

interface Last {
  starTimestamp: number;
  starPosition: Position;
  mousePosition: Position;
}

interface Config {
  starAnimationDuration: number;
  minimumTimeBetweenStars: number;
  minimumDistanceBetweenStars: number;
  colors: string[];
  sizes: string[];
  animations: string[];
}

const originPosition: Position = { x: 0, y: 0 };

const last: Last = {
  starTimestamp: start,
  starPosition: originPosition,
  mousePosition: originPosition,
};

const config: Config = {
  starAnimationDuration: 1500,
  minimumTimeBetweenStars: 250,
  minimumDistanceBetweenStars: 75,
  colors: ['55 55 55', '252 254 255'],
  sizes: ['1.4rem', '1rem', '0.6rem'],
  animations: ['fall-1', 'fall-2', 'fall-3'],
};

let count: number = 0;

const rand = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1)) + min,
  selectRandom = <T>(items: T[]): T => items[rand(0, items.length - 1)];

const withUnit = (value: number, unit: string): string => `${value}${unit}`,
  px = (value: number): string => withUnit(value, 'px'),
  ms = (value: number): string => withUnit(value, 'ms');

const calcDistance = (a: Position, b: Position): number => {
  const diffX = b.x - a.x,
    diffY = b.y - a.y;

  return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
};

const calcElapsedTime = (start: number, end: number): number => end - start;

const appendElement = (element: HTMLElement): HTMLElement =>
    document.body.appendChild(element),
  removeElement = (
    element: HTMLElement,
    delay: number,
  ): ReturnType<typeof setTimeout> =>
    setTimeout(() => document.body.removeChild(element), delay);

const createStar = (position: Position): void => {
  const star: HTMLSpanElement = document.createElement('span'),
    color: string = selectRandom(config.colors);

  star.className = 'star fa-star';

  star.style.left = px(position.x);
  star.style.top = px(position.y);
  star.style.fontSize = selectRandom(config.sizes);
  star.style.color = `rgb(${color})`;
  star.style.textShadow = `0px 0px 1.5rem rgb(${color} / 0.5)`;
  star.style.animationName = config.animations[count++ % 3];
  star.style.animationDuration = ms(config.starAnimationDuration);

  appendElement(star);

  removeElement(star, config.starAnimationDuration);
};

const updateLastStar = (position: Position): void => {
  last.starTimestamp = new Date().getTime();
  last.starPosition = position;
};

const updateLastMousePosition = (position: Position): void => {
  last.mousePosition = position;
};

const adjustLastMousePosition = (position: Position): void => {
  if (last.mousePosition.x === 0 && last.mousePosition.y === 0) {
    last.mousePosition = position;
  }
};

const handleOnMove = (e: MouseEvent | TouchEvent): void => {
  const mousePosition: Position =
    'touches' in e
      ? { x: e.touches[0].pageX, y: e.touches[0].pageY }
      : { x: e.pageX, y: e.pageY };

  adjustLastMousePosition(mousePosition);

  const now: number = new Date().getTime(),
    hasMovedFarEnough: boolean =
      calcDistance(last.starPosition, mousePosition) >=
      config.minimumDistanceBetweenStars,
    hasBeenLongEnough: boolean =
      calcElapsedTime(last.starTimestamp, now) > config.minimumTimeBetweenStars;

  if (hasMovedFarEnough || hasBeenLongEnough) {
    createStar(mousePosition);

    updateLastStar(mousePosition);
  }

  updateLastMousePosition(mousePosition);
};

window.onmousemove = (e: MouseEvent) => handleOnMove(e);
window.ontouchmove = (e: TouchEvent) => handleOnMove(e);
document.body.onmouseleave = () => updateLastMousePosition(originPosition);
