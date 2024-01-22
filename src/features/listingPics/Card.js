import { useNavigate } from "react-router-dom";
import Row from "../../ui/Row";
import Tag from "../../ui/Tag";

function Card({ image }) {
  const navigate = useNavigate();
  const { largeImageURL, tags } = image;
  const tagsArray = tags.split(",");

  return (
    <div
      onClick={() => navigate(`/product/${image.id}`)}
      className="overflow-hidden w-full cursor-pointer "
    >
      <img
        className="rounded-lg h-72 w-[100%]  object-cover "
        src={`${largeImageURL}`}
        alt="photoi"
      />
      <div>
        <Row type="horizontal">
          {tagsArray.map((tag, i) => (
            <Tag key={i} tagName={tag} />
          ))}
        </Row>
      </div>
    </div>
  );
}
export default Card;
