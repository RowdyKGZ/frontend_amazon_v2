import { instance } from '@/api/api.intersection';
import { IPaymentResponse } from '@/types/payment.iterface';

const PaumentService = {
  createPayment(amount: number) {
    return instance.post<IPaymentResponse>(`/payment`, {
      amount,
    });
  },
};

export default PaumentService;
