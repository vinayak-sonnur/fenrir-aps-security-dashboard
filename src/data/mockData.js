
export const mockScans = [
  {
    id: 1,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago"
  },
  {
    id: 2,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago"
  },
  {
    id: 3,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago"
  },
  {
    id: 4,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago"
  },
  {
    id: 5,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago"
  },
  {
    id: 6,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago"
  },
  {
    id: 7,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12, medium: 23, low: 18 },
    lastScan: "4d ago"
  },
  {
    id: 8,
    name: "Web App Servers",
    type: "Greybox",
    status: "Scheduled",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12 },
    lastScan: "4d ago"
  },
  {
    id: 9,
    name: "Web App Servers",
    type: "Greybox",
    status: "Scheduled",
    progress: 100,
    vulnerabilities: { critical: 5, high: 12 },
    lastScan: "4d ago"
  },
  {
    id: 10,
    name: "IoT Devices",
    type: "Blackbox",
    status: "Failed",
    progress: 10,
    vulnerabilities: { critical: 2, high: 4, medium: 8, low: 1 },
    lastScan: "3d ago"
  },
  {
    id: 11,
    name: "Temp Data",
    type: "Blackbox",
    status: "Failed",
    progress: 10,
    vulnerabilities: { critical: 2, high: 4, medium: 8, low: 1 },
    lastScan: "3d ago"
  }
];

export const mockStats = {
  critical: { count: 86, change: 2, trend: "up" },
  high: { count: 16, change: 0.9, trend: "up" },
  medium: { count: 26, change: 0.9, trend: "down" },
  low: { count: 16, change: 0.9, trend: "up" }
};

export const mockOrgInfo = {
  org: "Project X",
  owner: "Nammagiri",
  totalScans: 100,
  scheduled: 1000,
  rescans: 100,
  failedScans: 100,
  lastUpdate: "10 mins ago"
};

export const mockScanDetail = {
  id: 1,
  name: "Private Assets",
  type: "Grey Box",
  targets: "google.com",
  startedAt: "Nov 22, 09:00AM",
  credentials: "2 Active",
  files: "Control.pdf",
  checklists: "40/350",
  progress: 0,
  steps: ["Spidering", "Mapping", "Testing", "Validating", "Reporting"],
  activeStep: 0
};

export const mockLogs = [
  {
    time: "09:00:00",
    message: "I'll begin a systematic penetration test on helpdesk.democorp.com. Let me start with reconnaissance and enumeration.",
    highlights: []
  },
  {
    time: "09:01:00",
    message: "Good! target is online. Now let me perform port scanning to identify running services.",
    highlights: []
  },
  {
    time: "09:02:00",
    message: "Excellent reconnaissance results: - helpdesk.democorp.com: Apache httpd 2.4.65 on port 80 (web server). Let me probe the web server on target first to understand its structure.",
    highlights: ["helpdesk.democorp.com", "Apache httpd 2.4.65"]
  },
  {
    time: "09:03:00",
    message: "Great! I found a login page for a Help Desk Platform. I can see a useful comment: 'TODO: Delete the testing account (test:test)'. Let me test this credential.",
    highlights: ["test:test"]
  },
  {
    time: "09:04:00",
    message: "The POST method is not allowed on /password/test. Let me check what the JavaScript does - it posts to '#' which means the current page.",
    highlights: ["/password/test"]
  },
  {
    time: "09:05:00",
    message: "It redirects back to /password/test. Let me check if there's an /api endpoint or look for other paths.",
    highlights: ["/password/test"]
  },
  {
    time: "09:06:00",
    message: "Great! I can access the dashboard using the 'X-UserId: 10032' header. The dashboard shows 'Welcome, John Doe'. This suggests an IDOR vulnerability - I can access any user's dashboard by just changing the X-UserId header. Let me explore more of the application..",
    highlights: ["X-UserId: 10032", "IDOR vulnerability"]
  }
];

export const mockFindings = [
  {
    id: 1,
    severity: "Critical",
    timestamp: "10:45:23",
    title: "SQL Injection in Authentication Endpoint",
    endpoint: "/api/users/profile",
    description: "Time-based blind SQL injection confirmed on user-controlled input during authentication flow. Exploitation allows database-level access."
  },
  {
    id: 2,
    severity: "High",
    timestamp: "10:45:23",
    title: "Unauthorized Access to User Metadata",
    endpoint: "/api/auth/login",
    description: "Authenticated low-privilege user was able to access metadata of other users. Access control checks were missing."
  },
  {
    id: 3,
    severity: "Medium",
    timestamp: "10:45:23",
    title: "Broken Authentication Rate Limiting",
    endpoint: "/api/search",
    description: "No effective rate limiting detected on login attempts. Automated brute-force attempts possible."
  }
];

export const mockUser = {
  email: "admin@edu.com",
  name: "Security Lead",
  avatar: "https://via.placeholder.com/40"
};