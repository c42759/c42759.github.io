import Gallery from '@/components/Gallery';
import galleryData from '@/data/gallery.json';

export const metadata = {
  title: 'Photography Gallery | Carlos Quintinha',
  description: 'Curated photography spanning brutalist architecture, cityscapes, developer workspaces, and coastal landscapes.',
};

export default function GalleryPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cv-orange/10 border border-cv-orange/30 text-cv-orange text-xs font-mono font-bold uppercase tracking-wider mb-4">
          <span className="w-2 h-2 rounded-full bg-cv-orange animate-pulse"></span>
          <span>VISUAL ARCHIVE &bull; {galleryData.length} PHOTOGRAPHS</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-cv-dark dark:text-white mb-6">
          Photography <span className="text-cv-orange">Gallery</span>
        </h1>

        <p className="text-base sm:text-lg text-cv-dark/75 dark:text-cv-light/75 leading-relaxed font-normal">
          A personal collection of frames captured across urban architecture, industrial textures, workspace benches, natural horizons, me and my life. Click any photograph to view in full resolution.
        </p>
      </div>

      {/* Dynamic Masonry Stream */}
      <Gallery photos={galleryData} />
    </div>
  );
}
