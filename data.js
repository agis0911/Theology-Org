/* ============================================================
   VELUM INSTITUTE — Content Data
   Edit this file to add your own papers, authors, topics, and
   projects. Everything on the site (search, filters, topic
   links, author pages) is generated from this single file.
   ============================================================ */

const SITE = {
  name: "Velum Institute",
  tagline: "Independent research in theology, philosophy, Christian history, and intellectual culture.",
};

/* ---------- TOPICS ----------
   id:    unique slug, used for linking (must match topics[] arrays below)
   name:  display name
   group: one of the eight research areas below, used for grouping
*/
const TOPICS = [
  { id: "tradition", name: "Tradition", group: "Theology" },
  { id: "patristics", name: "Patristics", group: "Patristics" },
  { id: "grace", name: "Grace", group: "Theology" },
  { id: "ecclesiology", name: "Ecclesiology", group: "Ecclesiology" },
  { id: "christian-doctrine", name: "Christian Doctrine", group: "Church History" },
  { id: "faith-and-reason", name: "Faith and Reason", group: "Philosophy" },
  { id: "natural-law", name: "Natural Law", group: "Ethics" },
  { id: "scripture-and-authority", name: "Scripture and Authority", group: "Scripture" },
  { id: "apologetic-method", name: "Apologetic Method", group: "Apologetics" },
  { id: "trinitarian-thought", name: "Trinitarian Thought", group: "Theology" },
];

/* ---------- RESEARCH AREAS ---------- */
const AREAS = [
  "Theology", "Philosophy", "Scripture", "Patristics",
  "Church History", "Apologetics", "Ethics", "Ecclesiology",
];

/* ---------- HISTORICAL PERIODS ---------- */
const PERIODS = [
  "Apostolic Era", "Patristic Period", "Medieval", "Reformation", "Modernity", "Contemporary",
];

/* ---------- AUTHORS ----------
   id: unique slug used for linking
*/
const AUTHORS = [
  {
    id: "e-marchetti",
    name: "E. Marchetti",
    title: "Senior Research Fellow",
    bio: "E. Marchetti works on the reception of patristic theology in later doctrinal controversy, with particular attention to how conciliar language was reused and reinterpreted across centuries.",
    interests: ["Patristics", "Church History", "Trinitarian Thought"],
    papers: ["authority-of-tradition", "development-of-doctrine"],
    projects: ["development-of-christian-doctrine"],
  },
  {
    id: "h-oyelaran",
    name: "H. Oyelaran",
    title: "Research Fellow",
    bio: "H. Oyelaran researches the intersection of classical epistemology and Christian doctrines of revelation, focusing on medieval and early modern accounts of faith as a rational act.",
    interests: ["Philosophy", "Faith and Reason", "Scripture"],
    papers: ["faith-and-reason", "scripture-as-testimony"],
    projects: ["development-of-christian-doctrine"],
  },
  {
    id: "j-solberg",
    name: "J. Solberg",
    title: "Research Fellow",
    bio: "J. Solberg writes on ecclesiology and institutional authority, examining how communities of belief define legitimacy, continuity, and doctrinal boundaries over time.",
    interests: ["Ecclesiology", "Church History", "Ethics"],
    papers: ["ecclesial-authority-reconsidered"],
    projects: [],
  },
  {
    id: "a-castellan",
    name: "A. Castellan",
    title: "Associate Fellow",
    bio: "A. Castellan works on natural law theory and its theological foundations, tracing continuities and departures between classical, scholastic, and contemporary ethical frameworks.",
    interests: ["Ethics", "Philosophy", "Apologetics"],
    papers: ["natural-law-revisited"],
    projects: ["development-of-christian-doctrine"],
  },
];

