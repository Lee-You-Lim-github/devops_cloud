import { useState } from 'react';

function PageProfile() {
  const [profileList, setProfileList] = useState([]);

  return (
    <div>
      <h2>PageProfile</h2>
      {profileList.length === 0 && <h1>등록된 프로필이 없습니다.</h1>}
      {profileList.map((profile) => {
        return (
          <div key={profile.uniqueid}>
            <section>
              <ul>
                <h3>{profile.name}</h3>
                <li>{profile.mbit}</li>
                <li>{profile.role}</li>
                <li>인스타그램 주소:{profile.instagramUrl}</li>
                <img src={profile.profileImageUrl} />
              </ul>
            </section>
          </div>
        );
      })}
    </div>
  );
}

export default PageProfile;
