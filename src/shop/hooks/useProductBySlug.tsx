import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { getProductBySlugAction } from '../actions/get-product-by-slug.action';

export const useProductBySlug = () => {
  const { idSlug = '' } = useParams();

  return useQuery({
    queryKey: ['product-by-slug', { idSlug }],
    queryFn: () => getProductBySlugAction(idSlug),
    retry: false,
    staleTime: 1000 * 60 * 5,
    enabled: !!idSlug,
  });
};
