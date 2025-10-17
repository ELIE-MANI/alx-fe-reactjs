import { useParams } from "react-router-dom";

function BlogPost() {
  const {id} = useParams();

  return ( 
    <>
    <h2>Blog Post #{id}</h2>
     <p>This page is dynamically rendered based on the post ID.</p>
    </>
   );
}

export default BlogPost;