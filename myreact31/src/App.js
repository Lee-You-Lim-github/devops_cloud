import PageLotto from "./pages/PageLotto";
import ProfileCard from "./components/ProfileCard";
import profileImage1 from "./components/member1.jpg";
import profileImage2 from "./components/member2.jpg";
import profileImage3 from "./components/member3.jpg";
import profileImage4 from "./components/member4.jpg";
import { useState } from "react";
import TopNav from "components/TopNav";

function App() {
  const [pageName, setPageName] = useState("profile1");

  return (
    <div>
      <TopNav changePageName={setPageName} />
      {pageName === "lotto" && <PageLotto />}
      {pageName === "profilecard" && (
        <ProfileCard
          name={"빨간머리 앤"}
          role={"배우"}
          profileImage={profileImage1}
          facebook_url={"1111.facebook"}
          email={"1111@naver.com"}
        />
      )}
      <hr />
      {/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ */}
      {pageName === "profile1" && (
        <ProfileCard
          name={"빨간머리 앤"}
          role={"배우"}
          profileImage={profileImage1}
          facebook_url={"1111.facebook"}
          email={"1111@naver.com"}
          changePageName={setPageName}
        />
      )}
      {pageName === "profile2" && (
        <ProfileCard
          name={"박봄"}
          role={"가수"}
          profileImage={profileImage2}
          facebook_url={"2222.facebook"}
          email={"2222@naver.com"}
          changePageName={setPageName}
        />
      )}
      {pageName === "profile3" && (
        <ProfileCard
          name={"jonadan"}
          role={"래퍼"}
          profileImage={profileImage3}
          facebook_url={"3333.facebook"}
          email={"33334@naver.com"}
          changePageName={setPageName}
        />
      )}
      {pageName === "profile4" && (
        <ProfileCard
          name={"fucci"}
          role={"photograper"}
          profileImage={profileImage4}
          facebook_url={"4444.facebook"}
          email={"4444@naver.com"}
          changePageName={setPageName}
        />
      )}
    </div>
  );
}

export default App;
