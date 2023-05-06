import { RiskPrompt } from '../../interface';
import { formatRealCurrency } from '../../utils';

class CreatePrompt {
  mountPrompt(prompt: RiskPrompt) {
    const { riskLevel, timeSpent, value } = prompt;

    const formatedValue = formatRealCurrency(value);

    return `Eu tenho R$ ${formatedValue} para investir. Queria investir a ${timeSpent} e com ${riskLevel}. Monte uma carteira de investimentos para mim, me dizendo o que comprar exatamente com o código do ativo.`;
  }

  mountPromptCrypto(value: number) {
    const formatedValue = formatRealCurrency(value);

    return `Eu tenho R$ ${formatedValue} para investir em criptomoedas. Monte uma carteira de investimentos para mim, me dizendo quais moedas ou ativos comprar baseado no mercado atual.`;
  }
}

const createPrompt = new CreatePrompt();
export { createPrompt };
