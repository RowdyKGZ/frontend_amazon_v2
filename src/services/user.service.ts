import { instance } from '@/api/api.intersection';
import { IUser } from '@/types/user.interface';

type TypeData = {
  email: string;
  password?: string;
  name?: string;
  avatarPath?: string;
  phone?: string;
};

const UserService = {
  async getProfile() {
    return await instance<IUser>({
      url: `/users/profile`,
      method: 'GET',
    });
  },

  async updateProfile(data: TypeData) {
    return await instance<IUser>({
      url: `/users/profile`,
      method: 'PUT',
      data,
    });
  },

  async toggleFavorite(productId: string | number) {
    return await instance<IUser>({
      url: `/users/profile/favorites/${productId}`,
      method: 'PATCH',
    });
  },
};

export default UserService;