/* ---------- PAPERS ----------
   id: unique slug used for linking
   type: "Research Paper" | "Research Essay" | "Working Paper" | "Position Paper" | "Review"
   sections: array of { title, body } — body supports simple <p> paragraphs
*/
const PAPERS = [
  {
    id: "authority-of-tradition",
    title: "The Authority of Tradition",
    type: "Research Paper",
    year: 2026,
    period: "Contemporary",
    authorId: "e-marchetti",
    topics: ["tradition", "patristics", "christian-doctrine"],
    abstract: "An examination of how tradition functions as a source of doctrinal authority, distinct from but related to scripture, and how successive generations of the Church have understood its binding force.",
    contents: [
      { title: "Introduction", body: "<p>The relationship between scripture and tradition has occupied theologians since the earliest doctrinal controversies. This paper argues that tradition is best understood not as a static deposit but as a mode of transmission with its own interpretive authority.</p>" },
      { title: "Historical Context", body: "<p>From the apostolic era onward, communities of faith relied on received teaching to adjudicate disputes that scripture alone did not settle. The councils of the patristic period formalized this reliance without displacing scriptural primacy.</p>" },
      { title: "Analysis", body: "<p>Three models of tradition's authority are considered: tradition as supplementary source, tradition as interpretive lens, and tradition as living voice. Each carries distinct implications for how doctrinal development is assessed.</p>" },
      { title: "Conclusion", body: "<p>A coherent account of tradition's authority must hold together historical continuity and interpretive development, resisting both rigid traditionalism and unmoored innovation.</p>" },
    ],
  },
  {
    id: "faith-and-reason",
    title: "Faith and Reason",
    type: "Research Essay",
    year: 2026,
    period: "Medieval",
    authorId: "h-oyelaran",
    topics: ["faith-and-reason", "scripture-and-authority"],
    abstract: "A reconsideration of medieval accounts of faith as a rational act, arguing that the classical faith–reason distinction has been flattened by modern epistemology in ways that obscure its original coherence.",
    contents: [
      { title: "Introduction", body: "<p>Modern discourse frequently treats faith and reason as opposing epistemic categories. This essay revisits the medieval synthesis in which faith was understood as an act involving both intellect and will.</p>" },
      { title: "Historical Context", body: "<p>Scholastic writers distinguished between belief grounded in evident demonstration and belief grounded in trust in a reliable witness, situating religious faith within the latter category without abandoning rational scrutiny.</p>" },
      { title: "Analysis", body: "<p>Reassessing this synthesis clarifies why faith was never conceived as irrational, but as a distinct and legitimate mode of knowing dependent on testimony and authority.</p>" },
      { title: "Conclusion", body: "<p>Recovering this framework offers a more precise vocabulary for contemporary debates about the rationality of religious belief.</p>" },
    ],
  },
  {
    id: "development-of-doctrine",
    title: "The Development of Christian Doctrine",
    type: "Working Paper",
    year: 2026,
    period: "Patristic Period",
    authorId: "e-marchetti",
    topics: ["christian-doctrine", "patristics", "trinitarian-thought"],
    abstract: "A working account of doctrinal development from the apostolic period to the settlement of Trinitarian orthodoxy, tracing continuity of substance amid change of formulation.",
    contents: [
      { title: "Introduction", body: "<p>Doctrinal development raises the question of how a teaching can remain the same in substance while its formulation changes across centuries. This working paper proposes a framework for evaluating legitimate development.</p>" },
      { title: "Historical Context", body: "<p>The early councils did not invent doctrine but clarified it under pressure from competing interpretations, providing a case study in how development functions in practice.</p>" },
      { title: "Analysis", body: "<p>Legitimate development is distinguished from corruption by continuity of underlying logic, even where vocabulary and conceptual tools change substantially.</p>" },
      { title: "Conclusion", body: "<p>This framework will be tested further against later doctrinal controversies in subsequent stages of this project.</p>" },
    ],
  },
  {
    id: "ecclesial-authority-reconsidered",
    title: "Ecclesial Authority Reconsidered",
    type: "Position Paper",
    year: 2025,
    period: "Contemporary",
    authorId: "j-solberg",
    topics: ["ecclesiology", "tradition"],
    abstract: "A position paper arguing that contemporary accounts of ecclesial authority often conflate institutional power with doctrinal legitimacy, to the detriment of both.",
    contents: [
      { title: "Introduction", body: "<p>This paper stakes out a position on the proper relationship between institutional structure and doctrinal authority within Christian communities.</p>" },
      { title: "Historical Context", body: "<p>Historical models of ecclesial governance varied considerably, yet shared an underlying concern for continuity with apostolic teaching rather than institutional consolidation alone.</p>" },
      { title: "Analysis", body: "<p>Conflating governance authority with doctrinal legitimacy risks both authoritarian overreach and unwarranted skepticism toward legitimate teaching authority.</p>" },
      { title: "Conclusion", body: "<p>A clearer distinction between these two forms of authority would strengthen both ecclesial governance and doctrinal fidelity.</p>" },
    ],
  },
  {
    id: "natural-law-revisited",
    title: "Natural Law Revisited",
    type: "Research Paper",
    year: 2025,
    period: "Modernity",
    authorId: "a-castellan",
    topics: ["natural-law", "faith-and-reason"],
    abstract: "An inquiry into the theological foundations of natural law theory, examining whether its classical formulation can be sustained independent of the metaphysics that originally supported it.",
    contents: [
      { title: "Introduction", body: "<p>Natural law theory is frequently invoked in contemporary ethical debate while its theological foundations go unexamined. This paper asks whether the framework survives that omission.</p>" },
      { title: "Historical Context", body: "<p>Classical and scholastic accounts grounded natural law in a theological account of created order, a foundation modern secular appropriations often set aside.</p>" },
      { title: "Analysis", body: "<p>Detached from its theological grounding, natural law theory faces difficulties in explaining its own normative force.</p>" },
      { title: "Conclusion", body: "<p>A theologically grounded natural law retains explanatory resources unavailable to purely secular reconstructions.</p>" },
    ],
  },
  {
    id: "scripture-as-testimony",
    title: "Scripture as Testimony",
    type: "Research Essay",
    year: 2025,
    period: "Contemporary",
    authorId: "h-oyelaran",
    topics: ["scripture-and-authority", "apologetic-method"],
    abstract: "An essay proposing that scriptural authority is best modeled on the epistemology of testimony, rather than on demonstrative or purely historical-critical frameworks.",
    contents: [
      { title: "Introduction", body: "<p>How should scriptural authority be understood epistemically? This essay proposes testimony as the most apt category, distinct from both bare historical claim and demonstrative proof.</p>" },
      { title: "Historical Context", body: "<p>Pre-modern readers approached scripture as authoritative testimony from a trustworthy source, a framework later obscured by post-Enlightenment historical-critical method.</p>" },
      { title: "Analysis", body: "<p>Testimony as an epistemic category offers a middle path between naive literalism and corrosive skepticism.</p>" },
      { title: "Conclusion", body: "<p>Recovering a testimony-based model clarifies what is and is not at stake in historical-critical scholarship.</p>" },
    ],
  },
];

