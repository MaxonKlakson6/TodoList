export const getPercent = (allValues) => {
  const maxValue = allValues.length;
  const completedCount = allValues.reduce(
    (result, isCompleted) => (isCompleted ? result + 1 : result),
    0
  );

  const result = (completedCount * 100) / maxValue;

  return result.toFixed(1);
};
