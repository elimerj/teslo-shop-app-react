import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getProductByIdAction } from '../actions/get-product-by-id-action';
import { createUpdateProductAction } from '../actions/create-update-product.action';
import type { Product } from '@/interfaces/product.interface';

export const useProductById = (id: string) => {
  const queryClient = useQueryClient();
  const query = useQuery({
    queryKey: ['product', { id }],
    queryFn: () => getProductByIdAction(id),
    retry: false,
    staleTime: 1000 * 60 * 5,
    //enabled: !!id
  });

  //TODO: mutación
  const productMutation = useMutation({
    mutationFn: createUpdateProductAction,
    onSuccess: (product: Product) => {
      //Invalidar cache
      queryClient.invalidateQueries({ queryKey: ['products'] });
      queryClient.invalidateQueries({
        queryKey: ['product', { id: product.id }],
      });

      //Actualizar queryData
      queryClient.setQueryData(['products', { id: product.id }], product);
    },
  });

  return {
    ...query,
    productMutation,
  };
};
