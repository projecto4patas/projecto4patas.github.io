# Projecto 4 Patas Blog

A Jekyll-powered blog focused on academic writing, research methodologies, and scholarly communication. Built with a modern, dark theme optimized for long-form reading.

## 🌟 Features

- **Clean, Modern Design**: Dark theme with optimal typography for academic content
- **Mobile-Responsive**: Fully responsive design that works on all devices
- **Fast Loading**: Optimized CSS and JavaScript for excellent performance
- **SEO-Friendly**: Built-in SEO optimization with meta tags and structured data
- **GitHub Issues Comments**: Native GitHub Issues integration for comments
- **Reading Time**: Automatic reading time calculation for posts
- **Archive & Search**: Searchable archive page for easy content discovery
- **RSS Feed**: Automatic RSS feed generation
- **Social Sharing**: Built-in social sharing functionality
- **Syntax Highlighting**: Code syntax highlighting with copy-to-clipboard
- **Print-Friendly**: Optimized styles for printing

## 🚀 Quick Start

### Prerequisites

- Ruby 2.7+ 
- Bundler
- Git

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/projecto4patas/projecto4patas.github.io.git
   cd projecto4patas.github.io
   ```

2. **Install dependencies**:
   ```bash
   bundle install
   ```

3. **Run the development server**:
   ```bash
   bundle exec jekyll serve
   ```

4. **Open in browser**: Visit `http://localhost:4000`

### GitHub Pages Deployment

This blog is configured for GitHub Pages deployment:

1. **Enable GitHub Pages** in your repository settings
2. **Set source** to "Deploy from a branch"
3. **Select branch** as `main` (or your default branch)
4. **GitHub Pages will automatically build and deploy** your site

## 📁 Project Structure

```
projecto4patas.github.io/
├── _config.yml          # Jekyll configuration
├── Gemfile             # Ruby dependencies
├── index.html          # Homepage
├── _layouts/           # Page templates
│   ├── default.html    # Base template
│   ├── post.html       # Blog post template
│   └── page.html       # Static page template
├── _includes/          # Reusable components
│   ├── header.html     # Site header
│   ├── footer.html     # Site footer
│   └── comments.html   # Comments section
├── _posts/             # Blog posts
│   └── 2024-01-15-academic-writing-structured-approach.md
├── _sass/              # Sass stylesheets
│   └── main.scss       # Main stylesheet
├── assets/             # Static assets
│   ├── css/
│   │   └── main.scss   # CSS entry point
│   └── js/
│       └── main.js     # JavaScript functionality
└── pages/              # Static pages
    ├── about.md        # About page
    ├── archive.html    # Archive page
    └── contact.html    # Contact page
```

## ✍️ Writing Posts

### Creating a New Post

1. **Create a new file** in `_posts/` with the format: `YYYY-MM-DD-title.md`

2. **Add front matter**:
   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   date: 2024-01-15 10:00:00 +0000
   categories: [category1, category2]
   tags: [tag1, tag2, tag3]
   author: "Your Name"
   excerpt: "Brief description of your post"
   ---
   ```

3. **Write your content** in Markdown below the front matter

### Post Features

- **Reading Time**: Automatically calculated and displayed
- **Author Bio**: Shows author information if specified
- **Categories & Tags**: Organize and categorize your content
- **Social Sharing**: Built-in sharing buttons
- **Comments**: GitHub Issues-powered comments
- **Navigation**: Previous/next post navigation

## 🎨 Customization

### Site Configuration

Edit `_config.yml` to customize:

- Site title and description
- Social media links
- Navigation menu
- GitHub repository settings
- Analytics tracking

### Styling

The design uses a dark theme with customizable variables in `_sass/main.scss`:

```scss
// Dark theme variables
$background-color: #1a1a1a;
$surface-color: #2d2d2d;
$text-color: #e0e0e0;
$accent-color: #4a9eff;
// ... more variables
```

### Adding Pages

1. Create a new file in `pages/` or root directory
2. Add front matter with `layout: page`
3. Update navigation in `_config.yml`

## 🔧 Advanced Features

### GitHub Issues Comments

Each post can have comments powered by GitHub Issues:

1. Create a GitHub Issue for each post
2. Add the issue number to the post's front matter
3. Comments will load automatically

### Newsletter Integration

The footer includes a newsletter signup form ready for integration with services like:
- Mailchimp
- ConvertKit
- Substack
- Custom backend

### Analytics

Add Google Analytics by setting your tracking ID in `_config.yml`:

```yaml
google_analytics: YOUR_TRACKING_ID
```

### SEO Optimization

The blog includes:
- Automatic meta tags
- Open Graph tags
- Twitter Cards
- Structured data
- Sitemap generation

## 📱 Mobile Optimization

The design is fully responsive with:
- Mobile-first approach
- Touch-friendly navigation
- Optimized typography
- Fast loading times

## 🔍 Search Functionality

The archive page includes search functionality:
- Real-time search results
- No external dependencies
- Keyboard shortcuts support

## 🖨️ Print Styles

Special print styles ensure:
- Clean, readable printed pages
- Removal of navigation and interactive elements
- Optimized typography for print

## 🚀 Performance

The blog is optimized for performance:
- Minified CSS and JavaScript
- Lazy loading for images
- Efficient font loading
- Minimal dependencies

## 🔐 Security

Security considerations:
- No external tracking scripts by default
- Secure social sharing
- Content Security Policy ready
- Safe HTML rendering

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

### Areas for Contribution

- Bug fixes and improvements
- New features and functionality
- Documentation updates
- Design enhancements
- Performance optimizations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

Need help? Here are your options:

- **GitHub Issues**: For bugs and feature requests
- **Discussions**: For general questions and community support
- **Email**: Contact us at contact@projecto4patas.com

## 🔄 Updates

Stay updated with the latest changes:
- Watch the repository for releases
- Follow the RSS feed
- Subscribe to the newsletter

## 📊 Analytics & Monitoring

### Performance Metrics

Monitor your blog's performance:
- Page load times
- User engagement
- Content popularity
- Search rankings

### SEO Monitoring

Track your SEO performance:
- Google Search Console
- Keyword rankings
- Backlink analysis
- Content optimization

---

**Built with ❤️ using Jekyll and GitHub Pages**

*Happy writing! 📝*