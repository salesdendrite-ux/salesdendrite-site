import ModulePage from '@/components/ModulePage';
import { MODULES } from '@/lib/data';

export function generateStaticParams() {
  return MODULES.filter(m => m.slug !== 'settings').map(m => ({ module: m.slug }));
}

export function generateMetadata({ params }) {
  const m = MODULES.find(x => x.slug === params.module);
  if (!m) return {};
  return {
    title: `${m.title} — SalesDendrite`,
    description: m.short,
  };
}

export default function Page() {
  return <ModulePage />;
}
