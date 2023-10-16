import { instance } from '@/api/api.intersection';

export type TypeStatisticsResponse = {
  name: string;
  value: number;
}[];

const StatisticsService = {
  async getMain() {
    return await instance<TypeStatisticsResponse>({
      url: `/statistics/main`,
      method: 'GET',
    });
  },
};

export default StatisticsService;
