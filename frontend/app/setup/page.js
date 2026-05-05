import WorkSetup from '@/components/WorkSetup';
import workSetup from '@/data/workSetup.json';

export const metadata = {
  title: 'My Setup | Carlos Quintinha',
  description: 'My work setup and workspace environment.',
};

export default function Setup() {
  return (
    <div className="w-full pt-8 animate-in fade-in duration-500">
      <WorkSetup setup={workSetup} />
    </div>
  );
}
