import {Link, useLoaderData, useParams} from "react-router-dom";
import type {Post} from "./Blog.tsx";
import {PageHeader} from "../components/PageHeader.tsx";
import {Footer} from "../components/nav/Footer.tsx";
import styled from "styled-components";

const Breadcrumb = styled.div`
  display: flex;
  gap: 20px;
  
  & a {
    text-decoration: none;
  }
  
  & p {
    color: #916646;
    font-size: 24px;
    font-weight: 950;
  }

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    & p {
      font-size: 20px;
    }
  }
`;

const Container = styled.div`
  margin: 50px 20vw;

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    margin: 25px 10vw;
  }
`;

const Navigation = styled.div`
  display: grid;
  gap: 2vw;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  margin-top: 64px;

  @media screen and (max-width: 480px), (orientation: landscape) and (min-height: 320px) and (max-height: 720px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
`;

const NavigationLink = styled(Link)`
  color: #33363a;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  
  & span {
    font-size: 16px;
    opacity: 0.8;
    text-transform: none;
  }
`;

const PostText = styled.p`
  font-weight: 350;
  line-height: 1.4;
  margin: 16px 0;
`;

export function BlogPost() {
  const { id } = useParams();
  const posts: Post[] = useLoaderData() as Post[];
  const post: Post = posts.filter(item => item.id === id)[0];

  const previousPost: Post = posts[posts.indexOf(post) + 1] || undefined;
  const nextPost: Post = posts[posts.indexOf(post) - 1] || undefined;

  return (
    <>
      <PageHeader $backgroundImage={`/data/blog_images/${post.id}.webp`} $darken={true} $title={post.title} />
      <Container>
        <Breadcrumb>
          <Link to={"/blogs"}>
            <p>Blog</p>
          </Link>
          <p>&gt;</p>
          <p>{post.title}</p>
        </Breadcrumb>
        {post.content.map((item, key) => {
          return (<PostText key={key}>{item}</PostText>);
        })}
        <Navigation>
          {previousPost ? <NavigationLink to={`/blogs/${previousPost.id}`}>
            &lt; Previous
            <br />
            <span>{previousPost.title}</span>
          </NavigationLink> : <div></div>}
          <NavigationLink to={"/blogs"}>Back to Blog</NavigationLink>
          {nextPost ? <NavigationLink to={`/blogs/${nextPost.id}`}>
            Next &gt;
            <br />
            <span>{nextPost.title}</span>
          </NavigationLink> : <div></div>}
        </Navigation>
      </Container>
      <Footer />
    </>
  );
}
