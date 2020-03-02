import React, { createContext, useContext, useReducer, useCallback } from 'react';
import DATA from '../../ressources/blogs.json';

export const BlogContext = createContext();

export const BlogsProvider = ({ children }) => {
  const initialState = {
    count: 3,
    blogs: DATA,
  };

  // Memoized reducer to prevent trigger action twice
  const reducer = useCallback((state, action) => {
    switch (action.type) {
      case 'addBlog': {
        const newCount = state.count + 1;
        const newBlog = {
          id: newCount,
          name: action.newBlogName,
          articleCount: 0,
          articles: []
        }
        return {
          count: newCount,
          blogs: [...state.blogs, newBlog]
        };
      }
      case 'editBlog': {
        const blogIdx = state.blogs.findIndex(b => b.id === action.id);
        const blog = Object.assign({}, state.blogs[blogIdx]);
        blog.name = action.blogName;
        const blogs = Object.assign([], state.blogs);
        blogs.splice(blogIdx, 1, blog);
        return {
          count: state.count,
          blogs
        };
      }
      case 'deleteBlog': {
        const blogIdx = state.blogs.findIndex(b => b.id === action.id);
        const blogs = Object.assign([], state.blogs);
        blogs.splice(blogIdx, 1);
        return {
          count: state.count,
          blogs: blogs,
        };
      }
      case 'addArticle': {
        const blogIdx = state.blogs.findIndex(b => b.id === action.bId);
        const blog = Object.assign({}, state.blogs[blogIdx]);
        const newArticle = {
          ...action.newArticle,
          id: blog.articleCount + 1
        }
        blog.articles = [...blog.articles, newArticle];
        blog.articleCount = blog.articleCount + 1
        const blogs = Object.assign([], state.blogs);
        blogs.splice(blogIdx, 1, blog);

        return {
          count: state.count,
          blogs,
        };
      }
      case 'editArticle': {
        const blogIdx = state.blogs.findIndex(b => b.id === action.bId);
        const blog = Object.assign({}, state.blogs[blogIdx]);
        const articleIdx = blog.articles.findIndex(a => a.id === action.aId);
        const article = Object.assign({}, blog.articles[articleIdx]);
        article.title =  action.title;
        article.content = action.content;
        blog.articles.splice(articleIdx, 1, article);
        const blogs = Object.assign([], state.blogs);
        blogs.splice(blogIdx, 1, blog);
        return {
          count: state.count,
          blogs
        };
      }
      case 'deleteArticle': {
        const blogIdx = state.blogs.findIndex(b => b.id === action.bId);
        const blog = Object.assign({}, state.blogs[blogIdx]);
        const articleIdx = blog.articles.findIndex(a => a.id === action.aId);
        blog.articles.splice(articleIdx, 1);

        const blogs = Object.assign([], state.blogs);
        blogs.splice(blogIdx, 1, blog);
        return {
          count: state.count,
          blogs,
        };
      }
      default:
        return state;
    }
  }, []);

  return (
    <BlogContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </BlogContext.Provider>
  )
};
export const useStateValue = () => useContext(BlogContext);