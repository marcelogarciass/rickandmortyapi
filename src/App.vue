<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 shadow">
    <span class="col-span-1" v-for="character in characters" :key="character.id">
      
      <div class="card w-96 bg-base-100 shadow-xl">
          
        <figure>
          <img :src="character.image" alt="Shoes" />
        </figure>
       
        <div class="card-body">
          <h1 class="card-title">{{ character.name }}</h1> 
          <h2 class="card-title">Id {{character.id}}</h2>
          <h2 class="card-title">Statuss {{character.status}}</h2>
          <p>{{ character.episode }}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary" :key="character.id" @click="redirectToBuy(character.id)" >Tudo sobre mim</button>
          </div>
        </div>
      </div>
    </span>
  </div>
</template>

<script setup lang="ts">
import './input.css'
import { onMounted, ref, watchEffect } from 'vue'
import { getCharacters } from "./services/api"

const characters = ref([
  {
    image: "",
    name: "",
    id: "",
    status:"",
  }
])

onMounted(() => {
  getCharacters()
    .then((res: any) => {
      console.log("res", res)
      characters.value = res.data.results.map((i: any) => ({
        image: i.image,
        name: i.name,
        id: i.id,
        status: i.status,
      }))
      console.log(characters.value)
    })
})

watchEffect(() => {
  console.log("Characters", characters.value)
})

const redirectToBuy = (id: string) => {
  window.open(`https://rickandmortyapi.com/api/character/${id}`)
}
</script>
