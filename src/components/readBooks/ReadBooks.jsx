import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadList from "./ReadList";
import Wishlist from "./Wishlist";

const ReadBooks = () => {
  const [sortingType, setSortingType] = useState("");

  return (
    <div className="container mx-auto my-3">
      <div className="flex justify-center my-4">
        <div className="dropdown dropdown-center">
          <div tabIndex={0} role="button" className="btn m-1">
            Click ⬇️
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li onClick={() => setSortingType("pages")}>
              <a>Pages</a>
            </li>
            <li onClick={() => setSortingType("rating")}>
              <a>Rating</a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            <ReadList sortingType={sortingType} />
          </TabPanel>
          <TabPanel>
            <Wishlist sortingType={sortingType} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ReadBooks;
