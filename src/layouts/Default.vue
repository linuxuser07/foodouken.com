<template>
  <div>
    <Spinner class="min-h-screen" v-if="getLoading" />
    <transition name="fade">
      <div v-show="!getLoading">
        <router-view
          class="md:px-8 pb-8 px-4 max-w-screen-xxl mx-auto min-h-screen"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'DefaultLayout',
  components: {
    Spinner
  },
  computed: {
    ...mapGetters('home', ['getLoading'])
  }
};
</script>
