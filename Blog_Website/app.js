// ===== STATE MANAGEMENT =====
let postsData = [];
let currentView = 'home';
let currentCategory = 'all';

// ===== EMBEDDED DATA =====
const POSTS_DATA = {
  "posts": [
    {
      "id": 1,
      "title": "Getting Started with Modern JavaScript ES6+",
      "content": "JavaScript has evolved significantly over the years, transforming from a simple scripting language into a powerful tool for building complex web applications. Modern JavaScript, often referred to as ES6+ or ECMAScript 2015 and beyond, introduces numerous features that make code more readable, maintainable, and efficient.\n\nOne of the most significant additions is the introduction of let and const for variable declarations, replacing the problematic var keyword. Arrow functions provide a more concise syntax for writing functions and solve the this binding issue that plagued traditional functions. Template literals make string interpolation and multi-line strings much more elegant.\n\nDestructuring assignment allows you to extract values from arrays and objects with minimal code. The spread operator and rest parameters provide flexible ways to work with function arguments and array/object manipulation. Promises and async/await revolutionized asynchronous programming, making it easier to write and understand asynchronous code.\n\nModern JavaScript also includes classes for object-oriented programming, modules for better code organization, and new data structures like Map, Set, WeakMap, and WeakSet. Understanding these features is essential for any developer working with JavaScript today.",
      "excerpt": "Explore the essential features of modern JavaScript including ES6+ syntax, arrow functions, promises, and async/await that every developer should master.",
      "author": "Sarah Johnson",
      "date": "2024-01-15",
      "category": "JavaScript",
      "image": "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=800&h=400&fit=crop"
    },
    {
      "id": 2,
      "title": "Mastering Responsive Web Design Principles",
      "content": "Responsive web design is no longer optional—it's a necessity in today's multi-device world. With users accessing websites from smartphones, tablets, laptops, and desktops, your design must adapt seamlessly to different screen sizes and orientations.\n\nThe foundation of responsive design is the mobile-first approach. Start designing for the smallest screen size and progressively enhance the experience for larger screens. This ensures that your core content and functionality work on all devices. Use CSS media queries to apply different styles based on screen width, height, orientation, and other device characteristics.\n\nFlexbox and CSS Grid are powerful layout systems that make responsive design much easier. Flexbox excels at one-dimensional layouts (rows or columns), while Grid handles two-dimensional layouts with rows and columns. Both provide flexible, responsive layouts without relying on floats or positioning hacks.\n\nFluid typography using viewport units (vw, vh) and the clamp() function ensures text scales appropriately across devices. Images should be responsive using max-width: 100% and height: auto, or use the picture element for art direction. Consider touch targets—buttons and links should be at least 44x44 pixels for easy tapping on mobile devices.",
      "excerpt": "Learn the fundamental principles and techniques for creating responsive websites that work beautifully across all devices using modern CSS.",
      "author": "Michael Chen",
      "date": "2024-01-20",
      "category": "Web Design",
      "image": "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=400&fit=crop"
    },
    {
      "id": 3,
      "title": "CSS Grid Layout: Complete Developer Guide",
      "content": "CSS Grid Layout is a two-dimensional layout system that revolutionizes how we create web layouts. Unlike Flexbox, which is primarily one-dimensional, Grid allows you to work with rows and columns simultaneously, making it perfect for complex page layouts.\n\nThe basic concept involves defining a grid container with display: grid and then specifying the structure using grid-template-columns and grid-template-rows. You can use various units including pixels, percentages, fr (fractional units), and the minmax() function for flexible sizing. The repeat() function simplifies defining multiple tracks of the same size.\n\nGrid items can be placed explicitly using grid-column and grid-row properties, or they can flow automatically into the grid. The grid-area property provides a shorthand for positioning items. Grid gaps create spacing between grid items without affecting the outer edges.\n\nNamed grid lines and areas make your code more readable and maintainable. You can define template areas using grid-template-areas and place items using grid-area with named regions. This approach is particularly useful for responsive layouts where you want to rearrange content at different breakpoints.",
      "excerpt": "Master CSS Grid Layout with this comprehensive guide covering grid containers, positioning, alignment, and responsive design patterns.",
      "author": "Emily Rodriguez",
      "date": "2024-01-25",
      "category": "Frontend",
      "image": "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=800&h=400&fit=crop"
    },
    {
      "id": 4,
      "title": "Building Scalable RESTful APIs with Node.js",
      "content": "RESTful APIs are the backbone of modern web applications, enabling communication between frontend and backend systems. Node.js, with its non-blocking I/O and event-driven architecture, is an excellent choice for building fast, scalable APIs.\n\nStart by setting up Express.js, the most popular Node.js web framework. Express provides a minimal and flexible set of features for building web applications and APIs. Define routes using HTTP methods (GET, POST, PUT, DELETE) that correspond to CRUD operations. Use middleware for common tasks like parsing JSON, handling CORS, authentication, and error handling.\n\nStructure your API following REST principles: use nouns for resources, not verbs; use HTTP methods to indicate actions; return appropriate status codes; and maintain stateless communication. Implement proper error handling with meaningful error messages and status codes.\n\nValidate input data using libraries like Joi or express-validator to ensure data integrity and security. Implement authentication and authorization using JWT (JSON Web Tokens) or session-based authentication. Use environment variables for configuration and sensitive data, never hardcode credentials.",
      "excerpt": "Learn how to design and implement robust RESTful APIs using Node.js and Express, following industry best practices for security and scalability.",
      "author": "David Kim",
      "date": "2024-02-01",
      "category": "Backend",
      "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop"
    },
    {
      "id": 5,
      "title": "React Hooks: Modern State Management Guide",
      "content": "React Hooks, introduced in React 16.8, fundamentally changed how we write React components. Hooks allow you to use state and other React features in functional components, eliminating the need for class components in most cases.\n\nThe useState hook is the most basic and commonly used hook. It allows you to add state to functional components. Call useState with an initial value, and it returns an array with the current state value and a function to update it. Unlike class component state, you can have multiple useState calls for different pieces of state.\n\nThe useEffect hook handles side effects in functional components, replacing lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount. useEffect runs after every render by default, but you can control when it runs using the dependency array.\n\nCustom hooks are functions that use built-in hooks and can be shared across components. They follow the naming convention of starting with 'use' and can encapsulate complex logic, making your components cleaner and more reusable. Common examples include useLocalStorage, useDebounce, and useFetch.",
      "excerpt": "Discover React Hooks and how they simplify state management and side effects in functional components with practical code examples.",
      "author": "Jessica Martinez",
      "date": "2024-02-05",
      "category": "React",
      "image": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop"
    },
    {
      "id": 6,
      "title": "Web Performance Optimization: Best Practices",
      "content": "Web performance directly impacts user experience, conversion rates, and search engine rankings. A slow website frustrates users and costs businesses money. Fortunately, there are many techniques to improve performance.\n\nStart with optimizing images, which often account for the majority of page weight. Use modern formats like WebP or AVIF that provide better compression than JPEG or PNG. Implement responsive images using the picture element or srcset attribute to serve appropriately sized images for different devices. Use lazy loading for images below the fold to reduce initial page load time.\n\nMinify and compress your CSS, JavaScript, and HTML files. Remove unnecessary whitespace, comments, and code. Use tools like Webpack, Rollup, or Parcel to bundle and optimize your assets. Enable Gzip or Brotli compression on your server to reduce file transfer sizes.\n\nLeverage browser caching by setting appropriate cache headers for static assets. Use a Content Delivery Network (CDN) to serve assets from servers geographically closer to your users. Implement HTTP/2 or HTTP/3 for improved performance through multiplexing and server push.",
      "excerpt": "Boost your website's speed and performance with these proven optimization techniques covering images, code minification, caching, and CDN usage.",
      "author": "Alex Thompson",
      "date": "2024-02-10",
      "category": "Performance",
      "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
    },
    {
      "id": 7,
      "title": "TypeScript: A Complete Guide for JavaScript Developers",
      "content": "TypeScript is a superset of JavaScript that adds static typing and other features to help you write more robust and maintainable code. If you're a JavaScript developer, learning TypeScript can significantly improve your development experience and code quality.\n\nThe core benefit of TypeScript is static type checking. By adding type annotations to your variables, function parameters, and return values, TypeScript can catch errors at compile time rather than runtime. This leads to fewer bugs and better code documentation. Basic types include string, number, boolean, array, tuple, enum, any, void, null, and undefined.\n\nInterfaces and type aliases allow you to define custom types for objects and complex data structures. Interfaces are particularly useful for defining the shape of objects and can be extended or implemented by classes. Type aliases provide a way to create custom types and can represent unions, intersections, and other complex type combinations.\n\nGenerics enable you to write reusable code that works with multiple types while maintaining type safety. They're commonly used in functions, classes, and interfaces. TypeScript also provides excellent IDE support with features like autocomplete, refactoring, and inline documentation.",
      "excerpt": "Transition from JavaScript to TypeScript and learn how static typing can improve your code quality, catch bugs early, and enhance your development workflow.",
      "author": "Ryan Foster",
      "date": "2024-02-15",
      "category": "TypeScript",
      "image": "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&h=400&fit=crop"
    },
    {
      "id": 8,
      "title": "Git Version Control: Essential Commands & Workflows",
      "content": "Git is the most widely used version control system in software development. Mastering Git is essential for collaborating with other developers and managing your codebase effectively.\n\nUnderstand the basic Git workflow: working directory, staging area, and repository. Use 'git add' to stage changes, 'git commit' to save them to the repository, and 'git push' to upload to a remote repository. Write clear, descriptive commit messages that explain what changed and why.\n\nBranching is one of Git's most powerful features. Create branches for new features, bug fixes, or experiments using 'git branch' and 'git checkout' (or 'git switch' in newer versions). This allows you to work on multiple features simultaneously without affecting the main codebase. Merge branches using 'git merge' or use 'git rebase' for a cleaner history.\n\nUnderstand the difference between merge and rebase. Merging creates a merge commit that combines the histories of two branches, while rebasing rewrites history by applying commits from one branch onto another. Use 'git stash' to temporarily save uncommitted changes when you need to switch branches.",
      "excerpt": "Master Git version control with this comprehensive guide covering essential commands, branching strategies, and collaboration best practices for developers.",
      "author": "Laura Bennett",
      "date": "2024-02-20",
      "category": "DevOps",
      "image": "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=400&fit=crop"
    }
  ]
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    postsData = POSTS_DATA.posts;
    renderPostList(postsData);
    populateCategories();
    setupEventListeners();
    handleURLParams();
}

