/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  env: {
    // Isso garante que o front saiba onde o backend está, mesmo no Docker
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
  },
};

module.exports = nextConfig;