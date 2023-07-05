import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
          <input type="text" placeholder='Find a user'/>
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/10752186/pexels-photo-10752186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image"/>
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search