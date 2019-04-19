<template>
  <Layout>
      <home-hero />
      <home-leading />
      <home-detail />
      <home-contact />
      <home-footer />
  </Layout>
</template>

<script>

import HomeHero from '@/components/HomeHero';
import HomeLeading from '@/components/HomeLeading';
import HomeDetail from '@/components/HomeDetail';
import HomeContact from '@/components/HomeContact';
import HomeFooter from '@/components/HomeFooter';

export default {
  metaInfo: {
    title: 'Lorem ipsum dolor sit amet.'
  },
  name: 'index',
    components: {
      HomeHero,
      HomeLeading,
      HomeDetail,
      HomeContact,
      HomeFooter
    }
}
</script>
