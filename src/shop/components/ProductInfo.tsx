import {
  Star,
  ShoppingCart,
  Heart,
  Truck,
  Shield,
  Headphones,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import type { Product } from '@/interfaces/product.interface';

interface Props {
  product: Product;
}

export const ProductInfo = ({ product }: Props) => {
  const [selectedSize, setSelectedSize] = useState<string>('S');
  const availableSizes = product.sizes || [];
  const allSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'] as const;

  return (
    <div className='space-y-6'>
      <div className='space-y-2'>
        <h1 className='text-4xl font-bold tracking-tight'>{product.title}</h1>
        <div className='flex items-center gap-2'>
          <div className='flex'>
            {[...Array(5)].map((_, i) => (
              <Star key={i} className='h-5 w-5 fill-primary text-primary' />
            ))}
          </div>
          <span className='text-sm text-muted-foreground'>
            (4.8) · 2,847 reviews
          </span>
        </div>
      </div>

      <div className='flex items-baseline gap-3'>
        <span className='text-4xl font-bold'>
          ${(product.price * 0.7).toFixed(2)}
        </span>
        <span className='text-xl text-muted-foreground line-through'>
          ${product.price}
        </span>
        <Badge variant='destructive' className='text-sm'>
          30% OFF
        </Badge>
      </div>

      <p className='text-lg text-muted-foreground leading-relaxed'>
        {product.description}
      </p>

      <div className='grid grid-cols-3 gap-4 rounded-xl bg-muted/50 p-4'>
        <div className='flex flex-col items-center gap-2 text-center'>
          <Truck className='h-6 w-6 text-primary' />
          <span className='text-sm font-medium'>Free Shipping</span>
        </div>
        <div className='flex flex-col items-center gap-2 text-center'>
          <Shield className='h-6 w-6 text-primary' />
          <span className='text-sm font-medium'>2 Year Warranty</span>
        </div>
        <div className='flex flex-col items-center gap-2 text-center'>
          <Headphones className='h-6 w-6 text-primary' />
          <span className='text-sm font-medium'>24/7 Support</span>
        </div>
      </div>

      <div className='space-y-3'>
        <Label className='text-base'>Select Size</Label>
        <ToggleGroup
          type='single'
          value={selectedSize}
          onValueChange={(value) => value && setSelectedSize(value)}
          className='justify-start '
        >
          {allSizes.map((size) => {
            const isAvailable = availableSizes.includes(size);
            return (
              <ToggleGroupItem
                key={size}
                value={size}
                disabled={!isAvailable}
                className={`w-12 h-10  text-sm font-semibold ${
                  !isAvailable
                    ? 'opacity-40  cursor-not-allowed line-through'
                    : ''
                }`}
              >
                {size}
              </ToggleGroupItem>
            );
          })}
        </ToggleGroup>
      </div>

      <div className='flex gap-3'>
        <Button
          size='lg'
          variant='destructive'
          className='flex-1 gap-2  hover:opacity-90 transition-opacity'
        >
          <ShoppingCart className='h-5 w-5' />
          Add to Cart
        </Button>
        <Button size='lg' variant='outline' className='gap-2'>
          <Heart className='h-5 w-5' />
        </Button>
      </div>

      <Button variant='default' size='lg' className='w-full'>
        Buy Now
      </Button>
    </div>
  );
};