// ===== RENDERING FUNCTIONS =====
function renderPostList(posts) {
    const blogList = document.getElementById('blog-list');
    
    if (posts.length === 0) {
        blogList.innerHTML = '<div class="loading">No posts found.</div>';
        return;
    }

    blogList.innerHTML = posts.map(post => `
        <article class="blog-card" data-id="${post.id}">
            <img src="${post.image}" alt="${post.title}" class="blog-card-image" onerror="this.src='https://via.placeholder.com/400x200?text=Blog+Image'">
            <div class="blog-card-content">
                <span class="blog-card-category">${post.category}</span>
                <h3 class="blog-card-title">${post.title}</h3>
                <div class="blog-card-meta">
                    <span>👤 ${post.author}</span>
                    <span>📅 ${formatDate(post.date)}</span>
                </div>
                <p class="blog-card-excerpt">${post.excerpt}</p>
                <a href="#" class="read-more-btn" data-id="${post.id}">Read More →</a>
            </div>
        </article>
    `).join('');

    // Add click events to cards and read more buttons
    document.querySelectorAll('.blog-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('read-more-btn')) {
                const postId = parseInt(card.dataset.id);
                showSinglePost(postId);
            }
        });
    });

    document.querySelectorAll('.read-more-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const postId = parseInt(btn.dataset.id);
            showSinglePost(postId);
        });
    });
}

