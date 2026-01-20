import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

type Props = {
  loading?: boolean;
};

export function CommunityHelpSection({ loading }: Props = {}) {
  if (loading) {
    return (
      <div className="font-game p-4 border-4 rounded-2xl mt-7 flex flex-col items-center">
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-6 w-48 mt-3" />
        <Skeleton className="h-12 w-40 mt-4" />
      </div>
    );
  }

  return (
    <div className="font-game p-4 border-4 rounded-2xl mt-7 flex flex-col items-center">
      <h2 className="text-3xl">Need Help</h2>
      <p className="text-2xl">Ask Question in our community</p>
      <Button className="text-2xl mt-3" variant={'pixel'} size={'lg'}>
        Go To Community
      </Button>
    </div>
  );
}
