const breakpoints = [0, 576, 768, 1024, 1440];

export const breakpointsScrollTrigger = {
  sm: `(max-width: ${breakpoints[2] - 1}px)`,
  md: `(min-width: ${breakpoints[2]}px) and (max-width: ${
    breakpoints[3] - 1
  }px)`,
  lg: `(min-width: ${breakpoints[3]}px)`,
};
