import React,{useState} from 'react';
import * as API from '../../api';
import { useData } from "../../hooks";

const Population = () => {

  const { data: population, isLoading, error } = useData(API.getPopulation);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  const totalPages = Math.ceil(population?.length / pageSize);
  const startIndex = (currentPage -1 )  *pageSize;
const endIndex = startIndex + pageSize;
const visiblePopulation = population?.slice(startIndex, endIndex);

const handleNextPage =() =>{
    setCurrentPage((prevPage) => Math.min(prevPage +1 ,totalPages ));

}
const handlePrevPage =() =>{
    setCurrentPage((prevPage) => Math.max(prevPage -1 ,1 ));
    
}
  const postList = visiblePopulation?.map(({ id , info , img}) => (
    <li key={id}>
      <article>
        <h1>{info}</h1>
      <img 
          src={img}
          alt={`Population ${id}`}

          style={{ width: '100px',  height: 'auto' }}
        />
  
  <p>Number: {id}</p>

      
      </article>
    </li>
     ));

  return (
    <div>
    
      <ul>{postList}</ul>
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>Попередня сторінка</button>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>Наступна сторінка</button>
      </div>
    </div>
  );
};

export default Population;
