export function formatRealCurrency(value: number): string {
  // Converte o número para uma string com duas casas decimais
  const formattedValue = Number(value).toFixed(2);

  // Separa a parte inteira da parte decimal
  const [integerPart, decimalPart] = formattedValue.split('.');

  // Adiciona o separador de milhar à parte inteira
  const integerPartWithSeparator = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    '.'
  );

  // Retorna a string formatada como moeda
  return `R$ ${integerPartWithSeparator},${decimalPart}`;
}
