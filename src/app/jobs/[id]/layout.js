import { jobs, getJobWithCompany } from '@/lib/data';

export async function generateStaticParams() {
  return jobs.map((job) => ({
    id: job.id,
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const jobData = getJobWithCompany(id);
  if (!jobData) return { title: 'Job Detail | JobSphere' };
  return {
    title: `${jobData.title} at ${jobData.companyData?.name}`,
    description: jobData.description.slice(0, 160),
  };
}

export default function JobDetailLayout({ children }) {
  return <>{children}</>;
}
