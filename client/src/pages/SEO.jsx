import React from 'react';
import { Helmet } from 'react-helmet';

const BlogPost = ({ title, description, author, date }) => {
  const metaTitle = `${title} - My Blog`;
  const metaDescription = `${description} - Read the latest articles on various topics and stay informed with insights and tips from our expert authors.`;
  const metaAuthor = `${author} Jasper Pinoliad Ayawan`;
  const metaDate = new Date(date).toLocaleDateString();
  const metaKeywords = 'blog, articles, news, insights, tips, expert authors';

  return (
    <div>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="author" content={metaAuthor} />
        <meta name="keywords" content={metaKeywords} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={date} />
      </Helmet>
      {/* Rest of your blog post component */}
    </div>
  );
};

export default BlogPost;