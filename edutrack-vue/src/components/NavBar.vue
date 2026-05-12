<template>
  <header class="navbar">
    <RouterLink to="/" class="logo">Edutrack</RouterLink>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/">Subjects</RouterLink>
      <RouterLink to="/">Calculator</RouterLink>
      <RouterLink to="/">Notes</RouterLink>
    </nav>
  </header>
</template>

<script setup>
// RouterLink automatically adds class="router-link-active"
// when the link matches the current URL, no extra code needed
</script>

<script scoped>
/**copy navbar styles from css/style.css here
 * do a research on these vue components anotomy:
 * ref(), computed(), defineProps, 
 * defineEmits 
 * 
*/
</script>