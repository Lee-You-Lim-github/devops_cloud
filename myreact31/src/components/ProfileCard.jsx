import "./ProfileCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faStickyNote,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import profileImage1 from "./member1.jpg";

function ProfileCard({
  id,
  name,
  role,
  profileImage,
  facebook_url,
  email,
  changePageProfile,
}) {
  return (
    <>
      <h2>Profile Card</h2>
      <div className={id}>
        <section>
          <nav className="menu">
            <a href="#">
              <FontAwesomeIcon icon={faBars} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faStickyNote} />
            </a>
          </nav>
          <article className="profile">
            <img src={profileImage1} alt="프로필 이미지" />

            <h1>{name}</h1>
            <h2>{role}</h2>

            <a href="#" className="btnView">
              VIEW MORE
            </a>
          </article>
          <ul className="contact">
            <li>
              <FontAwesomeIcon icon={faFacebook} />
              <span>
                <a href="{facebook_url}">{facebook_url}</a>
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>
                <a href={`mailto:${email}`}>{email}</a>
              </span>
            </li>
          </ul>
          <nav class="others">
            <a onClick={() => changePageProfile("user1")} class="on"></a>
            <a onClick={() => changePageProfile("user2")}></a>
            <a onClick={() => changePageProfile("user3")}></a>
            <a onClick={() => changePageProfile("user4")}></a>
          </nav>
        </section>
      </div>
    </>
  );
}

export default ProfileCard;
