<template>
  <v-app>
     <v-content>
        <slot/>
     </v-content>

  </v-app>

</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
