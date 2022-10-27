import { defineNuxtConfig } from '@nuxt/config'
export default defineNuxtConfig({
  modules: ['@nuxtjs/apollo'],
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://subgraphs.yuemmai.digital/subgraphs/name/jaynmfs/yes-subgraphs-mainnet/graphql'
      }
    },
  },
})
