import Pagination from 'react-bootstrap/Pagination'
import "./DefaultPagination.css"

const DefaultPagination = ({ handlePrevPage, handleNextPage, currPage, lastPage }) => {
  console.log("Render DefaultPagination")
  let paginationIndexes = []
  if (lastPage > 5) {
    if (currPage > 3 && currPage < lastPage - 2) {
      paginationIndexes = [...Array(5).keys()].map(x => x + (currPage - 2))
    } else {
      if (currPage <= 3) {
        paginationIndexes = [...Array(5).keys()].map(x => x + 1)
      } else {
        paginationIndexes = [...Array(5).keys()].map(x => x + (lastPage - 4))
      }
    }
  } else {
    paginationIndexes = [...Array(lastPage).keys()].map(x => x + 1)
  }
  return (
    <div className="dp-container">
      <Pagination>
        <Pagination.Prev
          onClick={handlePrevPage}
          disabled={handlePrevPage === null}
        />
        {
          paginationIndexes.map(elem => {
            return <Pagination.Item
              key={elem}
              active={elem === currPage ? true: false}
              activeLabel=""
            >
              {elem}
            </Pagination.Item>
          })
        }
        <Pagination.Next
          onClick={handleNextPage}
          disabled={handleNextPage === null}
        />
      </Pagination>
    </div>
  )
}

export default DefaultPagination