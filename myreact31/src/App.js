import PageLotto from "./pages/PageLotto";
import ProfileCard from "./components/ProfileCard";
import { useState } from "react";
import TopNav from "components/TopNav";
import profileList from "./data/ProfileList.json";

function App() {
  const [pageName, setPageName] = useState("user1");
  const [selectProfileName, setSelectProfileName] = useState(profileList[0].id);

  return (
    <div>
      <TopNav changePageName={setPageName} />
      {pageName === "lotto" && <PageLotto />}
      <hr />
      {profileList.map((profile, index) => {
        if (selectProfileName === profile.id) {
          return (
            <div key={profile.id} className={`member${(index % 4) + 1}`}>
              <ProfileCard {...profile}>
                {profileList.map((nav_profile) => {
                  return (
                    <a
                      onClick={() => setSelectProfileName(nav_profile.id)}
                      className={
                        selectProfileName === nav_profile.id ? "on" : ""
                      }
                    ></a>
                  );
                })}
              </ProfileCard>
            </div>
          );
        }
      })}
    </div>
  );
}

export default App;
