import PageLotto from "./pages/PageLotto";
import ProfileCard from "./components/ProfileCard";
import profileImage1 from "./components/member1.jpg";
import profileImage2 from "./components/member2.jpg";
import profileImage3 from "./components/member3.jpg";
import profileImage4 from "./components/member4.jpg";
import { useState } from "react";
import TopNav from "components/TopNav";
import ProfileList from "./data/ProfileList.json";

function App() {
  const [pageName, setPageName] = useState("user1");
  const [selectProfileName, setSelectProfileName] = useState("user1");

  return (
    <div>
      <TopNav changePageName={(setPageName, setSelectProfileName)} />
      {pageName === "lotto" && <PageLotto />}
      {pageName}
      <hr />
      {ProfileList.map((list) => {
        if (selectProfileName === list.id) {
          return (
            <ProfileCard {...list} changePageProfile={setSelectProfileName} />
          );
        }
      })}
    </div>
  );
}

export default App;
