import React from "react";
import "./LeftMenu.css";
import { FaPlus } from "react-icons/fa";
import { BsMusicNoteList, BsTrash } from "react-icons/bs";

const PlayList = [
  { id: 1, name: "My Favorite Songs" },
  { id: 2, name: "Chill Vibes" },
  { id: 3, name: "Workout Playlist" },
];

function MenuPlayList() {
  return (
    <div className="playListContainer">
      <div className="nameContainer">
        <p>Playlists</p>
        <i>
          <FaPlus />
        </i>
      </div>

      <div className="playListScroll">
        {PlayList &&
          PlayList.map((list) => (
            <div className="playLists" key={list.id}>
              <i className="list">
                <BsMusicNoteList />
              </i>
              <p>{list.name}</p>
              <i className="trash">
                <BsTrash />
              </i>
            </div>
          ))}
      </div>
    </div>
  );
}

export default MenuPlayList;

