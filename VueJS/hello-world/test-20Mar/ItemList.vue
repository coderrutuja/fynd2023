<!-- List of Items -->
<script>
  export default {
    data() {
      return {
        items: [
          { id: 1, name: 'Anime' },
          { id: 2, name: 'Biryani' },
          { id: 3, name: 'Books' },
          { id: 4, name: 'KDrama' },
          { id: 5, name: 'Milkshake' },
          { id: 6, name: 'Basundi' }
        ]
      }
    }
  }
</script>

<template>
    <div class="item-list-container">
      <h2>List of items</h2>
      <ul class="item-list">
        <li v-for="item in items" :key="item.id" class="item">
          {{ item.name }}
        </li>
      </ul>
    </div>
</template>
  
<style>
  .item-list-container {
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 20px;
  }
  
  .item-list {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  
  .item {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ccc;
  }
</style>
  