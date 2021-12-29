import "./ProfileCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faStickyNote } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function ProfileCard({
  children,
  name,
  role,
  profile_image_url,
  instagram_url,
  mbti,
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
            <img src={profile_image_url} alt="프로필 이미지" />

            <h1>{name}</h1>
            <h2>{role}</h2>
            <h3>{mbti}</h3>

            <a href="#" className="btnView">
              VIEW MORE
            </a>
          </article>
          <ul className="contact">
            <li>
              <FontAwesomeIcon icon={faInstagram} />
              <span>
                <a href="{instagram_url}">{instagram_url}</a>
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
