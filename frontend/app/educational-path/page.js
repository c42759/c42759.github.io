import Timeline from '@/components/Timeline';
import educationalPath from '@/data/educationalPath.json';

export const metadata = {
  title: 'Educational Path | Carlos Quintinha',
  description: 'My educational background and studies.',
};

export default function EducationalPath() {
  return (
    <div className="w-full pt-8 animate-in fade-in duration-500">
      <Timeline title="Educational Path" items={educationalPath} />
    </div>
  );
}
