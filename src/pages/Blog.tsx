import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon, SearchIcon } from 'lucide-react';
import { Seo } from '../components/ui/Seo';
import { PageHero } from '../components/ui/PageHero';
import { Section, SectionHeading } from '../components/ui/Section';
import { Reveal } from '../components/ui/Reveal';
import { LeadCTA } from '../components/ui/LeadCTA';
import { blogCategories, blogImageByCategory, blogPosts, type BlogCategory } from '../data/blog';
import { LOGO_URL } from '../data/site';

const PER_PAGE = 9;

export function Blog() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<BlogCategory | 'All'>('All');
  const [page, setPage] = useState(1);

  const featured = blogPosts[0];

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return blogPosts.filter((post) => {
      const matchesCategory = category === 'All' || post.category === category;
      const matchesQuery =
      term.length === 0 ||
      post.title.toLowerCase().includes(term) ||
      post.excerpt.toLowerCase().includes(term);
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const visible = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  const resetTo = (next: () => void) => {
    next();
    setPage(1);
  };

  return (
    <>
      <Seo
        title="Parent Education Centre | Child Hearing, Speech & Development Blog | PARC"
        description="Parent-friendly articles from PARC Nashik on pediatric audiology, speech and language development, occupational therapy, sensory processing, learning support and early intervention." />
      
      <PageHero
        eyebrow="Parent Education Centre"
        title="Learn. Understand. Support."
        intro={
        <p>
            Practical, parent-friendly reading on hearing, communication, learning, sensory processing
            and development — written to help you understand what you are seeing at home.
          </p>
        } />
      

      <Section tone="white">
        {/* Featured article */}
        <Reveal>
          <article className="overflow-hidden rounded-panel border border-brand-100 bg-brand-50 shadow-ring lg:flex">
            <div className="flex w-full items-center justify-center bg-gradient-to-br from-brand-50 via-white to-accent-50 p-6 sm:p-8 lg:w-[46%] lg:p-10">
              <div className="w-full overflow-hidden rounded-[26px] border border-brand-100 bg-white p-3 shadow-soft sm:p-5">
                <img
                  src={blogImageByCategory[featured.category]}
                  alt={featured.title}
                  className="h-56 w-full rounded-2xl object-cover sm:h-64"
                  loading="lazy"
                  decoding="async"
                />

                <div className="mt-5 flex items-center justify-between gap-3">
                  <img
                    src={LOGO_URL}
                    alt="PARC logo"
                    className="h-12 w-auto object-contain sm:h-14"
                    loading="lazy"
                    decoding="async" />
                  <span className="rounded-full bg-accent-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-brand-700">
                    Featured
                  </span>
                </div>

                <div className="mt-5 rounded-2xl bg-brand-50 p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-500">Parent Education</p>
                  <p className="mt-2 font-display text-2xl font-extrabold leading-tight text-brand-700">Better understanding</p>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl bg-brand-700 p-3 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-100/80">Focus</p>
                    <p className="mt-2 text-sm font-semibold">Hearing &amp; communication</p>
                  </div>
                  <div className="rounded-2xl border border-brand-100 bg-white p-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-500">Support</p>
                    <p className="mt-2 text-sm font-semibold text-brand-700">Whole-child development</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-1 flex-col justify-center p-7 sm:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-accent-500 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-700">
                  Featured
                </span>
                <span className="text-xs font-semibold text-brand-500">{featured.category}</span>
                <span className="text-xs text-brand-800/50">{featured.readTime}</span>
              </div>
              <h2 className="mt-5 font-display text-2xl font-extrabold leading-tight text-brand-700 sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-brand-800/70">{featured.excerpt}</p>
              <Link
                to={`/blog/${featured.slug}`}
                className="group mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-brand-500">
                
                Read More
                <ArrowRightIcon
                  className="h-4 w-4 transition-transform duration-200 ease-premium group-hover:translate-x-1"
                  strokeWidth={2.25} />
                
              </Link>
            </div>
          </article>
        </Reveal>

        {/* Filters */}
        <div className="mt-14">
          <SectionHeading eyebrow="All Articles" title="Browse by Topic" />

          <div className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-sm">
              <label htmlFor="blog-search" className="sr-only">
                Search articles
              </label>
              <SearchIcon
                aria-hidden="true"
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-400"
                strokeWidth={2} />
              
              <input
                id="blog-search"
                type="search"
                value={query}
                onChange={(event) => resetTo(() => setQuery(event.target.value))}
                placeholder="Search articles"
                className="w-full rounded-full border border-brand-200 bg-white py-3 pl-11 pr-4 text-sm text-brand-800 placeholder:text-brand-800/40 transition-colors duration-150 focus:border-brand-500" />
              
            </div>

            <ul className="parc-hide-scrollbar -mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
              {(['All', ...blogCategories] as const).map((item) =>
              <li key={item}>
                  <button
                  type="button"
                  onClick={() => resetTo(() => setCategory(item))}
                  aria-pressed={category === item}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-150 ${
                  category === item ?
                  'bg-brand-500 text-white' :
                  'bg-brand-50 text-brand-700 hover:bg-brand-100'}`
                  }>
                  
                    {item}
                  </button>
                </li>
              )}
            </ul>
          </div>

          {visible.length === 0 ?
          <p className="mt-12 rounded-panel border border-brand-100 bg-brand-50 p-10 text-center text-base font-medium text-brand-800/70">
              No articles match your search yet. Try a different topic or keyword.
            </p> :

          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((post, index) =>
            <Reveal as="li" key={post.id} delay={Math.min(index * 0.04, 0.28)}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-panel border border-brand-100 bg-white shadow-ring transition-[transform,box-shadow,border-color] duration-200 ease-premium hover:-translate-y-1 hover:border-brand-200 hover:shadow-lift">
                    <img
                      src={blogImageByCategory[post.category]}
                      alt={post.title}
                      className="h-44 w-full object-cover"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="flex h-full flex-col p-6">
                      <div className="flex items-center justify-between gap-3">
                        <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-bold text-brand-600">
                          {post.category}
                        </span>
                        <span className="text-xs text-brand-800/50">{post.readTime}</span>
                      </div>
                      <h3 className="mt-4 font-display text-lg font-bold leading-snug text-brand-700">
                        {post.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-brand-800/70">{post.excerpt}</p>
                      <Link
                    to={`/blog/${post.slug}`}
                    className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold uppercase tracking-wide text-brand-500">
                    
                        Read More
                        <ArrowRightIcon
                      className="h-4 w-4 transition-transform duration-200 ease-premium group-hover:translate-x-1"
                      strokeWidth={2.25} />
                    
                      </Link>
                    </div>
                  </article>
                </Reveal>
            )}
            </ul>
          }

          {totalPages > 1 ?
          <nav aria-label="Pagination" className="mt-12 flex items-center justify-center gap-2">
              <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              aria-label="Previous page"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-600 transition-colors duration-150 hover:bg-brand-50 disabled:opacity-40">
              
                <ChevronLeftIcon className="h-4 w-4" strokeWidth={2.25} />
              </button>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) =>
            <button
              key={number}
              type="button"
              onClick={() => setPage(number)}
              aria-current={currentPage === number ? 'page' : undefined}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-colors duration-150 ${
              currentPage === number ?
              'bg-brand-500 text-white' :
              'border border-brand-200 bg-white text-brand-600 hover:bg-brand-50'}`
              }>
              
                  {number}
                </button>
            )}
              <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              aria-label="Next page"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-200 bg-white text-brand-600 transition-colors duration-150 hover:bg-brand-50 disabled:opacity-40">
              
                <ChevronRightIcon className="h-4 w-4" strokeWidth={2.25} />
              </button>
            </nav> :
          null}
        </div>
      </Section>

      <LeadCTA
        title="Still Not Sure What You Are Seeing at Home?"
        body={
        <p>
            Reading helps, but an assessment gives you answers specific to your child. Our team can
            guide you on the right first step.
          </p>
        } />
      
    </>);

}