// get the basePath depending on the environment
const isProd = process.env.NODE_ENV === 'production'
const basePath = isProd ? '/aboutme' : ''

// get the date of the last commit
const { execSync } = require('child_process')
const lastCommitDate = execSync('git log -1 --format=%cd').toString()


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_LAST_COMMIT_DATE: lastCommitDate,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      type: 'asset/source',
    })
    return config
  },
}

module.exports = nextConfig
