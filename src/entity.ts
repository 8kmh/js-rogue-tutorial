export class Entity {
  x: number;
  y: number;
  char: string;
  fg: string;
  bg: string;

  constructor(x: number, y: number, char: string, fg: "#fff", bg: "#000") {
    this.x = x;
    this.y = y;
    this.char = char;
    this.fg = fg;
    this.bg = bg;
  }
  move(dx: number, dy: number) {
    this.x += dx;
    this.y += dy;
  }
}
