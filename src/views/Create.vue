<template>
  <form @submit.prevent="addPost">
    <label>Title</label>
    <input type="text" required v-model="title">

    <label>Body</label>
    <textarea required v-model="body"></textarea>

    <label>Tags(hit enter to add a tag)</label>
    <input type="text" v-model="tag"  @keydown.enter.prevent="handleKeydown">
    <div v-for="tag in tags" :key="tag" class="pill">
      {{tag}}
    </div>
    <button>add post</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import {useRouter} from 'vue-router'
export default {
  setup(){
    let router=useRouter(); //this.$router
    
    let title=ref("");//title
    let body=ref("");//body
    let tag=ref("");//html
    let tags=ref([]);
    let handleKeydown=()=>{
      if(!tags.value.includes(tag.value)){
        tags.value.push(tag.value)
      }
      tag.value=""
    }
    let addPost=async()=>{
        await fetch("http://localhost:3000/posts",{
          method:"POST",
          headers:{
            "Content-type":"application/json"
          },
          body:JSON.stringify(
            {
              title:title.value,//""
              body:body.value,//""
              tags:tags.value//[]
            }
          )
        })
        // redirect user to home page
        router.push("/");
    }
    return {title,body,tag,handleKeydown,tags,addPost}
  }
}
</script>

<style>
  form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
  }
  input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
  }
  textarea {
    height: 160px;
  }
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
  }
  label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
  }
  button {
    display: block;
    margin-top: 30px;
    background: #ff8800;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px
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