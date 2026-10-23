export const NAME = "Jibin";
export const FULL_NAME = "Jibin";
export const EMAIL = "jibingjiji103@gmail.com";
export const GITHUB = "https://github.com/Jibin-G-Jiji";
export const LINKEDIN = "https://www.linkedin.com/notifications/?filter=all";

export const skillGroups = [
  { title: "Foundations", color: "#2B6468", glyph: "$_", tools: ["Linux", "Shell Scripting", "Git", "GitHub"] },
  { title: "CI / CD", color: "#3E5591", glyph: "∞", tools: ["Jenkins", "Pipelines as Code", "GitHub Webhooks"] },
  { title: "Containers", color: "#7B3F6E", glyph: "▣", tools: ["Docker", "Docker Hub", "Kubernetes"] },
  { title: "Infra as Code", color: "#8A3D4E", glyph: "{ }", tools: ["Terraform", "Ansible"] },
  { title: "DevSecOps", color: "#4C6230", glyph: "⛨", tools: ["Shift-left Security", "Image Scanning", "Code Quality Gates"] },
  { title: "AI / ML Ops", color: "#545388", glyph: "◎", tools: ["Model Pipelines", "Containerised ML", "Automated Deployments"] },
];

export const builds = [
  {
    name: "Jenkins CI/CD Pipeline",
    tag: "Continuous delivery",
    title: "From git push to production",
    desc: "End-to-end pipelines that pull from GitHub, build, test, containerise with Docker, push to Docker Hub and deploy automatically.",
    color: "#2B6468",
    stack: ["Jenkins", "Git", "Docker", "Docker Hub"],
    glyph: "∞",
  },
  {
    name: "Kubernetes Deployments",
    tag: "Container orchestration",
    title: "Scalable, self-healing workloads",
    desc: "Deploying containerised applications on Kubernetes with deployments, services, scaling and rolling updates for zero-downtime releases.",
    color: "#3E5591",
    stack: ["Kubernetes", "Docker", "YAML"],
    glyph: "☸",
  },
  {
    name: "Infrastructure as Code",
    tag: "Provisioning & config",
    title: "Repeatable infrastructure, every time",
    desc: "Provisioning cloud infrastructure with Terraform and configuring servers consistently with Ansible playbooks.",
    color: "#7B3F6E",
    stack: ["Terraform", "Ansible", "Linux"],
    glyph: "{ }",
  },
  {
    name: "DevSecOps Pipeline",
    tag: "Security built in",
    title: "Security as a pipeline stage",
    desc: "Adding code quality checks and container image scanning into CI/CD, so vulnerabilities are caught before they ship.",
    color: "#8A3D4E",
    stack: ["Jenkins", "Scanning", "Quality Gates"],
    glyph: "⛨",
  },
  {
    name: "AI / ML Ops Workflow",
    tag: "MLOps",
    title: "Shipping models like software",
    desc: "Bringing DevOps practices to machine learning: containerised models, automated pipelines and reproducible deployments.",
    color: "#4C6230",
    stack: ["Docker", "Kubernetes", "CI/CD"],
    glyph: "◎",
  },
];

export const beliefs = [
  {
    title: "Automate everything worth repeating.",
    body: "If a task is done twice, it belongs in a script, a pipeline or a playbook. Automation saves time and removes human error.",
    color: "#2B6468",
  },
  {
    title: "Infrastructure should be code.",
    body: "Version-controlled, reviewable and repeatable. With Terraform and Ansible, environments are rebuilt in minutes, not days.",
    color: "#3E5591",
  },
  {
    title: "Security is everyone's job.",
    body: "DevSecOps means security is part of every stage of the pipeline, not a final checkbox before release.",
    color: "#7B3F6E",
  },
  {
    title: "I learn by teaching.",
    body: "As a DevOps trainer, I explain complex tools in simple terms. Teaching keeps my fundamentals sharp and my knowledge current.",
    color: "#8A3D4E",
  },
];

export const timeline = [
  ["Now", "DevOps Trainer & MCA Student", "Training students in DevOps while completing MCA online"],
  ["Also", "Freelance DevOps Engineer", "Pipelines, deployments & automation for clients"],
  ["Experience", "DevOps Intern", "Hands-on with real-world CI/CD and infrastructure"],
  ["Education", "BCA, Bengaluru North University", "Completed · A Grade"],
];

export const stack = ["Linux", "Git", "GitHub", "Jenkins", "Docker", "Docker Hub", "Terraform", "Ansible", "Kubernetes", "DevSecOps", "AI/ML Ops"];

