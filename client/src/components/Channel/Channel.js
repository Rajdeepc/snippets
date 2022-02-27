import React from "react";

export default function Channel({ item, handleSelect, selectedChannelId }) {
  return (
    <div
      className={`channel-item ${
        item.channelId === selectedChannelId ? "active" : ""
      }`}
      onClick={() => handleSelect(item)}
    >
      {item.channelName}
    </div>
  );
}
