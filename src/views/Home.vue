<template>
  <div class="home">
          <div v-if="error">
              {{error}}
          </div>
          <div v-if="posts.length>0">
             <PostsList :posts="posts"></PostsList>
          </div>
          <div v-else>
              <Spinner></Spinner>
          </div>
       
    
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import PostsList from '../components/PostsList'
import getPosts from "../composables/getPosts"

export default {
  components: {
    Spinner, PostsList },
    setup(){
      // composable function
      let {posts,error,load}=getPosts()//{posts,error,load}
      
      load();

      return {posts,error};
    }
}
</script>
