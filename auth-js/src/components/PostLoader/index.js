import React, { useState } from 'react';
import * as API from '../../api';
import { useData } from "../../hooks";

const PostLoader = () => {
  const { data: post, isLoading, error } = useData(API.getPosts);
  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 5;
  const totalPages = Math.ceil(post?.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const visiblePosts = post?.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const postList = visiblePosts?.map(({ id, title, body }) => (
    <li key={id}>
      <article>
        <h2>{title}</h2>
        <p>{body}</p>
      </article>
    </li>
  ));

  return (
    <div>
      {postList && <ul>{postList}</ul>}
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Попередня сторінка</button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Наступна сторінка</button>
      </div>
    </div>
  );
};

export default PostLoader;
