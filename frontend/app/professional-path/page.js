import Timeline from '@/components/Timeline';
import professionalPath from '@/data/professionalPath.json';

export const metadata = {
  title: 'Professional Path | Carlos Quintinha',
  description: 'My professional experience and career path.',
};

export default function ProfessionalPath() {
  return (
    <div className="w-full pt-8 animate-in fade-in duration-500">
      <Timeline title="Professional Path" items={professionalPath} />
    </div>
  );
}
