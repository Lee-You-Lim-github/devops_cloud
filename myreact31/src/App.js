import PageLotto from "./pages/PageLotto";
import ProfileCard from "./components/ProfileCard";
import { useState, useEffect } from "react";
import TopNav from "components/TopNav";
// import profileList from "./data/ProfileList.json";
import Axios from "axios";

function App() {
  const [pageName, setPageName] = useState("user1");
  const [selectProfileName, setSelectProfileName] = useState("bts-jin");
  const [profileList, setProfileList] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://classdevopscloud.blob.core.windows.net/data/profile-list.json"
    )
      .then((response) => {
        // reponse는 axios 객체
        // response.data => 응답 내용
        setProfileList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <TopNav changePageName={setPageName} />
      {pageName === "lotto" && <PageLotto />}
      <hr />
      {profileList.map((profile, index) => {
        if (selectProfileName === profile.unique_id) {
          return (
            <div key={profile.unique_id} className={`member${(index % 4) + 1}`}>
              <ProfileCard {...profile}>
                {profileList.map((nav_profile) => {
                  return (
                    <a
                      onClick={() =>
                        setSelectProfileName(nav_profile.unique_id)
                      }
                      className={
                        selectProfileName === nav_profile.unique_id ? "on" : ""
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
