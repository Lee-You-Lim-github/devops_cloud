import ProfileCard from './ProfileCard';

function ProfileList({ profileList }) {
  return (
    <div>
      {profileList.length === 0 && <h1>등록된 프로필이 없습니다.</h1>}

      {profileList.map((memberList, index) => {
        return (
          <ProfileCard
            key={memberList.unique_id}
            memberList={memberList}
            className={`member${(index % 4) + 1}`}
          />
        );
      })}
    </div>
  );
}

export default ProfileList;
