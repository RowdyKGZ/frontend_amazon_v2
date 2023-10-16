import { instance } from '@/api/api.intersection';
import { IOrder } from '@/types/order.interface';

const OrderService = {
  async getAll() {
    return await instance<IOrder>({
      url: `/orders`,
      method: 'GET',
    });
  },
};

export default OrderService;
