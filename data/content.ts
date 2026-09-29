// All site copy lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Saim Wajid",
  handle: "saim",
  role: "Cloud · DevOps · Security",
  // Shown under the name in the hero
  titles: ["DevOps Engineer", "Cloud Engineer"],
  tagline:
    "I build, automate and secure infrastructure end to end, from self-hosted servers and cloud VMs to SIEM pipelines that help SOC analysts move faster.",
  about: [
    "I'm a Computer Science graduate from IBA Karachi with hands-on experience across Azure, AWS and Oracle Cloud.",
    "I've run an always-on Oracle Cloud VM, administered headless Linux servers, and shipped containerised services with Docker behind NGINX as a reverse proxy and load balancer. I keep infrastructure private and secure with Tailscale instead of public endpoints, automate with n8n and Python, and version everything in Git. Additionally, I programm application to solve problem I have, which presumingly others have too",
    "My SOC internship at Systems Ltd added the security lens: SIEM integration, incident triage, and applying compliance and DLP controls in cloud environments.",
  ],
  email: "saimwajid11@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/saimwajid11/",
    github: "https://github.com/Rexced",
  },
}

export type PipelineNode = { label: string; detail: string }
// An array is a fork: the previous node branches out to each of these side by side
export type PipelineStep = PipelineNode | PipelineNode[]

export type Project = {
  slug: string
  title: string
  subtitle: string
  date: string
  summary: string
  tags: string[]
  metrics: { value: string; label: string }[]
  pipeline: PipelineStep[]
  bullets: string[]
}

export const projects: Project[] = [
  {
    slug: "hyperion",
    title: "Hyperion",
    subtitle: "Native Linux system monitor",
    date: "Sep 2026",
    summary:
      "A fast, native system monitor written in Rust. It reads CPU, GPU, memory, disk and network stats straight from the Linux kernel and shows them live in a themeable dashboard whose tiles can pop out into their own windows.",
    tags: ["Rust", "egui / eframe", "procfs & sysfs", "NVML", "Hyprland IPC", "Wayland / X11", "Bash"],
    metrics: [
      { value: "15", label: "live metrics: CPU, GPU, RAM, disk, network and more" },
      { value: "Main GPU vendors", label: "supported: AMD, Intel, NVIDIA" },
      { value: "27", label: "built-in themes + custom theme editor" },
      { value: "121", label: "unit tests" },
      { value: "~9.6k", label: "lines of Rust" },
      { value: "Arch and Debian", label: "supported with detached tiling" },
    ],
    pipeline: [
      { label: "Linux kernel", detail: "/proc + sysfs" },
      [
        { label: "CPU · RAM · disk · net", detail: "procfs + hwmon/RAPL" },
        { label: "GPUs", detail: "sysfs + NVML" },
      ],
      { label: "Samplers", detail: "Rolling history" },
      { label: "egui dashboard", detail: "Themed tiles + graphs" },
      { label: "Pop-out windows", detail: "Placed via Hyprland IPC" },
    ],
    bullets: [
      "Built a native Linux system monitor in Rust (eframe/egui) that samples CPU, GPU, memory, disk and network stats directly from /proc and sysfs, with no background daemon.",
      "Added GPU monitoring across vendors: AMD and Intel through sysfs, and NVIDIA through NVML, loaded at runtime only when the driver is installed.",
      "Dashboard tiles pop out into their own windows. Wayland doesn't let apps place windows, so a small Hyprland IPC client floats, snaps and positions them.",
      "Root-only sensors (CPU power via RAPL, drive temperatures) are unlocked by a one-time, opt-in setup step through sudo or pkexec, while the app itself always runs unprivileged.",
      "Shipped 27 built-in themes plus a custom theme editor with live preview, an install script, and 121 unit tests.",
    ],
  },
  {
    slug: "siem-threat-intel",
    title: "SIEM Threat Intelligence Pipeline",
    subtitle: "Final Year Project",
    date: "Jun 2026",
    summary:
      "An API-first, containerised platform that plugs automated STIX/TAXII threat intel into the Wazuh SIEM and adds an AI analyst that explains alerts in plain language.",
    tags: ["FastAPI", "React", "Wazuh", "STIX/TAXII", "Gemini API", "MITRE ATT&CK", "Docker"],
    metrics: [
      { value: "65%", label: "less overhead than default implementation" },
      { value: "18", label: "MITRE ATT&CK techniques mapped" },
      { value: "2-way", label: "indicator ↔ technique correlation" },
      { value: "Automated", label: "STIX/TAXII intel ingestion" },
      { value: "AI", label: "Gemini plain-language alert triage" },
      { value: "API-first", label: "containerised platform" },
    ],
    pipeline: [
      { label: "TAXII feeds", detail: "External threat intel" },
      { label: "STIX ingest", detail: "FastAPI service" },
      { label: "Wazuh SIEM", detail: "Alerts + enrichment" },
      { label: "ATT&CK engine", detail: "Bidirectional mapping" },
      { label: "Gemini + React", detail: "Analyst dashboard" },
    ],
    bullets: [
      "Wazuh lacked automated external threat-intel enrichment using STIX/TAXII, which slowed analyst triage. I built a containerised platform that ingests STIX/TAXII feeds into it automatically.",
      "Built a bidirectional correlation engine that maps threat indicators to 18 tracked MITRE ATT&CK techniques.",
      "Integrated a Gemini-powered assistant that turns enriched alert context into natural-language threat explanations for SOC analysts.",
      "Result: threat-detection time cut by 65%, with plain-language context on live alerts.",
    ],
  },
  {
    slug: "oracle-24x7",
    title: "Self-Hosted Oracle Cloud Server",
    subtitle: "24/7 automation at zero cost",
    date: "Jul 2026",
    summary:
      "An always-on Oracle Cloud server running a trigger-based n8n pipeline that turns Notion financial records into charts. It's reachable only through a private VPN tunnel.",
    tags: ["Oracle Cloud", "n8n", "Docker", "Tailscale", "NGINX", "iptables"],
    metrics: [
      { value: "24/7", label: "always-on automation" },
      { value: "$0", label: "recurring hosting cost (Free tier)" },
      { value: "Reverse Proxy", label: "implemented via Caddy between public internet and docker instances" },
      { value: "VPN", label: "Tailscale-only remote access" },
      { value: "n8n", label: "event-triggered pipeline: Notion → charts" },
      { value: "iptables", label: "hardened Docker network" },
    ],
    pipeline: [
      { label: "Tailscale", detail: "Encrypted tunnel" },
      { label: "NGINX", detail: "Reverse proxy + iptables" },
      { label: "n8n", detail: "Dockerised workflows" },
      { label: "Notion", detail: "Records in, charts out" },
    ],
    bullets: [
      "Engineered a trigger-based n8n pipeline that pulls financial records from a private Notion database, renders visualisations locally and writes the charts back with low latency.",
      "Set up Tailscale for encrypted remote access with no domain or public HTTPS endpoint, which removed hosting costs entirely.",
      "Put an NGINX reverse proxy and custom iptables rules in front of the internal Docker containers to isolate them and route traffic securely.",
    ],
  },
  {
    slug: "home-lab",
    title: "Home Lab",
    subtitle: "Self-hosted services & SIEM",
    date: "Jun 2025",
    summary:
      "An old laptop turned into a headless Ubuntu server running my own DNS sinkhole, SIEM, photo cloud and media server, all behind zero-trust access.",
    tags: ["Ubuntu Server", "Docker", "Wazuh", "Pi-hole", "Immich", "Jellyfin", "Tailscale"],
    metrics: [
      { value: "$0", label: "recurring cost" },
      { value: "2", label: "paid services replaced (Photos, Netflix)" },
      { value: "4+", label: "self-hosted services" },
      { value: "0", label: "services at risk of exposure publicly" },
      { value: "DNS + EDR", label: "network-wide ad & malware blocking" },
      { value: "Headless", label: "Ubuntu server running on a repurposed old laptop" },
    ],
    pipeline: [
      { label: "Tailscale", detail: "Zero-trust access" },
      { label: "Caddy", detail: "Reverse proxy" },
      { label: "Ubuntu Server", detail: "Headless, repurposed" },
      { label: "Pi-hole + Wazuh", detail: "DNS sinkhole + SIEM" },
      [
        { label: "Immich + Jellyfin", detail: "Photos + media" },
        { label: "Game server + n8n", detail: "LAN gaming + automation" },
      ],
    ],
    bullets: [
      "Repurposed an old laptop as a headless Ubuntu server, with admin access secured through a Tailscale zero-trust VPN. Nothing is exposed publicly.",
      "Deployed Wazuh SIEM to centralise security logs from connected devices, and Pi-hole as a network-wide DNS sinkhole for ads and malicious domains.",
      "Replaced paid photo storage and streaming with self-hosted Immich and Jellyfin, and tuned custom routing for low-latency LAN game servers.",
    ],
  },
]

