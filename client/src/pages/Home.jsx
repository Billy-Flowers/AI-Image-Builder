import { useState, useEffect, React } from "react";
import styled from "styled-components";
import SearchBar from "../components/SearchBar";
import ImageCard from "../components/ImageCard";
import { GetPosts } from "../api";
import { CircularProgress } from "@mui/material";


const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  background: ${({ theme }) => theme.bg};
  padding: 30px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 6px 10px;
  }
`
const HeadLine = styled.div`
  font-size: 34px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`
const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 32px 0px;
  display: flex;
  justify-content: center;
`
const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Span = styled.span`
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.secondary};

  @media (max-width: 600px) {
    font-size: 20px;
`

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [filteredPost, setFilteredPost] = useState([]);

  const getPosts = async () => {
    setLoading(true);
    await GetPosts()
      .then((res) => {
        setPosts(res?.data?.data);
        setFilteredPost(res?.data?.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    if (!search) {
      setFilteredPost(posts);
      return;
    }
    
    const searchLower = search.toLowerCase();
    const filteredPosts = posts.filter((post) => {
      const promptMatch = post?.prompt?.toLowerCase().includes(searchLower);
      const nameMatch = post?.name?.toLowerCase().includes(searchLower);

      return promptMatch || nameMatch;
    });

    setFilteredPost(filteredPosts);
  }, [posts, search]);

  return (
    <Container>
      <HeadLine>
        Explore popular posts in the Community!
        <Span>Generated with AI</Span>
      </HeadLine>
      <SearchBar
        search={search}
        handleChange={(e) => setSearch(e.target.value)}
      />
      <Wrapper>
        {error && <div style={{ color: "red" }}>{error}</div>}
        {loading ? (
          <CircularProgress />
        ) : (
          <CardWrapper>
            {filteredPost.length > 0 ? (
              <>
                {filteredPost
                  .slice()
                  .reverse()
                  .map((item, index) => (
                    <ImageCard key={index} item={item} />
                  ))}
              </>
            ) : (
              <>No Posts Found !!</>
            )}
          </CardWrapper>
        )}
      </Wrapper>
    </Container>
  );
};


export default Home