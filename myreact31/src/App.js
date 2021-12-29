import PageLotto from "./pages/PageLotto";
import ProfileCard from "./components/ProfileCard";
import { useState } from "react";
import TopNav from "components/TopNav";
import ProfileList from "./data/ProfileList.json";

function App() {
  const [pageName, setPageName] = useState("user1");
  const [selectProfileName, setSelectProfileName] = useState(ProfileList[0].id);

  return (
    <div>
      <TopNav changePageName={setPageName} />
      {pageName === "lotto" && <PageLotto />}
      <hr />
      {ProfileList.map((profile, index) => {
        if (selectProfileName === profile.id) {
          return (
            <div key={profile.id} className={`member${(index % 4) + 1}`}>
              <ProfileCard {...profile}>
                <a
                  onClick={() => setSelectProfileName("user1")}
                  className="on"
                ></a>
                <a onClick={() => setSelectProfileName("user2")}></a>
                <a onClick={() => setSelectProfileName("user3")}></a>
                <a onClick={() => setSelectProfileName("user4")}></a>
                <a onClick={() => setSelectProfileName("user5")}></a>
                <a onClick={() => setSelectProfileName("user6")}></a>
              </ProfileCard>
            </div>
          );
        }
      })}
    </div>
  );
}

export default App;
