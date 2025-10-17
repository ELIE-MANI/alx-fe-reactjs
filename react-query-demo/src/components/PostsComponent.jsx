import { useQuery } from "@tanstack/react-query";

function PostsComponent() {
  
  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    if (!response.ok){
      throw new Error("Failed to fetch posts")
    }
    return response.json
  };
    
  const {data:posts ,isLoading,isError,refetch,error} = useQuery({
    queryKey:["posts"],
    queryFn:fetchPosts,
    staleTime:10000,
     cacheTime: 300000,
    refetchOnWindowFocus: true, 
    keepPreviousData: true
  })
  if(isLoading) return <p>Loading...</p>
  if (isError) return <p>Error fetching posts...</p>
  const validPosts = Array.isArray(posts) ? posts.slice(0, 10) : [];
  return (
    <>
    <button onClick={() => refetch()}>Refetch Posts</button>'
    <ul>
      {validPosts.map((post) => (
        <li key={post.id}>
          <strong>{post.title}</strong>
          <p>{post.body}</p>

        </li>
      ))}
    </ul>
    </>
  );
}

export default PostsComponent;