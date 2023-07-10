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
     baseUrl: "http://localhost:3000"
   },
  runtimeConfig: {
    authJs: {
      secret: process.env.NUXT_NEXTAUTH_SECRET
    },
    ad: {
      clientId: process.env.AZURE_AD_CLIENT_ID,
      clientSecret: process.env.AZURE_AD_CLIENT_SECRET,
      tenantId: process.env.AZURE_AD_TENANT_ID,
    },
    public: {
      authJs: {
        verifyClientOnEveryRequest: true
      }
    }
  }
})