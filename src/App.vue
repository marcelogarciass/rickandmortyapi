<template>
 <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 shadow">
  <span class="col-span-1" v-for="character in characters" :key="character.id"> 
    <h1>{{ character.name }}</h1>
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img :src="character.image" alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">Episode</h2>
        <p> {{ character.episode }} </p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>

  </span>
</div>
</template>

<script setup lang="ts">
import './input.css'
import { onMounted, ref, watchEffect } from 'vue'
import {getCharacters} from "./services/api"

const characters = ref([{
  image:"",
  name:"",
  id:"",
  
}])

onMounted(() => {
  getCharacters()
    .then((res: any) => {
      console.log("res", res)
      characters.value = res.data.results.map((i: any) => ({
        image: i.image,
        name: i.name,
        id: i.id,
  
      }))
    })
}) 

watchEffect(() => {
  console.log("Characters", characters.value)
})
</script>