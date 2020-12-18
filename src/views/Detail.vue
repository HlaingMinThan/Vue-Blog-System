<template>

  <div v-if="post" class="post">
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
import {useRoute} from "vue-router"
export default {
  components: { Spinner },
  props:["id"],//this.$route.parmas.id
  setup(props){
    let route=useRoute();// this.$route
    // console.log(route.params.id);
    let {post,error,load}=getPost(route.params.id);//{post,error,load}
    load();
    return{post,error}
  }
}
</script>

<style>
  .post {
    margin: 0 40px 30px;
    padding-bottom: 30px;
    border-bottom: 1px dashed #e7e7e7;
  }
  .post h2 {
    display: inline-block;
    position: relative;
    font-size: 26px;
    color: white;
    margin-bottom: 10px;
    max-width: 400px;
  }
  .post h2::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1deg);
  }
  .pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
  }
</style>