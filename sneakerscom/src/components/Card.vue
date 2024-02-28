<template>
  <div class="container">
    <div v-if="error" class="card-error">{{ error }}</div>
    <div v-else class="card">
      <div class="card__title">Все кроссовки</div>
      <div class="card__search">
        <input type="text" v-model="filterWorld" @keyup="filterShues" />
        <span style="color: red">{{ shoes[0] }}</span>
      </div>
      <div class="row">
        <div v-for="shoe in shoes[0]" :key="shoe.id" class="col-3">
          <div class="card-item">
            <div class="card-item-favourite">
              <img src="/heart.svg" alt="heart" class="card-item-favourite__img" />
            </div>
            <div class="card-item__img">
              <img :src="shoe.imageUrl" :alt="shoe.title" />
            </div>
            <h2 class="card-item__title">{{ shoe.title }}</h2>
            <div class="card-item__footer">
              <div class="card-item-price card-item__price">
                <span class="card-item-price__title">Цена:</span>
                <div class="card-item-price__num">{{ shoe.price }} руб.</div>
              </div>
              <button class="card-item-add">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const shoes = ref(null)
const error = ref(null)
let filterWorld = ref('')
let filtredArray = ref(null)
async function doFetch() {
  try {
    const res = await fetch('https://4fa75954d55451f2.mokky.dev/shoes')
    shoes.value = await res.json()
  } catch (e) {
    error.value = 'Упс! Кросовки куда-то убежали'
  }
}
doFetch()

function filterShues() {
  console.log(shoes.value[0])
  filtredArray = shoes.value[0].filter((filterWorld) => {
    for (const item of Object.entries(shoes.value[0])) {
      return item[1].title.indexOf(filterWorld.value) > 0
    }
  })
  console.log(filtredArray)
  //   for (const item of Object.entries(shoes.value[0])) {
  //     console.log(shoes.value[0])

  //     filtredArray = shoes.value[0]
  //     // console.log(filterWorld.value)
  //     // console.log(item[1].title.indexOf(filterWorld.value))
  //     if (item[1].title.indexOf(filterWorld.value) > 0) {
  //       //   console.log(true + ' ---- ' + item[1].title)
  //     } else {
  //       //   console.log(false)
  //     }
  //   }
}
</script>

<style scoped lang="scss">
.card-item {
  position: relative;
  padding: 20px 30px 35px;
  border: 1px solid #f3f3f3;
  border-radius: 40px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  margin-bottom: 30px;
  &:hover {
    box-shadow: 0 14px 30px 0 #00000005;
    transform: translateY(-2px);
  }
  &__title {
    font-size: 14px;
    color: #000;
    margin-bottom: 14px;
    height: 50px;
  }
  &__img {
    margin-bottom: 14px;
  }
  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 10px;
  }
}
.card-item-price {
  &__title {
    font-size: 11px;
    text-transform: uppercase;
    color: #bdbdbd;
  }
  &__num {
    font-size: 14px;
    color: #000;
    font-weight: 900;
  }
}
.card-item-add {
  border: 1px solid #f2f2f2;
  border-radius: 8px;
  padding: 10px;
  width: 32px;
  height: 32px;
  color: #d3d3d3;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #fff;
}
.card-item-favourite {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  position: absolute;
  top: 30px;
  left: 30px;
  background-color: #fff;
  border: 1px solid #f8f8f8;
  border-radius: 7px;
  cursor: pointer;
  &__img {
    height: 12px;
    width: 14px;
    fill: red;
    stroke: red;
  }
}

.card-error {
  color: #ca3232;
}
</style>
