import { CustomFullScreenLoading } from '@/components/custom/CustomFullScreenLoading';
import { ProductFeatures } from '@/shop/components/ProductFeatures';
import { ProductGallery } from '@/shop/components/ProductGallery';
import { ProductInfo } from '@/shop/components/ProductInfo';
import { ProductReviews } from '@/shop/components/ProductReviews';
import { ProductSpecs } from '@/shop/components/ProductSpecs';
import { useProductBySlug } from '@/shop/hooks/useProductBySlug';

export const ProductPage = () => {
  const { data } = useProductBySlug();
  if (!data) return <CustomFullScreenLoading />;

  return (
    <div className='min-h-screen bg-gradient-to-b from-background to-background/95'>
      <div className='container mx-auto px-4 py-8'>
        {/* Hero Section */}
        <div className='grid gap-12 lg:grid-cols-2 lg:gap-16 py-12'>
          <ProductGallery images={data.products.images || []} />
          <ProductInfo product={data.products} />
        </div>

        {/* Features Section */}
        <ProductFeatures />

        {/* Specs Section */}
        <ProductSpecs />

        {/* Reviews Section */}
        <ProductReviews />
      </div>
    </div>
  );
};
