import { Award, Ruler, Shield, Sparkles, Tag, Wind } from 'lucide-react';
import { Card } from '@/components/ui/card';

const features = [
  {
    icon: Award,
    title: 'Premium Leather',
    description: '100% genuine Italian leather with rich texture',
  },
  {
    icon: Wind,
    title: 'Breathable Design',
    description: 'Comfortable wear with natural ventilation',
  },
  {
    icon: Shield,
    title: 'Water Resistant',
    description: 'Protected against light rain and moisture',
  },
  {
    icon: Ruler,
    title: 'Perfect Fit',
    description: 'Tailored cut for modern slim fit silhouette',
  },
  {
    icon: Sparkles,
    title: 'Hand Finished',
    description: 'Expert craftsmanship with attention to detail',
  },
  {
    icon: Tag,
    title: 'Limited Edition',
    description: 'Exclusive design from our luxury collection',
  },
];

export const ProductFeatures = () => {
  return (
    <section className='py-16'>
      <div className='mb-12 text-center'>
        <h2 className='mb-4 text-3xl font-bold'>Key Features</h2>
        <p className='text-lg text-muted-foreground'>
          Everything you need for the perfect listening experience
        </p>
      </div>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {features.map((feature, idx) => (
          <Card
            key={idx}
            className='group p-6 transition-all hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1'
          >
            <feature.icon className='mb-4 h-10 w-10 text-primary transition-transform group-hover:scale-110' />
            <h3 className='mb-2 text-xl font-semibold'>{feature.title}</h3>
            <p className='text-muted-foreground'>{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
};
