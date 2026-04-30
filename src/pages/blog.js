import React, { useEffect, useMemo, useState } from 'react';

import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/Header';
import PageNameHeader from '../components/PageNameHeader';
import { fetchEntries } from '../services/contentfulClient';
import '../scss/blog.scss';

const formatDate = (iso) => {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTag, setActiveTag] = useState(null);
  const [activeYear, setActiveYear] = useState(null);

  useEffect(() => {
    fetchEntries('blogPost', { order: '-fields.publishDate' }).then(items => {
      setPosts(
        items.map(item => ({
          id: item.sys.id,
          title: item.fields.title,
          slug: item.fields.slug,
          publishDate: item.fields.publishDate,
          excerpt: item.fields.excerpt,
          heroImage: item.fields.heroImage?.fields?.file?.url
            ? `https:${item.fields.heroImage.fields.file.url}`
            : null,
          tags: item.fields.tags || []
        }))
      );
      setLoading(false);
    });
  }, []);

  const allTags = useMemo(() => {
    const set = new Set();
    posts.forEach(p => (p.tags || []).forEach(t => set.add(t)));
    return Array.from(set).sort();
  }, [posts]);

  const allYears = useMemo(() => {
    const set = new Set();
    posts.forEach(p => p.publishDate && set.add(new Date(p.publishDate).getFullYear()));
    return Array.from(set).sort((a, b) => b - a);
  }, [posts]);

  const filtered = posts.filter(p => {
    if (activeTag && !(p.tags || []).includes(activeTag)) return false;
    if (activeYear && new Date(p.publishDate).getFullYear() !== activeYear) return false;
    return true;
  });

  return (
    <>
      <Header />
      <main id="main-content">
        <PageNameHeader pageName="Blog" />
        <div className="site-wrap blog-page">
          {(allYears.length > 0 || allTags.length > 0) && (
            <div className="blog-filters">
              {allYears.length > 0 && (
                <div className="filter-group">
                  <span className="filter-label">Year:</span>
                  <button
                    type="button"
                    className={`chip ${!activeYear ? 'active' : ''}`}
                    onClick={() => setActiveYear(null)}
                  >
                    All
                  </button>
                  {allYears.map(y => (
                    <button
                      key={y}
                      type="button"
                      className={`chip ${activeYear === y ? 'active' : ''}`}
                      onClick={() => setActiveYear(y)}
                    >
                      {y}
                    </button>
                  ))}
                </div>
              )}
              {allTags.length > 0 && (
                <div className="filter-group">
                  <span className="filter-label">Tag:</span>
                  <button
                    type="button"
                    className={`chip ${!activeTag ? 'active' : ''}`}
                    onClick={() => setActiveTag(null)}
                  >
                    All
                  </button>
                  {allTags.map(t => (
                    <button
                      key={t}
                      type="button"
                      className={`chip ${activeTag === t ? 'active' : ''}`}
                      onClick={() => setActiveTag(t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {loading && <p className="blog-empty">Loading…</p>}
          {!loading && filtered.length === 0 && (
            <p className="blog-empty">
              {posts.length === 0
                ? 'No posts yet — check back soon.'
                : 'No posts match your filters.'}
            </p>
          )}

          <div className="blog-list">
            {filtered.map(post => (
              <Link to={`/blog/${post.slug}`} key={post.id} className="blog-card">
                {post.heroImage && (
                  <img src={post.heroImage} alt="" className="blog-card-image" />
                )}
                <div className="blog-card-body">
                  <span className="blog-card-date">{formatDate(post.publishDate)}</span>
                  <h2 className="blog-card-title">{post.title}</h2>
                  {post.excerpt && <p className="blog-card-excerpt">{post.excerpt}</p>}
                  {post.tags && post.tags.length > 0 && (
                    <div className="blog-card-tags">
                      {post.tags.map(t => (
                        <span key={t} className="tag">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
