type TimeUnitDef = {
  name: string;
  factor: number;
};

const unitsDef: TimeUnitDef[] = [
  { name: "ms", factor: 1000 },
  { name: "s", factor: 60 },
  { name: "m", factor: 60 },
  { name: "h", factor: 24 },
];

/**
 * Converts milliseconds to a formatted timestring
 *
 * Example: `msToElapsedString(7889456123456)` outputs: '91313d 3h 35m 23s 456ms'
 */
export function msToElapsedString(millisecondsTotal: number): string {
  if (millisecondsTotal < 0)
    throw new Error(`Negative value '${millisecondsTotal}' is not allowed.`);
  let result = "";
  let remainingValue = millisecondsTotal;
  for (const unit of unitsDef) {
    const unitValue = remainingValue % unit.factor;
    remainingValue = (remainingValue - unitValue) / unit.factor;
    const space = result === "" ? "" : " "; // add space if not empty
    result = `${unitValue}${unit.name}${space}${result}`;
    if (remainingValue === 0) return result;
  }
  return `${remainingValue}d ${result}`;
}
