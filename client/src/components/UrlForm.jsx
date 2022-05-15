import React from 'react';

const UrlForm = ({searchUrl}) => {
  return (
    <form onSubmit={(event) => searchUrl(event)}>
      <input type='text' placeholder='Place image url here.'>
      </input>
      <button type='submit'>Search</button>
    </form>
  )
}

export default UrlForm;