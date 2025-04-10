import { SearchForm } from "./components/SearchForm";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { BlogContainer, Posts } from "./styles";
import { githubApi } from "../../lib/axios";
import { GithubIssue, GithubUserProfile } from "../../contexts/PostsContext";
import { useEffect, useState } from "react";

export const Blog = () => {
  const username = "allancruvinel";
  const repo = "github-blog";
  const [queryString, setQueryString] = useState("");
  const [posts, setPosts] = useState<GithubIssue[]>([]);
  const [userProfile, setUserProfile] = useState<GithubUserProfile>({
    avatar_url: "",
    bio: "",
    company: "",
    followers: 0,
    login: "string",
    name: "string",
    html_url: "!string",
  });
  async function getPostsFromGithubIssues(query: string = "") {
    const encodedQuery = encodeURIComponent(query);
    const response = await githubApi.get(
      `/search/issues?q=${encodedQuery}+repo:${username}/${repo}`
    );
    const newPosts = response.data.items.map((item: GithubIssue) => ({
      id: item.id,
      title: item.title,
      body: item.body,
      number: item.number,
    }));
    setPosts(newPosts);
  }

  async function getGithubUserProfile() {
    const response = await githubApi.get(`/users/${username}`);
    setUserProfile(response.data);
  }

  useEffect(() => {
    getGithubUserProfile();
    getPostsFromGithubIssues();
  }, []);

  useEffect(() => {
    console.log("changed queryString, new value is", queryString);
    getPostsFromGithubIssues(queryString);
  }, [queryString]);

  return (
    <BlogContainer>
      <Profile profile={userProfile} />
      <SearchForm
        setQueryString={setQueryString}
        totalQueryResults={posts.length}
      />
      <Posts>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Posts>
    </BlogContainer>
  );
};