export const syllabus = [
  { module: 1, title: "Introduction to DevOps", topics: ["Principles & culture of DevOps", "DevOps Engineer skills & career scope", "DevOps lifecycle & delivery pipeline", "DevOps market trends (Cloud-native, GitOps, AIOps, DevSecOps)", "Challenges & solutions in adopting DevOps"] },
  { module: 2, title: "Cloud & Virtualization", topics: ["Cloud computing essentials (IaaS, PaaS, SaaS)", "Cloud providers: AWS, Azure, GCP (overview & comparison)", "Virtualization vs Containers vs Serverless", "Cloud deployment models (public, private, hybrid, multi-cloud)", "Setting up cloud resources (AWS focus + intro to Azure/GCP)"] },
  { module: 3, title: "Linux Fundamentals", topics: ["Introduction to Linux & Distributions", "Linux File System Structure", "Basic Linux Commands", "File & Directory Management", "User & Group Management", "File Permissions & Ownership", "Package Management (APT, YUM)", "Process Management"] },
  { module: 4, title: "Version Control with Git & GitHub/GitLab", topics: ["Git fundamentals (init, clone, add, commit, push, pull)", "Branching, merging, rebasing & workflows", "Remote repositories & collaboration (GitHub/GitLab/Bitbucket)", "Git branching strategies (GitFlow, trunk-based development)", "GitHub Actions/GitLab CI introduction"] },
  { module: 5, title: "Continuous Integration (CI)", topics: ["CI concepts & benefits", "Jenkins: setup, pipelines, plugins, distributed builds", "GitHub Actions / GitLab CI/CD pipelines", "Maven/Gradle build automation", "Automated testing integration"] },
  { module: 6, title: "Containers & Containerization", topics: ["Docker fundamentals (images, containers, Dockerfile)", "Container lifecycle & best practices", "Docker networking & storage", "Docker Compose for multi-container apps", "(Optional) Intro to Podman & Buildah"] },
  { module: 7, title: "Container Orchestration", topics: ["Kubernetes fundamentals", "Cluster architecture (master, worker nodes, API server, etcd)", "Pods, ReplicaSets, Deployments, StatefulSets", "Services & networking (ClusterIP, NodePort, Ingress)", "ConfigMaps & Secrets", "Persistent Volumes & Persistent Volume Claims", "Helm & Kustomize for deployment management", "Service Mesh basics (Istio/Linkerd)"] },
  { module: 8, title: "Infrastructure as Code (IaC)", topics: ["Infrastructure automation concepts", "Terraform fundamentals (providers, resources, state, modules)", "Writing & applying Terraform configurations", "Pulumi (overview as modern alternative)", "Integrating IaC into CI/CD pipelines"] },
  { module: 9, title: "Configuration Management", topics: ["Ansible basics (inventory, playbooks, roles)", "YAML syntax & structure", "Ansible Galaxy, handlers, variables", "Automating infrastructure with Ansible"] },
  { module: 10, title: "Continuous Delivery & Deployment (CD)", topics: ["CD vs Continuous Deployment", "Blue/Green, Canary, and Rolling deployments", "GitOps with ArgoCD & FluxCD", "Integrating deployments with Kubernetes"] },
  { module: 11, title: "Monitoring, Logging & Observability", topics: ["Importance of monitoring in DevOps", "Prometheus & Grafana (metrics & dashboards)", "ELK / EFK Stack (Elasticsearch/Fluentd/Kibana)", "Tracing with Jaeger/OpenTelemetry", "Alerting & incident management"] },
  { module: 12, title: "DevSecOps (Security in DevOps)", topics: ["Security fundamentals in CI/CD", "Vulnerability scanning (Aqua, Trivy, Clair)", "Secrets management (Vault, AWS Secrets Manager, SOPS)", "SAST, DAST & dependency scanning", "Compliance & policy as code (OPA, Kyverno)"] },
  { module: 13, title: "Collaboration & Project Management Tools", topics: ["Agile & Scrum overview", "Jira / Azure Boards / Trello for task management", "Slack, Teams & ChatOps in DevOps", "Documentation & knowledge sharing (Confluence, Notion, mkdocs)"] },
  { module: 14, title: "AI/ML Ops (AIOps & MLOps)", topics: ["Introduction to AIOps & MLOps", "AI in DevOps", "Machine Learning Lifecycle", "ML Pipelines Overview", "Model Deployment Concepts", "CI/CD for Machine Learning", "MLflow Introduction", "Kubeflow Overview", "AI-Powered Monitoring", "Predictive Incident Management", "Generative AI for DevOps Engineers"] },
  { module: 15, title: "Capstone Project", topics: ["End-to-End DevOps pipeline:", "Code in GitHub", "CI with GitHub Actions/Jenkins", "Build & containerize app with Docker", "Deploy on Kubernetes (with Helm/ArgoCD)", "Monitor with Prometheus & Grafana", "Implement DevSecOps (Trivy + Vault)"] },
];
