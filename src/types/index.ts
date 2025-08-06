export type User = {
  email: string;
  name: string;
  password: string;
  id: any;
  profile: string;
  createdAt: string;
  monthlyIncome: number;
  monthlyExpense: number;
  hideBalance: boolean;
  totalAssets: number;
  totalLiabilities: number;
};



export type buttonType = {
  text?: string;
  icon?: string;
  outline?: boolean;
  onclick?: () => void;
};