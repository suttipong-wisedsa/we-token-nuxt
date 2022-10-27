<template>
  <div>
    <ul>
      <li v-for="token in tokens " :key="token.id">
        {{ token.name }}
      </li>
    </ul>
    {{ data }}
  </div>
</template>
<script >
import gql from 'graphql-tag';
export default {
  data() {
    return {
      data: "ggg",
      tokens: []
    }
  },
  apollo: {
    tokens: gql`
    query MyQuery {
      tokens{
        results{
          id
          name
        }
      }
    }
    `
  }
}
</script>
