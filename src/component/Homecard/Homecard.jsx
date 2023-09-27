import { Link } from "react-router-dom";
const Homecard = ({ card }) => {
  const {
    Donation_id,
    Picture,
    Title,
    Category,
    Category_bg,
    Card_bg,
    Text_and_button_bg,
    Description,
    Price,
  } = card;
  const cardbgColor = {
    backgroundColor: Card_bg,
  };
  const textColor = {
    color: Text_and_button_bg,
  };
  const categoryColor = {
    backgroundColor: Category_bg,
  };
  return (
    <Link to={`/Homecard/${Donation_id}`}>
      <div
        style={cardbgColor}
        className="h-[283px] w-[360px]  flex flex-col rounded-md  bg-[{Card_bg}]"
      >
        <img className="w-[360px] h-[193px] rounded-t-md" src={Picture}></img>
        <div
          style={categoryColor}
          className="p-2 h-[25px] w-min flex justify-left items-center mx-2 my-3 rounded "
        >
          <div style={textColor} className="">
            {Category}
          </div>
        </div>
        <p style={textColor} className="pl-2">
          {Title}
        </p>
      </div>
    </Link>
  );
};

export default Homecard;
