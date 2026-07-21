// Research Data Structure
const researchData = [
  {
    id: 1,
    title: "Real-Time 3D Human Body Landmarks Capture for Virtual Try-On Systems",
    category: "COMPUTER VISION",
    status: "Ongoing Research",
    description: "An empirical study utilizing MediaPipe and depth-estimation frameworks to capture highly accurate full-body measurements for tailoring and e-commerce applications, eliminating the need for expensive hardware scanners.",
    tags: ["Python", "MediaPipe", "OpenCV", "Deep Learning"],
    githubUrl: "#",
    paperUrl: "#",
    gradient: "linear-gradient(135deg, rgba(0, 12, 45, 0.6), rgba(27, 2, 46, 0.4))"
  },
  {
    id: 2,
    title: "Predictive Modeling on Consumer Trends in Sri Lankan Tourism Industry",
    category: "DATA ANALYTICS",
    status: "Concept Proposal",
    description: "Analyzing localized dataset patterns to forecast travel preferences and vehicle rental demands using machine learning regression models, optimized for local tourism stakeholders.",
    tags: ["Python", "Scikit-Learn", "Pandas", "Regression"],
    githubUrl: "#",
    paperUrl: "#",
    gradient: "linear-gradient(135deg, rgba(6, 78, 59, 0.6), rgba(15, 118, 110, 0.4))"
  }
];

// Inject CSS Styles Dynamically
const injectStyles = () => {
  const styleTag = document.createElement('style');
  styleTag.textContent = `
    .research-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 24px;
      padding: 20px;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      box-sizing: border-box;
    }

    .research-card {
      background-color: #1e293b;
      border: 1px solid rgba(51, 65, 85, 0.8);
      border-radius: 16px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      transition: border-color 0.3s ease, transform 0.3s ease;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3);
    }

    .research-card:hover {
      border-color: #38bdf8;
      transform: translateY(-3px);
    }

    /* Top Preview Area */
    .card-banner {
      position: relative;
      height: 200px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      border-bottom: 1px solid rgba(51, 65, 85, 0.8);
      box-sizing: border-box;
    }

    .status-badge {
      align-self: flex-end;
      background-color: #10b981;
      color: #022c22;
      font-size: 11px;
      font-weight: 700;
      padding: 4px 12px;
      border-radius: 20px;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .banner-overlay {
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 2;
    }

    .banner-tags {
      display: flex;
      gap: 6px;
      flex-wrap: wrap;
    }

    .mini-tag {
      background: rgba(15, 23, 42, 0.85);
      color: #cbd5e1;
      font-size: 11px;
      padding: 3px 8px;
      border-radius: 6px;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .banner-actions {
      display: flex;
      gap: 8px;
    }

    .btn-main {
      flex: 1;
      background: rgba(30, 41, 59, 0.9);
      color: #ffffff;
      text-align: center;
      padding: 8px 12px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 600;
      text-decoration: none;
      border: 1px solid rgba(255, 255, 255, 0.15);
      transition: background 0.2s ease;
    }

    .btn-main:hover {
      background: rgba(51, 65, 85, 1);
    }

    .btn-icon {
      background: rgba(30, 41, 59, 0.9);
      color: #cbd5e1;
      padding: 8px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      border: 1px solid rgba(255, 255, 255, 0.15);
      transition: background 0.2s ease;
    }

    .btn-icon:hover {
      background: rgba(51, 65, 85, 1);
      color: #ffffff;
    }

    /* Card Details Body */
    .card-body {
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-grow: 1;
    }

    .card-category {
      color: #38bdf8;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.05em;
      margin-bottom: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .card-title {
      color: #f8fafc;
      font-size: 16px;
      font-weight: 700;
      margin: 0 0 10px 0;
      line-height: 1.4;
    }

    .card-description {
      color: #94a3b8;
      font-size: 12px;
      line-height: 1.6;
      margin-bottom: 16px;
    }

    .bottom-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      padding-top: 12px;
      border-top: 1px solid rgba(51, 65, 85, 0.5);
    }

    .tech-pill {
      background: rgba(15, 23, 42, 0.6);
      color: #94a3b8;
      font-size: 11px;
      padding: 4px 10px;
      border-radius: 6px;
      border: 1px solid rgba(51, 65, 85, 0.5);
    }
  `;
  document.head.appendChild(styleTag);
};

// SVG Icons
const icons = {
  check: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  github: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>`,
  link: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
  arrow: `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>`
};

// Render Function
function renderResearchCards(containerId = "research-container") {
  injectStyles();
  const container = document.getElementById(containerId);
  if (!container) return;

  const gridDiv = document.createElement("div");
  gridDiv.className = "research-grid";

  researchData.forEach(item => {
    const card = document.createElement("div");
    card.className = "research-card";

    card.innerHTML = `
      <div class="card-banner" style="background: ${item.gradient}">
        <div class="status-badge">
          ${icons.check} ${item.status}
        </div>
        <div class="banner-overlay">
          <div class="banner-tags">
            ${item.tags.slice(0, 3).map(tag => `<span class="mini-tag">${tag}</span>`).join('')}
            ${item.tags.length > 3 ? `<span class="mini-tag">+${item.tags.length - 3}</span>` : ''}
          </div>
          <div class="banner-actions">
            <a href="${item.paperUrl}" class="btn-main">View Details</a>
            <a href="${item.githubUrl}" class="btn-icon" aria-label="Github">${icons.github}</a>
            <a href="${item.paperUrl}" class="btn-icon" aria-label="Link">${icons.link}</a>
          </div>
        </div>
      </div>

      <div class="card-body">
        <div>
          <div class="card-category">
            <span>${item.category}</span>
            ${icons.arrow}
          </div>
          <h3 class="card-title">${item.title}</h3>
          <p class="card-description">${item.description}</p>
        </div>

        <div class="bottom-tags">
          ${item.tags.map(tag => `<span class="tech-pill">${tag}</span>`).join('')}
        </div>
      </div>
    `;

    gridDiv.appendChild(card);
  });

  container.appendChild(gridDiv);
}

// Auto-run when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  renderResearchCards();
});