import axios from 'axios';

const API = {
  async getPosts() {
    const data = await axios
      .get(
        `https://www.articles.ayazona.com/ghost/api/v3/content/posts?filter=tag%3A%5Bnews%2Cbloom%2Crestaurant-stories%2Cfresh%2Cignite%2Cpolicy%5D&key=78c317790ceec50a196273f8d8`
      )
      .then(async ({ data }) => {
        const parsedData = await associatePostWithTag(data.posts);
        return parsedData;
      });
    return data;
  },
  async getPostBySlug(slug) {
    const parsedData = await axios
      .get(
        `https://www.articles.ayazona.com/ghost/api/v3/content/posts/slug/${slug}?key=78c317790ceec50a196273f8d8&include=tags,authors`
      )
      .then(async ({ data }) => await associatePostWithTag(data.posts))
      .catch(err=> {
          console.log('Error ::', err);
          return [];
      });
    return parsedData;
  },
  async getTags() {
    const tags = await axios
      .get(
        'https://www.articles.ayazona.com/ghost/api/v3/content/tags?key=78c317790ceec50a196273f8d8'
      )
      .then(({ data }) => data.tags);
    return tags;
  },
  async getPostsByTag(tag) {
    const data = await axios
      .get(
        `https://www.articles.ayazona.com/ghost/api/v3/content/posts?filter=tag:${tag}&limit=all&key=78c317790ceec50a196273f8d8`
      )
      .then(({ data }) => data.posts);
    return data;
  },
  async getPages() {
    const data = await axios
      .get(
        'https://www.articles.ayazona.com/ghost/api/v3/content/pages?key=78c317790ceec50a196273f8d8'
      )
      .then(({ data }) => data.pages);
    return data;
  },
  async getSettings() {
    const data = await axios
      .get(
        'https://www.articles.ayazona.com/ghost/api/v3/content/settings?key=78c317790ceec50a196273f8d8'
      )
      .then(({ data }) => data.settings.navigation);
    return data;
  },
  async getTags() {
    const tags = await axios
      .get(
        'https://www.articles.ayazona.com/ghost/api/v3/content/tags?key=78c317790ceec50a196273f8d8'
      )
      .then(({ data }) => data.tags);
    return tags;
  },
};

const associatePostWithTag = async posts => {
  const tags = await API.getSettings();

  const postsByTag = await Promise.all(
    tags.map(async item => ({
      [item.label]: await API.getPostsByTag(item.url.split('/')[2]),
    }))
  );

  // associate all posts with their tag
  posts.forEach(post => {
    const postTag = postsByTag.filter(g => {
      const list = Object.values(g)[0];
      const match = list.filter(p => p.id === post.id);
      return match.length;
    });
    if (postTag.length) {
      post['tag'] = Object.keys(postTag[0])[0].toLocaleLowerCase();
    }
  });
  return posts.sort((a, b) => b.published_at - a.published_at);
};

export const formateDate = d => {
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  const theDate = new Date(d);
  return theDate.toLocaleDateString('en-US', options);
};

export default API;
