const nextConfig = {
  async redirects() {
    return [
      { source: "/terms.html", destination: "/terms", permanent: true },
      { source: "/privacy.html", destination: "/privacy", permanent: true },
      { source: "/support.html", destination: "/support", permanent: true },
    ];
  },
};
export default nextConfig;
