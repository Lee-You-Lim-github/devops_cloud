import { useState } from 'react';

function PageProfile() {
  const [profileList, setProfileList] = useState({
    uniqueid: 'bts-jin',
    name: '진',
    role: '서브보컬',
    mbit: 'INFP',
    instagramUrl: 'https://instagram.com/jin',
    profileImageUrl:
      'https://classdevopscloud.blob.core.windows.net/data/bts-jin.jpg',
  });

  return (
    <div>
      <h2>PageProfile</h2>
      <div>
        <section>
          <ul>
            <h3>{profileList.name}</h3>
            <li>{profileList.mbit}</li>
            <li>{profileList.role}</li>
            <li>인스타그램 주소:{profileList.instagramUrl}</li>
            <img src={profileList.profileImageUrl} />
          </ul>
        </section>
      </div>
    </div>
  );
}

export default PageProfile;
