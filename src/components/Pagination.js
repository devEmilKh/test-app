import Paginate from "react-paginate";
import { useEffect, useState } from "react";

function Pagination() {
    
  const baseUrl = 'https://test-front.framework.team';

  const [items, setItems] = useState([]);

  const [pageCount, setpageCount] = useState(0);

  let limit = 9;

  useEffect(() => {
    const getItem = async () => {
      const res = await fetch(
        `https://test-front.framework.team/paintings?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setpageCount(Math.ceil(total / limit));
      setItems(data);
    };

    getItem();
  }, [limit]);

  const fetchComments = async (currentPage) => {
    const res = await fetch(
      `https://test-front.framework.team/paintings?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;

    const itemFormServer = await fetchComments(currentPage);

    setItems(itemFormServer);
  };
  return (
    <div className="container">
        {items.map((item) => {
          return (
            <div key={item.id} >
                  <h5 className="card-title">Id: {item.id} </h5>
                  <img src = {baseUrl + item.imageUrl} alt="item" />
                  <p >{item.name}</p>
            </div>
          );
        })}
      

      <Paginate className="card-text"
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default Pagination;