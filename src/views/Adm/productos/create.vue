<template>
    <div>
        <p>te encuentras en el create</p>
        <sidebar></sidebar>
    </div>
</template>
<script>
import Sidebar from '@/components/sidebar.vue'

    export default {

        name: 'Principal',
        components: {
                Sidebar,
        },
    }
  </script>