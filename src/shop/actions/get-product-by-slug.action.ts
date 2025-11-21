import { tesloApi } from '@/api/tesloApi';
import type { Product } from '@/interfaces/product.interface';

export const getProductBySlugAction = async (idSlug: string) => {
  const { data } = await tesloApi.get<Product>(`/products/${idSlug}`);

  const productsWithImageUrls = {
    ...data,
    images: data.images.map(
      (image) => `${import.meta.env.VITE_API_URL}/files/product/${image}`
    ),
  };

  return { products: productsWithImageUrls };
};
