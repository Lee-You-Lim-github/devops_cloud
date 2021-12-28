function TopNav({ changePageName }) {
  return (
    <ul className="top-nav">
      <li>
        <a onClick={() => changePageName("lotto")}>lotto</a>
      </li>
      <li>
        <a onClick={() => changePageName("profile1")}>ProfileCard</a>
      </li>
    </ul>
  );
}

export default TopNav;
