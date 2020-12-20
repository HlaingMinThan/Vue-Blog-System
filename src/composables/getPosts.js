import { ref } from "vue";
import {db} from "../firebase/config"
let getPosts=()=>{
    let posts=ref([]);
      let error=ref("");
      let load=async()=>{
         try{
           let res=await db.collection("posts").get()
               posts.value=res.docs.map((doc)=>{
                  return {id:doc.id,...doc.data()}
                  // console.log(doc.id);
               })
               // console.log(res.docs)               
         }catch(err){
            // console.log(error.message)
            error.value=err.message;
         }
      }
      return {posts,error,load};
}
export default getPosts;