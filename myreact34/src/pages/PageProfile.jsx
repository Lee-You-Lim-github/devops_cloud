import { useState, useEffect } from 'react';
import Axios from 'axios';

import ProfileList from 'components/ProfileList';

function PageProfile() {
  const [profileList, setProfileList] = useState([]);
  const [checkError, setCheckError] = useState(null);
  const [profileSearch, setProfileSearch] = useState([]);
  const [query, setQuery] = useState('');

  const handleRefresh = () => {
    setCheckError(null);

    Axios.get(
      'https://classdevopscloud.blob.core.windows.net/data/profile-list.json',
    )

      .then((response) => {
        const bts_profile = response.data.map((axios_profile) => ({
          name: axios_profile.name,
          role: axios_profile.role,
          mbti: axios_profile.mbti,
          uniqueId: axios_profile.unique_id,
          instagramUrl: axios_profile.instagram_url,
          profileImageUrl: axios_profile.profile_image_url,
        }));
        setProfileSearch(bts_profile);
      })
      .catch((error) => {
        setCheckError(error);
      });
  };

  useEffect(() => {
    profileSearch.length === 0 && handleRefresh();
    setProfileList(profileSearch);
  }, [profileSearch]);

  const handleKeyChange = (e) => {
    const value = e.target.value;
    console.log(value);
    setQuery(value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setProfileList(
        profileSearch.filter(({ name, role, mbti }) => {
          if (query.length === 0) {
            return true;
          }
          const pattern = new RegExp(query, 'i');
          const queryTarget = [name, role, mbti];
          return pattern.test(queryTarget);
        }),
      );
    }
  };

  return (
    <div>
      <h2>PageProfile</h2>

      {checkError && `에러 메세지: ${checkError.message}`}

      <button onClick={() => setProfileList([])}>CLEAR</button>
      <button onClick={handleRefresh}>새로고침</button>
      <hr />
      <div>
        <input
          type="text"
          placeholder="검색어를 입력해주세요."
          onChange={handleKeyChange}
          onKeyPress={handleKeyPress}
        />
      </div>
      <ProfileList profileList={profileList} />
    </div>
  );
}

export default PageProfile;
