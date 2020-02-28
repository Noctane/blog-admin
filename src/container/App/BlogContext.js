import React, { createContext, useContext, useReducer } from 'react';
import DATA from '../../ressources/blogs.json';

export const BlogContext = createContext();

export const BlogsProvider = ({ children }) => {
  const initialState = {
    count: 3,
    blogs: DATA,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'addBlog': {
        const newCount = state.count + 1;
        const newBlog = {
          id: newCount,
          name: action.newBlogName,
          articles: []
        }
        return {
          count: newCount,
          blogs: [...state.blogs, newBlog]
        };
      }
      case 'editBlog': {
        const blogId = state.blogs.findIndex(b => b.id === action.id);
        const blog = Object.assign({}, state.blogs[blogId]);
        blog.name = action.blogName;
        const blogs = Object.assign([], state.blogs);
        blogs.splice(blogId, 1, blog);
        return {
          count: state.count,
          blogs
        };
      }
      case 'deleteBlog': {
        const blogId = state.blogs.findIndex(b => b.id === action.id);
        const blogs = Object.assign([], state.blogs);
        blogs.splice(blogId, 1);
        return {
          count: state.count,
          blogs: blogs,
        };
      }
      case 'addArticle': {
        const blogId = state.blogs.findIndex(b => b.id === action.bId);
        const blog = Object.assign({}, state.blogs[blogId]);
        const newArticle = {
          ...action.newArticle,
          id: blog.articleCount + 1

        }
        blog.articles = [...blog.articles, newArticle];
        blog.articleCount = blog.articleCount + 1
        console.log('blog', blog);
        const blogs = Object.assign([], state.blogs);
        blogs.splice(blogId, 1, blog);

        return {
          count: state.count,
          blogs,
        };
      }
      default:
        return state;
    }
  };

  return (
    <BlogContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </BlogContext.Provider>
  )
};
export const useStateValue = () => useContext(BlogContext);