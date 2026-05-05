import GamerLife from '@/components/GamerLife';
import gamesData from '@/data/games.json';

export const metadata = {
  title: 'Gamer Life | Carlos Quintinha',
  description: 'Games I play and my gaming life.',
};

export default function Gaming() {
  return (
    <div className="w-full pt-8 animate-in fade-in duration-500">
      <GamerLife games={gamesData} />
    </div>
  );
}
