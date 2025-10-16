<script setup lang="ts">
// import { ref } from 'vue'  ASI SE IMPORTAN otros COMPOSABLES

defineProps<{ msg: string }>() // ASÍ SE DECLARAN PROPS del componente (parametros que recibe el componente)

// const count = ref(0) ASÍ SE DECLARAN VARIABLES REACTIVAS
// const increment = () => { count.value++ } ASÍ SE DECLARAN FUNCIONES

</script>

<template>
  <h1>{{ msg }}</h1> <!-- ASÍ SE USAN LAS PROPS y variables reactivas-->
</template>

<style scoped>
  h1 {
    color: #42b983;
  }
</style>
