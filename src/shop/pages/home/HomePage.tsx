import { CustomFullScreenLoading } from '@/components/custom/CustomFullScreenLoading';
import { CustomPagination } from '@/components/custom/CustomPagination';
//import { products } from '@/mocks/products.mock';
import { CustomJumbotron } from '@/shop/components/CustomJumbotron';
import { ProductsGrid } from '@/shop/components/ProductsGrid';
import { useProducts } from '@/shop/hooks/useProducts';

export const HomePage = () => {
  const { data } = useProducts();

  if (!data) return <CustomFullScreenLoading />;

  return (
    <div>
      <CustomJumbotron title='Todos los productos' />
      <ProductsGrid products={data?.products || []} />
      <CustomPagination totalPages={data?.pages || 0} />
    </div>
  );
};
