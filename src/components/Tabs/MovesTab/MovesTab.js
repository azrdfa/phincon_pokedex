import { useState } from 'react'
import { restyleMoveName, restyleLevel } from '../../../restyles'
import { DefaultPagination } from '../../Paginations'
import "./MovesTab.css"

const MovesTab = ({ moves }) => {
  console.log("Render MovesTab")
  const [state, setState] = useState({
    limit: 10,
    offset: 0,
    currPage: 1,
    lastPage: Math.ceil(moves.length / 10)
  })
  const currMoves = moves.slice(state.offset, state.limit)
  const handlePrevPage = () => {
    setState({
      ...state,
      limit: state.limit - 10,
      offset: state.offset - 10,
      currPage: state.currPage - 1
    })
  }
  const handleNextPage = () => {
    setState({
      ...state,
      limit: state.limit + 10,
      offset: state.offset + 10,
      currPage: state.currPage + 1
    })
  }
  return (
    <div className="container">
      {
        currMoves.map(elem => {
          return <div key={elem.move.name}>
            {restyleMoveName(elem.move.name)}<br />
            <span className="level">
              {restyleLevel(
                elem.version_group_details[0].level_learned_at
              )}
            </span>
            <hr />
          </div>
        })
      }
      <DefaultPagination
        handlePrevPage={state.currPage === 1 ? null : handlePrevPage}
        handleNextPage={state.currPage === state.lastPage ? null : handleNextPage}
        currPage={state.currPage}
      />
    </div>
  )
}

export default MovesTab
