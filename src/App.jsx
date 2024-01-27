import "./App.css";
import OutsideClickTest from "./components/OutsideClick/test";
import SearchAutoComplete from "./components/SearchAutoComplete";
import Tree from "./components/Tree";
import Accordian from "./components/accordian";
import LightDarkMode from "./components/light-darm-mode";
import LoadData from "./components/loadmore";
import ModelTest from "./components/modelpopup/model-test";
import RandomColors from "./components/randomcolor";
import ScrollIndicator from "./components/scrollindicator";
import ScrollToSection from "./components/scrolltopbottom";
import menus from "./components/Tree/data";
import ScrollToTopAndBottom from "./components/scrolltopbottom";
import Starrating from "./components/star-rating";
import UseFetchHookTest from "./components/useFetch/test";
import InfiniteScroll from "./components/infiniteScroll";
import Progressbar from "./components/progressbar";
import Progressbartest from "./components/progressbar/test";
import Likebtn from "./components/Likebutton";
import Stopwatch from "./components/Stopwatch";
import Todo from "./components/Todo";
import TodoList from "./components/Todo";
import Table from "./components/Table";
import Calculator from "./components/Calculator";
import TrafficLight from "./components/TrafficLight";
import Carousal from "./components/Carousal";
import PasswordGenerator from "./components/passwordgenerator";
import Pagination from "./components/pagination";

import { Routes, Route } from "react-router-dom";

import RouterTab from "./components/React-Router";
import Tab1 from "./components/React-Router/tab1";
import Tab2 from "./components/React-Router/tab2";
import Tab3 from "./components/React-Router/tab3";
import Home from "./components/React-Router/Home";
import ReactRedux from "./components/React-Redux";

function App() {
  return (
    <>
      {/*Components*/}

      {/*Light Dark Mode*/}
      {/*<LightDarkMode/>*/}

      {/*Star Ratings */}
      {/* <Starrating/>*/}

      {/* Accordian */}
      {/* <Accordian/>*/}

      {/* Load More */}
      {/* <LoadData/>*/}

      {/* Random Colors */}
      {/* <RandomColors/>*/}

      {/* Search AutoComplete with Api */}
      {/*<SearchAutoComplete/> */}

      {/* OutSideClick */}
      {/* <OutsideClickTest/> */}

      {/* USe Fetch Hook */}
      {/*<UseFetchHookTest/>*/}

      {/* Model popup */}
      {/* <ModelTest/>*/}

      {/*Scrollindicator */}
      {/*<ScrollIndicator url={'https://dummyjson.com/products'}/>*/}

      {/*Scrolltoptobottom */}
      {/*<ScrollToSection/>*/}

      {/* Tree */}
      {/*<Tree menus={menus}/>*/}

      {/* Infinite Scroll */}
      {/*<InfiniteScroll/>*/}

      {/* Progress Bar */}
      {/*<Progressbartest/>*/}

      {/* Like Button */}
      {/*<Likebtn/>*/}

      {/*Stop Watch */}
      {/*<Stopwatch/>*/}

      {/*To do  */}
      {/*<TodoList/> */}

      {/* Table */}
      {/*<Table/> */}

      {/* Calculator */}
      {/*<Calculator/>*/}

      {/* Traffic Light */}
      {/*<TrafficLight/>*/}

      {/* Carousal */}
      {/*<Carousal/>*/}

      {/* Pagination */}
      {/*<Pagination/>*/}

      {/*Router*/}
       {/*<Routes>
        <Route path="/" element={<RouterTab />}>
          <Route index element={<Home />} />
          <Route path="Tab1" element={<Tab1 />} />
          <Route path="Tab2" element={<Tab2 />} />
          <Route path="Tab3" element={<Tab3 />} />
        </Route>
       </Routes>*/}

      {/*Redux*/}
      <ReactRedux/>


      {/*User Authentication*/}
    </>
  );
}

export default App;
