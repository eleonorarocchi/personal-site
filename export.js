const fetch = require("node-fetch");

const BASE = "https://www.eleonorarocchi.it/wp-json/wp/v2/posts?per_page=100";

async function getAllPosts() {
  let page = 1;
  let all = [];

  while (true) {
    const res = await fetch(`${BASE}&page=${page}`);
    if (!res.ok) break;

    const data = await res.json();
    if (!data.length) break;

    all = all.concat(data);
    page++;
  }

  return all.map(p => ({
    title: p.title.rendered,
    date: new Date(p.date).toLocaleString("en-US", {
      month: "short",
      year: "numeric"
    }),
    type: "article",
    link: p.link
  }));
}

getAllPosts().then(console.log);