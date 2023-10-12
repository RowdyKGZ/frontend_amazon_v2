interface IAmount {
  value: string;
  currency: string;
}

interface IRecepient {
  account_id: string;
  getaway_id: string;
}

interface IPaymentMethod {
  id: string;
  type: string;
  saved: string;
}

interface IConfirmation {
  type: string;
  return_url: string;
  confirmation_url: string;
}

export interface IPaymentResponse {
  id: string;
  status: string;
  ammount: IAmount;
  recipient: IRecepient;
  payment_method: IPaymentMethod;
  created_at: Date;
  confirmation: IConfirmation;
}
