<template>

  <div v-if="post">
    <h2>{{post.title}}</h2>
    <p>{{post.body}}</p>
  </div>
  <div v-else>
    <Spinner></Spinner>
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import getPost from "../composables/getPost"
export default {
  components: { Spinner },
  props:["id"],
  setup(props){
    let {post,error,load}=getPost(props.id);//{post,error,load}
    load();
    return{post,error}
  }
}
</script>

<style>

</style>