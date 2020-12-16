<template>
  <div class="home">
     
         <PostsList :posts="posts"></PostsList>
       
    
  </div>
</template>

<script>
import PostsList from '../components/PostsList'
import { ref } from 'vue'

export default {
  components: { PostsList },
    setup(){
    
      let posts=ref([
      
      ])
      return {posts};
    }
}
</script>
