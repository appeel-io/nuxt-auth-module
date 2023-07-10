import { resolve } from "node:path"

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@hebilicious/authjs-nuxt',
    '@nuxtjs/tailwindcss'
  ],
  alias: {
    "cookie": resolve(__dirname, "node_modules/cookie"),
    "jose": resolve(__dirname, "node_modules/jose/dist/browser/index.js"),
    "@panva/hkdf": resolve(__dirname, "node_modules/@panva/hkdf/dist/web/index.js")
  },
   authJs: {
     verifyClientOnEveryRequest: true,
     guestRedirectTo: "/",
     baseUrl: "https://nuxt-auth-module.vercel.app"
   },
  runtimeConfig: {
    azureClientId: process.env.AZURE_AD_CLIENT_ID,
    azureClientSecret: process.env.AZURE_AD_CLIENT_SECRET,
    azureTenantId: process.env.AZURE_AD_TENANT_ID,
    authJs: {
      secret: process.env.NUXT_NEXTAUTH_SECRET
    },
    github: {
      clientId: process.env.NUXT_GITHUB_CLIENT_ID,
      clientSecret: process.env.NUXT_GITHUB_CLIENT_SECRET
    },
    public: {
      authJs: {
        baseUrl: process.env.NUXT_NEXTAUTH_URL, // The base URL is used for the Origin Check in prod only
        verifyClientOnEveryRequest: true
      }
    }
  }
})