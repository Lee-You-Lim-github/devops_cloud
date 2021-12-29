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
  const [pageName, setPageName] = useState();
  const [selectProfileName, setSelectProfileName] = useState("user1");

  return (
    <div>
      <TopNav changePageName={setPageName} />
      {pageName === "lotto" && <PageLotto />}

      <hr />

      {ProfileList.map((profile, index) => {
        if (selectProfileName === profile.id) {
          return (
            <div key={profile.id} className={`member${(index % 4) + 1}`}>
              <ProfileCard
                {...profile}
                changePageProfile={setSelectProfileName}
              />
            </div>
          );
        }
      })}
    </div>
  );
}

export default App;
