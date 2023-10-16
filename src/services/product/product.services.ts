import { instance } from '@/api/api.intersection';
import { IProduct } from '@/types/product.interface';
import { TypeProductData, TypeProductDataFilters } from './product.types';

const ProductService = {
  async getAll(queryData = {} as TypeProductDataFilters) {
    return await instance<IProduct>({
      url: `/products`,
      method: 'GET',
      params: queryData,
    });
  },

  async getSimilar(id: number | string) {
    return await instance<IProduct>({
      url: `/products/similar/${id}`,
      method: 'GET',
    });
  },

  async getBySlug(slug: string) {
    return await instance<IProduct>({
      url: `/products/by-slug/${slug}`,
      method: 'GET',
    });
  },

  async getByCategory(categorySlug: string) {
    return await instance<IProduct>({
      url: `/products/by-category/${categorySlug}`,
      method: 'GET',
    });
  },

  async getById(id: string | number) {
    return await instance<IProduct>({
      url: `/products/${id}`,
      method: 'GET',
    });
  },

  async create() {
    return await instance<IProduct>({
      url: `/products`,
      method: 'POST',
    });
  },

  async update(id: string | number, data: TypeProductData) {
    return await instance<IProduct>({
      url: `/products/${id}`,
      method: 'PUT',
      data,
    });
  },

  async delete(id: string | number) {
    return await instance<IProduct>({
      url: `/products/${id}`,
      method: 'DELETE',
    });
  },
};

export default ProductService;
