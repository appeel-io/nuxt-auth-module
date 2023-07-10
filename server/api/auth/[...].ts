import { NuxtAuthHandler } from "#auth"
import AzureADProvider from "@auth/core/providers/azure-ad"
import type { AuthConfig } from "@auth/core/types"

// The #auth virtual import comes from this module. You can use it on the client
// and server side, however not every export is universal. For example do not
// use sign-in and sign-out on the server side.

const config = useRuntimeConfig()

// Refer to Auth.js docs for more details
export const authOptions: AuthConfig = {
  secret: config.authJs.secret,
  providers: [
    AzureADProvider({
        clientId: config.ad.clientId,
        clientSecret: config.ad.clientSecret,
        tenantId: config.ad.tenantId
    })
  ]
}

export default NuxtAuthHandler(authOptions, config)
// If you don't want to pass the full runtime config,
//  you can pass something like this: { public: { authJs: { baseUrl: "" } } }