export const formatterValue = new Intl.NumberFormat('pt-BR', {
  minimumFractionDigits: 2,
})

export const formatterValueCurrency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})
