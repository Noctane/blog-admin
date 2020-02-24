import DATA from './blogs.json';

export const initialState = {
  count: 3,
  blogs: DATA,
};

export const reducer = (state, action) => {
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
    default:
      return state;
  }
};