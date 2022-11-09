// 生产随机数
export function random(minNum: number, maxNum: number): number {
  switch (arguments.length) {
    case 1:
      return parseInt(`${Math.random() * minNum + 1}`, 10);
    case 2:
      return parseInt(`${Math.random() * (maxNum - minNum + 1) + minNum}`, 10);
    default:
      return 0;
  }
}

// 生成随机颜色
export function randomColor(): string {
  return (
    `#${
     (`00000${((Math.random() * 0x1000000) << 0).toString(16)}`).slice(-6)}`
  );
}

// 生成随机颜色数组
export function randomColors(len: number): string[] {
  const colors: string[] = [];
  for (let i = 0; i < len; i++) {
    colors.push(randomColor());
  }
  return colors;
}
