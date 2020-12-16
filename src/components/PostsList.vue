<template>
  <h1>Post lists</h1>
  <div v-for="post in posts" :key="post.id">
    <SinglePost :post="post"></SinglePost>
  </div>
</template>

<script>
import SinglePost from './SinglePost'
export default {
  components: { SinglePost },
    props:["posts"],
    setup(props){
      
    }
   
   
}
</script>

<style>

</style>