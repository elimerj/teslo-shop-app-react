import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const specs = [
  { label: 'Material', value: '100% Italian Leather' },
  { label: 'Lining', value: 'Premium Silk Blend' },
  { label: 'Hardware', value: 'YKK Zippers' },
  { label: 'Fit', value: 'Modern Slim Fit' },
  { label: 'Care', value: 'Professional Leather Clean' },
  { label: 'Weight', value: '1.2kg' },
  { label: 'Warranty', value: '2 Years' },
];

export const ProductSpecs = () => {
  return (
    <section className='py-16'>
      <div className='mb-12 text-center'>
        <h2 className='mb-4 text-3xl font-bold'>Technical Specifications</h2>
        <p className='text-lg text-muted-foreground'>
          Detailed specs for the tech enthusiasts
        </p>
      </div>
      <Card className='mx-auto max-w-3xl p-8'>
        <div className='space-y-4'>
          {specs.map((spec, idx) => (
            <div key={idx}>
              <div className='flex justify-between py-3'>
                <span className='font-medium text-muted-foreground'>
                  {spec.label}
                </span>
                <span className='font-semibold'>{spec.value}</span>
              </div>
              {idx < specs.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
};
