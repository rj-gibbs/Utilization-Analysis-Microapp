export const calcRevenue = (
  f: number,
  r: number,
  u: number,
  d: number,
  h: number,
  sens: any
) => {
  const realization = 1 - sens.leakage;
  const seasonal = sens.seasonality;
  return f * h * u * r * d * realization * seasonal * sens.rateAdj;
};
export const calcScenarioImpact = (inputs: any, sens: any) => {
  const H = inputs.hours ?? 1800;
  const U0 = inputs.utilCurrent / 100;
  const deltas = [0.005, 0.01, 0.02];
  return deltas.map((delta) => {
    const U1 = U0 + delta;
    const rev0 = calcRevenue(inputs.fte, inputs.rate, U0, inputs.discount / 100, H, sens);
    const rev1 = calcRevenue(inputs.fte, inputs.rate, U1, inputs.discount / 100, H, sens);
    return { delta, amount: rev1 - rev0 };
  });
};
