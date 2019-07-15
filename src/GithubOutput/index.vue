<template>
  <div>
    <p v-if="currentUsername == null">
      Enter a username above to see their GitHub data
    </p>
    
    <p v-else>
      Below are the results for {{ currentUsername }}:
      <section>
      <img v-bind:src="picture"/>
      </section>
      <ul>
      <li>Name: {{name}}</li>
      <li># of public repositories: {{repos}}</li>
      </ul>

    </p>
  </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>