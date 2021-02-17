import { css } from "styled-components";

const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
};

export function breakpointsMedia(cssByBreakpoints) {
  const breakPointsNames = Object.keys(breakpoints);
  return breakPointsNames.filter((breakpointName) => Boolean(cssByBreakpoints[breakpointName]))
    .map(
      (breakpointName) => (css`
        @media screen and (min-width: ${breakpoints[breakpointName]}) {
          ${cssByBreakpoints[breakpointName]}
        }
      `)
    )
}
