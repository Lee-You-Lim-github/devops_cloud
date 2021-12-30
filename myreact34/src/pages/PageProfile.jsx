import { useState, useEffect } from 'react';
import Axios from 'axios';

function PageProfile() {
  const [profileList, setProfileList] = useState([]);

  useEffect(() => {
    Axios.get(
      'https://classdevopscloud.blob.core.windows.net/data/profile-list.json',
    )

      .then((response) => {
        const bts = response.data.map((axios_profile) => ({
          name: axios_profile.name,
          role: axios_profile.role,
          mbti: axios_profile.mbti,
          uniqueId: axios_profile.unique_id,
          instagramUrl: axios_profile.instagram_url,
          profileImageUrl: axios_profile.profile_image_url,
        }));
        setProfileList(bts);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>PageProfile</h2>

      {profileList.length === 0 && <h1>등록된 프로필이 없습니다.</h1>}
      <button
        onClick={() => {
          setProfileList([]);
        }}
      >
        CLEAR
      </button>
      {profileList.map((profile) => {
        return (
          <div key={profile.uniqueId}>
            <section>
              <ul>
                <h3>{profile.name}</h3>
                <li>{profile.role}</li>
                <li>{profile.mbti}</li>
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
