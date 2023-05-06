import { RiskPrompt } from '../../interface';
import { formatRealCurrency } from '../../utils';

class CreatePrompt {
  createLowRiskPrompt(prompt: RiskPrompt) {
    const { riskLevel, timeSpent, value } = prompt;

    const formatedValue = formatRealCurrency(value);

    return `Eu tenho R$ ${formatedValue} para investir. Queria investir a ${timeSpent} e com ${riskLevel}. Monte uma carteira de investimentos para mim, me dizendo o que comprar exatamente com o código do ativo.`;
  }
}

const createPrompt = new CreatePrompt();
export { createPrompt };
