import {PageHeader} from "../components/PageHeader.tsx";
import {Footer} from "../components/nav/Footer.tsx";
import styled from "styled-components";
import {Link as RRLink, useLoaderData} from "react-router-dom";
import {PostDate} from "../components/blog/PostDate.tsx";

export type Post = {
  date: string,
  title: string,
  id: string,
  content: string[],
  image: string // unused but present in JSON file
}

const Grid = styled.div`
  display: grid;
  gap: 48px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  margin: 50px 20vw;

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    grid-template-columns: 1fr;
    margin: 50px 0;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Link = styled(RRLink)`
  color: #916646;
  font-size: 18px;
  font-weight: 950;
  margin: 0 32px;
  text-decoration: none;

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    font-size: 16px;
    margin: 0 20px;
  }
`;

const PostContent = styled.div`
  background-color: #f5f5f5;
  border-radius: 10px;
  color: #33363a;
  height: fit-content;
  overflow: hidden;
  padding-bottom: 16px;
  width: 360px;

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    width: 260px;
  }
`;

const PostImage = styled.img`
  height: 240px;
  object-fit: cover;
  width: 100%;

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    height: 140px;
  }
`;

const PostPreview = styled.p`
  margin: 0 32px 6px;

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    font-size: 14px;
    margin: 0 20px 6px;
  }
`;

const PostTitle = styled.h1`
  font-size: 24px;
  font-weight: 950;
  line-height: 1.3;
  margin: 12px 32px 6px;

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    font-size: 18px;
    margin: 8px 20px 6px;
  }
`;

export function Blog() {
  const posts: Post[] = useLoaderData() as Post[];

  return (
    <>
      <PageHeader $backgroundImage={"/assets/images/pagehead_blog.webp"} $title={"Blog"} />
      <Grid>
        {posts.map(function(item: Post, key) {
          return (
            <Item key={key}>
              <PostDate $date={item.date} />
              <PostContent>
                <PostImage alt={item.title} draggable={false} loading={"lazy"} src={`${import.meta.env.VITE_API_HOST}/blog_images/${item.id}.webp`} />
                <PostTitle>{item.title}</PostTitle>
                <PostPreview>{item.content.join(" ").substring(0, 64).trim()}&hellip;</PostPreview>
                <Link to={`/blogs/${item.id}`}>Read More</Link>
              </PostContent>
            </Item>
          );
        })}
      </Grid>
      <Footer />
    </>
  );
}
