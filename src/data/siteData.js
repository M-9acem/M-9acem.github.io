export const profile = {
  name: 'Soulaymane Kacem',
  tagline: 'PhD Researcher · Federated Learning, Distributed Optimization & LLM Safety',
  location: 'Avignon, France',
  github: 'https://github.com/M-9acem',
  linkedin: 'https://www.linkedin.com/in/kacemsoulaymane',
  email: 'mailto:kacemsoulaymane@gmail.com',
  photo: 'https://avatars.githubusercontent.com/u/117868857?s=800&v=4',
};

export const navLinks = [
  ['About', '#about'], ['Experience', '#work'], ['Education', '#education'],
  ['Research', '#research'], ['Certifications', '#certifications'], ['Projects', '#projects'], ['Beyond work', '#life']
];

export const stats = [
  ['PhD', 'Federated Learning & LLM Safety'],
  ['1', 'Publication — IEEE FLTA 2026'],
  ['Oracle', 'AI Engineer, 2025'],
];

export const experience = [
  { date: 'Dec 2025 — Present', title: 'Doctoral Researcher · LIA, Avignon Université', text: 'Researching decentralized federated learning for multi-agent systems — how gossip-based consensus and peer-to-peer topology govern convergence and stability under non-IID data. Designed MG-DFL, a memory-augmented gossip protocol for communication-efficient training, and built the lab’s PyTorch experimentation platform plus agentic LLM tooling for running and reporting experiments.' },
  { date: 'Jun 2025 — Dec 2025', title: 'AI Engineer · Oracle', text: 'Built a natural-language interface for financial workflows where the LLM only parses intent into a formal query in a custom DSL — a deterministic engine executes it, keeping the model outside the audit-critical path so outputs stay exhaustive, reproducible and auditable.' },
  { date: 'Jan 2025 — Jun 2025', title: 'AI Engineer Intern · Oracle', text: 'Fine-tuned an open-weights LLM (Llama 3, LoRA/PEFT) for structured extraction from multilingual invoices — 92% parsing accuracy, manual entry cut by 70%, deployed as a containerized FastAPI service handling 1,000+ documents/day. Ran a leakage-free evaluation loop with a handcrafted edge-case benchmark and 50+ tracked experiments.' },
  { date: 'Jun 2024 — Aug 2024', title: 'Data Engineer Intern · Nucleon Security', text: 'Built distributed ingestion pipelines with Celery and RabbitMQ for malware and APK metadata at scale, and migrated the production data store from MongoDB to PostgreSQL.' },
];

export const education = [
  { date: 'Nov 2025 — Present', title: 'PhD in Computer Science · Avignon Université', text: 'Doctoral research at the Laboratoire Informatique d’Avignon (LIA), focused on decentralized federated learning and distributed optimization.' },
  { date: 'Sep 2022 — Jun 2025', title: 'Engineering Degree · National Institute of Posts and Telecommunications (INPT)', text: 'Information & Communication Technologies track, with a strong foundation in AI, data, software and intelligent communication systems. Final-year research project completed with Oracle.' },
];

export const publications = [
  { venue: 'Accepted · IEEE FLTA 2026, Paris', title: 'Leveraging Memory for Efficient Gossip-Based Decentralized Federated Learning', authors: 'S. Kacem et al.', text: 'Introduces MG-DFL, combining multi-step gossip with memory-augmented consensus for communication-efficient decentralized training.' },
];

export const researchProjects = [
  {
    name: 'Safety Erosion in Peer-to-Peer Federated Learning',
    tagline: 'Does LLM safety alignment degrade, spread and recover when LoRA adapters are averaged between peers with no central server?',
    date: '2026',
    points: [
      'Studied the decentralized case the federated safety literature leaves open (prior work assumes a central server). Built the harness from scratch (LoRA fine-tuning over simulated agent networks, adapter averaging in parameter and ΔW/SVD modes, dual-scored safety evaluation) and validated measurement before the network: untouched Qwen2.5-1.5B-Instruct at 0.38% attack success rate across 3 seeds, then reproduced the centralized result — benign-only fine-tuning raises ASR to 20–45% in 200 steps.',
      '18-run sweep ({ring, random, complete} × {8, 16} agents × 3 seeds): erosion spread in every configuration (0.4% → 50–74% ASR), while graph density showed no effect — between-topology spread (3.5pp) fell below seed noise (6.7pp), reported as a negative result.',
      'Main result: peers holding refusal data partially repair the network, monotonically in their number (67.4% ASR with none → 24–31% with 4 of 16), with ASR decaying by hop distance — but no configuration recovered to within 5pp of baseline: mitigation, not a fix. Preliminary (single seed): peripheral placement beat well-connected, inverting the expected direction.',
    ],
    tech: 'PyTorch, HuggingFace PEFT/TRL, Qwen2.5 & Llama-3.2, NetworkX, Hydra, Weights & Biases, AdvBench',
  },
];

export const certifications = [
  { issuer: 'GOOGLE CLOUD', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/googlecloud.svg', title: 'Professional Data Engineer', text: 'In Progress · Google Cloud certification focused on designing, building, operationalizing, securing, and monitoring data processing systems.', status: 'In progress' },
  { issuer: 'DATABRICKS', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/databricks.svg', title: 'AI Agent Fundamentals', text: 'Issued May 2026 · Credential ID 182266806.' },
  { issuer: 'AWS', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/amazonwebservices.svg', title: 'AWS Certified Data Engineer – Associate', text: 'Issued December 2024 · Valid through December 2027.' },
];

export const fallbackProjects = [
  { name:'FLF', description:'Centralized and Decentralized Federated Learning testing framework', language:'Jupyter Notebook', html_url:'https://github.com/M-9acem/FLF' },
  { name:'Netflix_dbt_elt', description:'Data engineering project using an ELT workflow and dbt-style transformations.', language:'Python', html_url:'https://github.com/M-9acem/Netflix_dbt_elt' },
  { name:'earthquake_pipeline', description:'A data pipeline project focused on ingesting and processing earthquake data.', language:'Jupyter Notebook', html_url:'https://github.com/M-9acem/earthquake_pipeline' },
  { name:'Football_Analysis', description:'Data-driven football analysis and experimentation.', language:'Jupyter Notebook', html_url:'https://github.com/M-9acem/Football_Analysis' },
  { name:'CasaVal', description:'Exploratory analytics and machine learning project.', language:'Jupyter Notebook', html_url:'https://github.com/M-9acem/CasaVal' },
  { name:'logs_analysis', description:'Python tooling for analyzing and understanding log data.', language:'Python', html_url:'https://github.com/M-9acem/logs_analysis' },
];

export const skills = ['Python','PyTorch','Federated Learning','LLM Safety Evaluation','LoRA/PEFT','Distributed Optimization','NetworkX','CVXPY','Hugging Face','RAG','SQL','Docker','Git/CI-CD','Hydra','MLflow','AWS','Spark/Databricks'];

export const interests = [
  { emoji:'🌍', title:'Traveling', text:'New cities, unfamiliar streets, local food and stories I can bring back with me.' },
  { emoji:'🏐', title:'Volleyball', text:'Fast decisions, teamwork, rhythm and the satisfaction of a perfectly timed point.' },
  { emoji:'🏊', title:'Swimming', text:'My reset button — movement, focus and a little quiet beneath the surface.' },
  { emoji:'🥾', title:'Hiking', text:'Long climbs, big landscapes and the kind of perspective you only get outdoors.' },
];
