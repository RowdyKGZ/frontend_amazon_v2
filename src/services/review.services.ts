import { instance } from '@/api/api.intersection';

import { IReview } from '@/types/review.interface';

type TypeData = {
  rating: number;
  text: string;
};

const ReviewService = {
  async getAll() {
    return await instance<IReview>({
      url: `/reviews`,
      method: 'GET',
    });
  },

  async leave(productId: string | number, data: TypeData) {
    return await instance<IReview>({
      url: `/reviews/leave/${productId}`,
      method: 'POST',
      data,
    });
  },
};

export default ReviewService;
