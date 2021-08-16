import Pagination from 'react-bootstrap/Pagination'
import "./DefaultPagination.css"

const DefaultPagination = ({ handlePrevPage, handleNextPage, currPage }) => {
  console.log("Render DefaultPagination")
  return (
    <div className="dp-container">
      <Pagination>
        <Pagination.Prev
          onClick={handlePrevPage}
          disabled={handlePrevPage === null}
        />
        <Pagination.Item
          key={0}
          active={true}
          activeLabel=""
        >
          {currPage}
        </Pagination.Item>
        <Pagination.Next
          onClick={handleNextPage}
          disabled={handleNextPage === null}
        />
      </Pagination>
    </div>
  )
}

export default DefaultPagination