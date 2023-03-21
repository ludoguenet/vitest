<script setup lang="ts">
import { ref } from "vue";
import axios, { type AxiosResponse } from "axios";

defineProps<{
  msg: string,
  name: string|null,
  age: number,
}>();

const users = ref<Array<{ id: number, name: string }>>([]);

const loadFromServer = async (): Promise<void> => await axios
    .get<Array<{ id: number, name: string }>>('https://jsonplaceholder.typicode.com/users')
    .then((response: AxiosResponse) => users.value = response.data);

loadFromServer();
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      Hello!
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">{{ name }}</a>
      <a href="https://vuejs.org/" target="_blank" rel="noopener">{{ age }} ans</a>.
    </h3>
<!--    <button-->
<!--      v-on:click="loadFromServer"-->
<!--    >-->
<!--      LoadFromServer-->
<!--    </button>-->
    <ul>
      <li
        v-for="user in users"
        :key="user.id"
        data-test="user"
      >
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