export const experience = [
  {
    role: "Information Security Intern",
    org: "Systems Ltd",
    team: "SOC / Cloud Security",
    date: "Jun 2025 – Aug 2025",
    place: "Karachi, Pakistan",
    bullets: [
      "Implemented cybersecurity frameworks and compliance controls tailored to the environment, reducing measured vulnerability exposure by 25%.",
      "Supported enterprise SIEM integration in a live SOC, triaging flagged phishing attempts and malware fingerprints.",
      "Configured test cloud environments to apply cloud security and DLP principles in practice.",
    ],
  },
]

export const education = {
  degree: "BS Computer Science",
  school: "Institute of Business Administration (IBA), Karachi",
  date: "Aug 2022 – Jun 2026",
}

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Cloud & Infrastructure",
    items: ["Azure", "AWS", "Oracle Cloud (OCI)", "Docker", "NGINX", "Git", "Linux administration", "Tailscale"],
  },
  {
    group: "Security",
    items: ["Wazuh SIEM", "STIX/TAXII", "MITRE ATT&CK", "DLP policies", "iptables"],
  },
  {
    group: "Languages & Frameworks",
    items: ["Python", "Java", "C++", "JavaScript", "SQL", "FastAPI", "React", "REST APIs", "Rust"],
  },
  {
    group: "AI & Automation",
    items: ["n8n", "HW monitoring", "Gemini API", "Gemini CLI", "Claude Code", "VS Code", "Cursor"],
  },
]

// `url` is the public proof (certificate page); entries without one render unlinked.
export const certifications: { issuer: string; name: string; url?: string }[] = [
  { issuer: "NVIDIA", name: "Accelerated Computing with CUDA C++ & Python", url: "" },
  { issuer: "Boot.dev", name: "Learn Python", url: "" },
  { issuer: "Boot.dev", name: "Learn Git", url: "" },
  { issuer: "Boot.dev", name: "Learn Docker", url: "" },
]
