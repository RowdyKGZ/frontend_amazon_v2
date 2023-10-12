import { instance } from '@/api/api.intersection';

import { ICategory } from '@/types/category.interface';

const CategoryService = {
  async getAll() {
    return await instance<ICategory>({
      url: `/category`,
      method: 'GET',
    });
  },

  async getById(id: string | number) {
    return await instance<ICategory>({
      url: `/category/${id}`,
      method: 'GET',
    });
  },

  async getBySlug(slug: string) {
    return await instance<ICategory>({
      url: `/categorys/by-slug/${slug}`,
      method: 'GET',
    });
  },

  async create() {
    return await instance<ICategory>({
      url: `/categorys`,
      method: 'POST',
    });
  },

  async update(id: string | number, name: string) {
    return await instance<ICategory>({
      url: `/categorys/${id}`,
      method: 'PUT',
      data: { name },
    });
  },

  async delete(id: string | number) {
    return await instance<ICategory>({
      url: `/categorys/${id}`,
      method: 'DELETE',
    });
  },
};

export default CategoryService;