function renderSinglePost(post) {
    const postContent = document.getElementById('post-content');
    postContent.innerHTML = `
        <img src="${post.image}" alt="${post.title}" class="post-cover" onerror="this.src='https://via.placeholder.com/1200x400?text=Blog+Cover'">
        <div class="post-header">
            <h1 class="post-title">${post.title}</h1>
            <div class="post-meta">
                <span class="post-category">${post.category}</span>
                <span>👤 ${post.author}</span>
                <span>📅 ${formatDate(post.date)}</span>
            </div>
        </div>
        <div class="post-body">
            ${formatContent(post.content)}
        </div>
    `;
}

// ===== NAVIGATION & VIEW MANAGEMENT =====
function showSinglePost(postId) {
    const post = postsData.find(p => p.id === postId);
    if (!post) return;

    renderSinglePost(post);
    document.getElementById('blog-list').classList.add('hidden');
    document.getElementById('about-section').classList.add('hidden');
    document.getElementById('post-detail').classList.remove('hidden');
    document.querySelector('.filter-section').classList.add('hidden');
    
    // Update URL without reload
    window.history.pushState({ postId }, '', `?post=${postId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showBlogList() {
    document.getElementById('post-detail').classList.add('hidden');
    document.getElementById('about-section').classList.add('hidden');
    document.getElementById('blog-list').classList.remove('hidden');
    document.querySelector('.filter-section').classList.remove('hidden');
    
    window.history.pushState({}, '', window.location.pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showAboutSection() {
    document.getElementById('blog-list').classList.add('hidden');
    document.getElementById('post-detail').classList.add('hidden');
    document.querySelector('.filter-section').classList.add('hidden');
    document.getElementById('about-section').classList.remove('hidden');
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== FILTERING & SEARCH =====
function filterByCategory(category) {
    currentCategory = category;
    const filtered = category === 'all' 
        ? postsData 
        : postsData.filter(post => post.category === category);
    
    renderPostList(filtered);
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
}

function handleSearch(query) {
    const searchTerm = query.toLowerCase().trim();
    
    if (!searchTerm) {
        renderPostList(postsData);
        return;
    }

    const filtered = postsData.filter(post => 
        post.title.toLowerCase().includes(searchTerm) ||
        post.content.toLowerCase().includes(searchTerm) ||
        post.excerpt.toLowerCase().includes(searchTerm) ||
        post.category.toLowerCase().includes(searchTerm)
    );

    renderPostList(filtered);
    
    // Reset category filter
    currentCategory = 'all';
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === 'all') {
            btn.classList.add('active');
        }
    });
}

// ===== UTILITY FUNCTIONS =====
function populateCategories() {
    const categories = [...new Set(postsData.map(post => post.category))];
    
    // Populate dropdown menu
    const categoriesMenu = document.getElementById('categories-menu');
    categoriesMenu.innerHTML = categories.map(cat => 
        `<li data-category="${cat}">${cat}</li>`
    ).join('');

    // Populate filter buttons
    const filterButtons = document.getElementById('filter-buttons');
    filterButtons.innerHTML = categories.map(cat => 
        `<button class="filter-btn" data-category="${cat}">${cat}</button>`
    ).join('');

    // Add click events
    document.querySelectorAll('[data-category]').forEach(el => {
        el.addEventListener('click', () => {
            filterByCategory(el.dataset.category);
            showBlogList();
        });
    });
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function formatContent(content) {
    // Split content by paragraphs and wrap in <p> tags
    return content.split('\n\n')
        .filter(para => para.trim())
        .map(para => `<p>${para.trim()}</p>`)
        .join('');
}

function handleURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('post');
    
    if (postId) {
        showSinglePost(parseInt(postId));
    }
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Back button
    document.getElementById('back-btn').addEventListener('click', showBlogList);

    // Search functionality
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    searchBtn.addEventListener('click', () => {
        handleSearch(searchInput.value);
        showBlogList();
    });

    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch(searchInput.value);
            showBlogList();
        }
    });

    // Navigation links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const view = link.dataset.view;
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            if (view === 'home') {
                showBlogList();
            } else if (view === 'about') {
                showAboutSection();
            }

            // Close mobile menu
            document.querySelector('.nav-list').classList.remove('active');
        });
    });

    // Footer links
    document.querySelectorAll('.footer-section a[data-view]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const view = link.dataset.view;
            
            if (view === 'home') {
                showBlogList();
            } else if (view === 'about') {
                showAboutSection();
            }
        });
    });

    // Logo click
    document.querySelector('.logo').addEventListener('click', () => {
        showBlogList();
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        document.querySelector('.nav-link[data-view="home"]').classList.add('active');
    });

    // Mobile menu toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    
    navToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });

    // Browser back/forward buttons
    window.addEventListener('popstate', (e) => {
        if (e.state && e.state.postId) {
            showSinglePost(e.state.postId);
        } else {
            showBlogList();
        }
    });

    // Filter buttons (all posts)
    document.querySelectorAll('.filter-btn[data-category="all"]').forEach(btn => {
        btn.addEventListener('click', () => filterByCategory('all'));
    });
}