/* ---------- PROJECTS ---------- */
const PROJECTS = [
  {
    id: "development-of-christian-doctrine",
    title: "The Development of Christian Doctrine",
    span: "2026—2028",
    description: "A multidisciplinary investigation into the development of Christian doctrine from the apostolic period to modernity.",
    researcherIds: ["e-marchetti", "h-oyelaran", "a-castellan"],
    publicationCount: 11,
    status: "Ongoing",
    topics: ["christian-doctrine", "patristics", "tradition"],
  },
];

/* ---------- TIMELINE ---------- */
const TIMELINE = [
  {
    era: "Apostolic Era",
    range: "c. 30–100",
    description: "The foundational period of the Christian movement, marked by direct apostolic testimony and the earliest written witnesses.",
    figures: ["Paul of Tarsus", "John the Evangelist"],
    topics: ["scripture-and-authority"],
  },
  {
    era: "Patristics",
    range: "c. 100–450",
    description: "The age of the Church Fathers, in which core doctrinal categories — Trinity, Christology, canon — were articulated and defended.",
    figures: ["Augustine of Hippo", "Athanasius of Alexandria"],
    topics: ["patristics", "trinitarian-thought"],
  },
  {
    era: "Medieval",
    range: "c. 450–1500",
    description: "The scholastic synthesis of classical philosophy and Christian doctrine, producing sustained systematic theology.",
    figures: ["Thomas Aquinas", "Anselm of Canterbury"],
    topics: ["faith-and-reason", "natural-law"],
  },
  {
    era: "Reformation",
    range: "c. 1500–1650",
    description: "A period of doctrinal renegotiation over authority, grace, and the nature of the Church.",
    figures: ["Martin Luther", "John Calvin"],
    topics: ["grace", "ecclesiology"],
  },
  {
    era: "Modernity",
    range: "c. 1650–1950",
    description: "Christian thought engages historical criticism, philosophical rationalism, and the emergence of secular epistemology.",
    figures: ["Søren Kierkegaard", "John Henry Newman"],
    topics: ["faith-and-reason", "christian-doctrine"],
  },
  {
    era: "Contemporary",
    range: "1950–present",
    description: "Ongoing reassessment of tradition, authority, and method amid pluralism and renewed interest in classical sources.",
    figures: ["Contemporary Fellows"],
    topics: ["tradition", "apologetic-method"],
  },
];

/* Expose to window for use across pages without a build step */
window.SITE = SITE;
window.TOPICS = TOPICS;
window.AREAS = AREAS;
window.PERIODS = PERIODS;
window.AUTHORS = AUTHORS;
window.PAPERS = PAPERS;
window.PROJECTS = PROJECTS;
window.TIMELINE = TIMELINE;
