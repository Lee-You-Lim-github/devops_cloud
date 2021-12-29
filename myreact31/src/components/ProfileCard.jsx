import "./ProfileCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faStickyNote,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function ProfileCard({
  children,
  name,
  role,
  profileImage,
  facebookUrl,
  email,
}) {
  return (
    <>
      <h2>Profile Card</h2>
      <div>
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
            <img src={profileImage} alt="프로필 이미지" />

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
                <a href="{facebook_url}">{facebookUrl}</a>
              </span>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>
                <a href={`mailto:${email}`}>{email}</a>
              </span>
            </li>
          </ul>
          <nav className="others">{children}</nav>
        </section>
      </div>
    </>
  );
}

export default ProfileCard;
