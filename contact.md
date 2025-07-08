---
layout: default
title: Contact
description: Get in touch with Projecto 4 Patas to discuss AI research, collaboration opportunities, or share your thoughts on our work.
---

<div class="page-content">
    <div class="container">
        <header class="page-header">
            <h1>Contact</h1>
            <p class="page-description">Get in touch to discuss AI research, collaboration, or share your thoughts</p>
        </header>

        <div class="contact-content">
            <div class="contact-info">
                <h2>Let's Connect</h2>
                
                <p>We're always interested in engaging with researchers, practitioners, policymakers, and anyone passionate about the future of AI. Whether you have questions about our work, want to propose a collaboration, or simply want to share your thoughts, we'd love to hear from you.</p>

                <div class="contact-methods">
                    <div class="contact-method">
                        <h3>💬 General Inquiries</h3>
                        <p>For general questions, feedback, or discussion about our articles and research.</p>
                    </div>

                    <div class="contact-method">
                        <h3>🤝 Collaboration</h3>
                        <p>Interested in collaborating on research, writing, or projects? We're open to working with like-minded individuals and organizations.</p>
                    </div>

                    <div class="contact-method">
                        <h3>📝 Guest Writing</h3>
                        <p>Have insights to share? We welcome guest contributions that align with our mission and standards.</p>
                    </div>

                    <div class="contact-method">
                        <h3>🎯 Speaking & Workshops</h3>
                        <p>Available for speaking engagements, workshops, and advisory roles on AI-related topics.</p>
                    </div>
                </div>

                <div class="social-links">
                    <h3>Follow Our Work</h3>
                    <div class="social-link-list">
                        <a href="https://github.com/projecto4patas" class="social-link">
                            <span class="social-icon">🐙</span>
                            GitHub
                        </a>
                        <a href="{{ '/feed.xml' | relative_url }}" class="social-link">
                            <span class="social-icon">📡</span>
                            RSS Feed
                        </a>
                    </div>
                </div>
            </div>

            <div class="contact-form-section">
                <h2>Send a Message</h2>
                <div class="contact-form">
                    <p class="form-note">Currently, the best way to reach us is through our GitHub repository or by engaging with our content directly. We're working on setting up additional contact methods and will update this page soon.</p>
                    
                    <div class="github-contact">
                        <h4>Via GitHub</h4>
                        <ul>
                            <li><a href="https://github.com/projecto4patas/projecto4patas.github.io/issues">Open an Issue</a> - For questions, feedback, or discussion</li>
                            <li><a href="https://github.com/projecto4patas/projecto4patas.github.io/discussions">Start a Discussion</a> - For broader conversations about our work</li>
                        </ul>
                    </div>

                    <div class="response-time">
                        <h4>Response Time</h4>
                        <p>We aim to respond to all inquiries within 48-72 hours. For urgent matters, please indicate this in your message.</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="newsletter-signup">
            <h2>Stay Updated</h2>
            <p>Subscribe to our RSS feed to stay informed about new articles and developments in AI research and philosophy.</p>
            <a href="{{ '/feed.xml' | relative_url }}" class="btn">Subscribe to RSS</a>
        </div>
    </div>
</div>

<style>
.page-content {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 1rem;
}

.page-header {
    text-align: center;
    margin-bottom: 3rem;
}

.page-header h1 {
    font-size: 2.5rem;
    color: #e8e8e8;
    margin-bottom: 1rem;
}

.page-description {
    color: #b8b8b8;
    font-size: 1.1rem;
}

.contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-bottom: 3rem;
}

.contact-info h2,
.contact-form-section h2 {
    color: #e8e8e8;
    margin-bottom: 1.5rem;
    font-size: 1.8rem;
}

.contact-info p {
    color: #b8b8b8;
    line-height: 1.6;
    margin-bottom: 1.5rem;
}

.contact-methods {
    margin-bottom: 2rem;
}

.contact-method {
    margin-bottom: 1.5rem;
    padding: 1.5rem;
    background-color: #2d2d2d;
    border-radius: 8px;
    border: 1px solid #404040;
}

.contact-method h3 {
    color: #e8e8e8;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
}

.contact-method p {
    color: #b8b8b8;
    margin-bottom: 0;
    font-size: 0.95rem;
}

.social-links {
    margin-bottom: 2rem;
}

.social-links h3 {
    color: #e8e8e8;
    margin-bottom: 1rem;
    font-size: 1.2rem;
}

.social-link-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.social-link {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #4a9eff;
    text-decoration: none;
    padding: 0.5rem;
    border-radius: 5px;
    transition: background-color 0.2s ease;
}

.social-link:hover {
    background-color: #383838;
    color: #3d8bdb;
}

.social-icon {
    font-size: 1.2rem;
}

.contact-form {
    background-color: #2d2d2d;
    padding: 2rem;
    border-radius: 8px;
    border: 1px solid #404040;
}

.form-note {
    color: #b8b8b8;
    font-style: italic;
    margin-bottom: 1.5rem;
}

.github-contact,
.response-time {
    margin-bottom: 1.5rem;
}

.github-contact h4,
.response-time h4 {
    color: #e8e8e8;
    margin-bottom: 0.5rem;
    font-size: 1rem;
}

.github-contact ul {
    list-style: none;
    margin-left: 0;
}

.github-contact li {
    margin-bottom: 0.5rem;
}

.github-contact a {
    color: #4a9eff;
    text-decoration: none;
}

.github-contact a:hover {
    color: #3d8bdb;
}

.response-time p {
    color: #b8b8b8;
    margin-bottom: 0;
}

.newsletter-signup {
    text-align: center;
    padding: 2rem;
    background-color: #2d2d2d;
    border-radius: 8px;
    border: 1px solid #404040;
}

.newsletter-signup h2 {
    color: #e8e8e8;
    margin-bottom: 1rem;
    font-size: 1.8rem;
}

.newsletter-signup p {
    color: #b8b8b8;
    margin-bottom: 1.5rem;
}

.btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background-color: #4a9eff;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    font-weight: 500;
    transition: background-color 0.2s ease;
}

.btn:hover {
    background-color: #3d8bdb;
    color: white;
}

@media (max-width: 768px) {
    .contact-content {
        grid-template-columns: 1fr;
        gap: 2rem;
    }
    
    .page-header h1 {
        font-size: 2rem;
    }
    
    .contact-info h2,
    .contact-form-section h2 {
        font-size: 1.5rem;
    }
    
    .contact-form {
        padding: 1.5rem;
    }
}
</style>