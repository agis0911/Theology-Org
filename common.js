/* Shared helpers used across pages. Requires data.js to be loaded first. */

function getAuthor(id) { return AUTHORS.find(a => a.id === id); }
function getTopic(id) { return TOPICS.find(t => t.id === id); }
function getPaper(id) { return PAPERS.find(p => p.id === id); }
function getProject(id) { return PROJECTS.find(p => p.id === id); }

function papersByTopic(topicId) {
  return PAPERS.filter(p => p.topics.includes(topicId));
}
function papersByAuthor(authorId) {
  return PAPERS.filter(p => p.authorId === authorId);
}
function authorsByTopic(topicId) {
  return AUTHORS.filter(a => papersByAuthor(a.id).some(p => p.topics.includes(topicId)));
}
function projectsByTopic(topicId) {
  return PROJECTS.filter(p => p.topics.includes(topicId));
}

function paperCard(p) {
  const author = getAuthor(p.authorId);
  return `
    <a class="paper-row" href="paper.html?id=${p.id}">
      <div class="paper-row-meta">
        <span class="label">${p.type}</span>
        <span class="label">${p.year}</span>
      </div>
      <h3 class="paper-row-title serif">${p.title}</h3>
      <p class="paper-row-desc">${p.abstract}</p>
      <div class="paper-row-foot">
        <span class="label">${author ? author.name : 'Unknown'}</span>
        <span class="paper-row-arrow">Read paper →</span>
      </div>
    </a>`;
}

function initMobileNav() {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!toggle || !links) return;
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

document.addEventListener('DOMContentLoaded', initMobileNav);
