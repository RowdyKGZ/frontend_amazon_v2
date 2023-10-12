import { IUser } from './user.interface';

export interface IProduct {
  id: number;
  user: IUser;
  createdAt: string;
  text: string;
  rating: string;
}
