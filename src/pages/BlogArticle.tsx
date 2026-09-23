import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRightIcon, CalendarCheckIcon } from 'lucide-react';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/ui/PageHero';
import { Section, SectionHeading } from '../components/ui/Section';
import { Reveal } from '../components/ui/Reveal';
import { ButtonLink } from '../components/ui/Button';
import { LeadCTA } from '../components/ui/LeadCTA';
import { blogImageByCategory, blogPosts } from '../data/blog';

export function BlogArticle() {
  const { slug } = useParams<{slug: string;}>();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <>
        <Seo
          title="Article Not Found | PARC Nashik"
          description="The article you are looking for is not available. Browse the PARC Parent Education Centre for parent-friendly reading on child development." />
        
        <PageHero
          eyebrow="Parent Education Centre"
          title="We couldn't find that article"
          intro={<p>The link may be outdated. You can browse all articles instead.</p>}
          actions={
          <ButtonLink to="/blog" variant="accent" size="lg">
              Browse All Articles
            </ButtonLink>
          } />
        
      </>);

  }

  const related = blogPosts.
  filter((item) => item.category === post.category && item.id !== post.id).
  slice(0, 3);

  return (
    <>
      <Seo title={`${post.title} | PARC Nashik`} description={post.excerpt} />
      <PageHero
        eyebrow={post.category}
        title={post.title}
        intro={
        <>
            <p>{post.excerpt}</p>
            <p className="text-sm text-brand-100/70">{post.readTime}</p>
          </>
        }
        actions={
        <ButtonLink
          to="/contact"
          variant="accent"
          size="lg"
          icon={<CalendarCheckIcon className="h-5 w-5" strokeWidth={2} />}>
          
            Book an Assessment
          </ButtonLink>
        } />
      

      <Section tone="white">
        <div className="max-w-3xl">
          <div className="overflow-hidden rounded-panel border border-brand-100 bg-brand-50 shadow-ring">
            <img
              src={blogImageByCategory[post.category]}
              alt={post.title}
              className="h-64 w-full object-cover sm:h-80"
              loading="lazy"
              decoding="async"
            />
            <div className="p-7 sm:p-9">
              <h2 className="font-display text-xl font-bold text-brand-700">Article coming soon</h2>
              <p className="mt-3 text-base leading-relaxed text-brand-800/75">
                The full text for this article has not been published yet. If you have a question about
                your child in the meantime, our team is happy to guide you on where to start.
              </p>
              <ButtonLink to="/contact" className="mt-6">
                Talk to Our Team
              </ButtonLink>
            </div>
          </div>
        </div>

        {related.length > 0 ?
        <div className="mt-14">
            <SectionHeading eyebrow="Related Reading" title={`More on ${post.category}`} />
            <ul className="mt-8 grid gap-5 sm:grid-cols-3">
              {related.map((item, index) =>
            <Reveal as="li" key={item.id} delay={Math.min(index * 0.05, 0.2)}>
                  <article className="group flex h-full flex-col rounded-panel border border-brand-100 bg-white p-6 shadow-ring transition-[transform,box-shadow] duration-200 ease-premium hover:-translate-y-1 hover:shadow-lift">
                    <h3 className="font-display text-base font-bold leading-snug text-brand-700">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-brand-800/70">{item.excerpt}</p>
                    <Link
                  to={`/blog/${item.slug}`}
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold uppercase tracking-wide text-brand-500">
                  
                      Read More
                      <ArrowRightIcon
                    className="h-4 w-4 transition-transform duration-200 ease-premium group-hover:translate-x-1"
                    strokeWidth={2.25} />
                  
                    </Link>
                  </article>
                </Reveal>
            )}
            </ul>
          </div> :
        null}
      </Section>

      <LeadCTA />
    </>);

}