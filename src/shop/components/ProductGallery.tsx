import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Props {
  images: string[];
}

export const ProductGallery = ({ images }: Props) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className='space-y-4'>
      <div className='relative aspect-square overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-elegant)]'>
        <img
          src={images[currentImage]}
          alt='Product'
          className='h-full w-full object-cover transition-transform duration-500'
        />
        <Button
          variant='secondary'
          size='icon'
          className='absolute left-4 top-1/2 -translate-y-1/2 opacity-80 hover:opacity-100'
          onClick={prevImage}
        >
          <ChevronLeft className='h-5 w-5' />
        </Button>
        <Button
          variant='secondary'
          size='icon'
          className='absolute right-4 top-1/2 -translate-y-1/2 opacity-80 hover:opacity-100'
          onClick={nextImage}
        >
          <ChevronRight className='h-5 w-5' />
        </Button>
      </div>
      <div className='flex gap-3'>
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`relative h-20 w-20 overflow-hidden rounded-lg transition-all ${
              currentImage === idx
                ? 'ring-2 ring-primary ring-offset-2 ring-offset-background'
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${idx + 1}`}
              className='h-full w-full object-cover'
            />
          </button>
        ))}
      </div>
    </div>
  );
};
