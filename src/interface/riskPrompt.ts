export enum RiskLevel {
  lowRisk = 'baixo risco',
  mediumRisk = 'médio risco',
  highRisk = 'alto risco',
}

export enum TimeSpent {
  shortTerm = 'curto prazo',
  mediumTerm = 'médio prazo',
  highTerm = 'longo prazo',
}

export interface RiskPrompt {
  riskLevel: RiskLevel;
  value: number;
  timeSpent: TimeSpent;
}
