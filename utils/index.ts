export const formatNumber = (value: number, style: string) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style,
    maximumFractionDigits: 2,
  })
  return formatter.format(value)
}
