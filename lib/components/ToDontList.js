import React from 'react';
import ToDontCard from './ToDontCard';

const ToDontList = ({ toDonts, updateCard, deleteCard }) => {

  const displayToDonts = () => {
    return toDonts.map(toDont => {
      return <ToDontCard toDont={ toDont }
                         key={ toDont.id }
                         updateCard={ updateCard }
                         deleteCard={ deleteCard }/>
    })
  }

  const noToDontsMsg = () => {
    return (
      <div className='no-todonts-msg'>
        Add some Don'ts
      </div>
    )
  }

  return (
    <div className='toDont-list'>
      { toDonts.length ? displayToDonts() : noToDontsMsg() }
    </div>
  )
}

export default ToDontList;
