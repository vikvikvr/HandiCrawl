export function makeStyles(isLarge, hasBorder) {
  return {
    iconImg: {
      width: isLarge ? 100 : 50,
      height: isLarge ? 100 : 50,
      border: hasBorder ? "2px solid gray" : "none",
    },
  };
}
