import Pagination from 'react-bootstrap/Pagination'

const DefaultPagination = ({ handlePrevPage, handleNextPage, currPage }) => {
  console.log("Render DefaultPagination")
  return (
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
  )
}

export default DefaultPagination