import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const reviews = [
  {
    name: 'Sarah Johnson',
    rating: 5,
    date: '2 weeks ago',
    comment:
      "Best headphones I've ever owned! The sound quality is incredible and the noise cancellation actually works. Battery life is impressive too.",
    verified: true,
  },
  {
    name: 'Michael Chen',
    rating: 5,
    date: '1 month ago',
    comment:
      'Worth every penny. Super comfortable for long listening sessions and the build quality feels premium. Highly recommended!',
    verified: true,
  },
  {
    name: 'Emma Williams',
    rating: 4,
    date: '1 month ago',
    comment:
      "Great sound quality and features. Only minor complaint is they're a bit heavy, but you get used to it. Overall very happy with the purchase.",
    verified: true,
  },
];

export const ProductReviews = () => {
  return (
    <section className='py-16'>
      <div className='mb-12 text-center'>
        <h2 className='mb-4 text-3xl font-bold'>Customer Reviews</h2>
        <p className='text-lg text-muted-foreground'>
          See what our customers are saying
        </p>
      </div>
      <div className='space-y-6'>
        {reviews.map((review, idx) => (
          <Card
            key={idx}
            className='p-6 transition-all hover:shadow-[var(--shadow-soft)]'
          >
            <div className='flex items-start gap-4'>
              <Avatar className='h-12 w-12'>
                <AvatarFallback className='bg-primary text-primary-foreground'>
                  {review.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </AvatarFallback>
              </Avatar>
              <div className='flex-1 space-y-2'>
                <div className='flex items-center justify-between'>
                  <div>
                    <p className='font-semibold'>{review.name}</p>
                    <p className='text-sm text-muted-foreground'>
                      {review.date}
                    </p>
                  </div>
                  {review.verified && (
                    <span className='rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary'>
                      Verified Purchase
                    </span>
                  )}
                </div>
                <div className='flex'>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? 'fill-primary text-primary'
                          : 'fill-muted text-muted'
                      }`}
                    />
                  ))}
                </div>
                <p className='text-foreground leading-relaxed'>
                  {review.comment}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
