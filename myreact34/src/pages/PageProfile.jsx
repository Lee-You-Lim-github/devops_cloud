import { useState } from 'react';

function PageProfile() {
  const [profileList, setProfileList] = useState([
    {
      uniqueid: 'bts-jin',
      name: '진',
      role: '서브보컬',
      mbit: 'INFP',
      instagramUrl: 'https://instagram.com/jin',
      profileImageUrl:
        'https://classdevopscloud.blob.core.windows.net/data/bts-jin.jpg',
    },
  ]);

  //   useEffect(() => {

  //   }, []);

  return (
    <div>
      <h2>PageProfile</h2>

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
