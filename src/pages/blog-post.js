import React, { useEffect, useState } from 'react';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { Link, useParams } from 'react-router-dom';

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

const renderOptions = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const fields = node.data?.target?.fields || {};
      const url = fields.file?.url;
      if (!url) return null;
      return (
        <figure className="blog-embedded-asset">
          <img src={`https:${url}`} alt={fields.description || fields.title || ''} />
          {fields.title && <figcaption>{fields.title}</figcaption>}
        </figure>
      );
    },
    [INLINES.HYPERLINK]: (node, children) => (
      <a href={node.data.uri} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  }
};

const BlogPostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEntries('blogPost', { 'fields.slug': slug, limit: 1 }).then(items => {
      if (items && items.length > 0) {
        setPost(items[0].fields);
      }
      setLoading(false);
    });
  }, [slug]);

  return (
    <>
      <Header />
      <main id="main-content">
        {!loading && post && <PageNameHeader pageName={post.title} />}
        {!loading && !post && <PageNameHeader pageName="Post not found" />}
        <article className="site-wrap blog-post-page">
          <Link to="/blog" className="blog-back-link">← Back to blog</Link>
          {loading && <p className="blog-empty">Loading…</p>}
          {!loading && !post && (
            <div className="blog-empty">
              <p>
                We couldn&apos;t find that post. <Link to="/blog">View all posts</Link>.
              </p>
            </div>
          )}
          {!loading && post && (
            <>
              {post.heroImage?.fields?.file?.url && (
                <img
                  src={`https:${post.heroImage.fields.file.url}`}
                  alt=""
                  className="blog-post-hero"
                />
              )}
              <header className="blog-post-header">
                <span className="blog-post-date">{formatDate(post.publishDate)}</span>
                {post.tags && post.tags.length > 0 && (
                  <div className="blog-post-tags">
                    {post.tags.map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                )}
              </header>
              <div className="blog-post-body">
                {post.body && documentToReactComponents(post.body, renderOptions)}
              </div>
            </>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogPostPage;
