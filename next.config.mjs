import nextConstants from "next/constants.js"

// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true, // opcional pero recomendado para export estático
}

export default (phase) => {
  if (phase === nextConstants.PHASE_DEVELOPMENT_SERVER) {
    return { ...nextConfig, output: undefined }
  }

  return nextConfig
}
