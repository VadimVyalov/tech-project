import{j as s,N as l}from"./index-30936eb3.js";import{P as o}from"./index-6f2c059f.js";const c=({title:e=null,films:i,location:a})=>s.jsxs(s.Fragment,{children:[e&&s.jsx("h1",{className:" text-center text-2xl font-semibold text-stone-800",children:e}),s.jsx("ul",{className:`gap-6 grid pt-6
                grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4 
                xl:grid-cols-5
  `,children:i.map(t=>s.jsx("li",{className:`rounded-md border border-black border-solid overflow-hidden
        transition-all duration-300 
        hover:shadow-mm hover:shadow-sky-300 hover:scale-105 `,children:s.jsxs(l,{className:"p-0 ",to:`/Movies/${t.id}`,state:{from:a},children:[s.jsx("img",{className:"w-full p-0",src:t.poster_path?`https://image.tmdb.org/t/p/w185/${t.poster_path}`:"https://via.placeholder.com/185x280/cccccc/db0404.jpg?text=No+image",width:185,height:280,onError:({currentTarget:r})=>{r.onerror=null,r.src="https://via.placeholder.com/185x280/cccccc/db0404.jpg?text=No+image"},alt:`Poster: ${t.title}`}),s.jsx("p",{className:"mx-2 font-sans text-sm font-medium truncate ...",children:t.original_title})]})},t.id))})]});c.prototype={title:o.string,films:o.array.isRequired,location:o.shape};export{c as M};
