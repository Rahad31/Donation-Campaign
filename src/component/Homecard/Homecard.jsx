const Homecard = ({ card }) => {
  const {
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
    <div
      style={cardbgColor}
      className="h-[283px] w-[312px]  flex flex-col rounded-md  bg-[{Card_bg}]"
    >
      <img className="w-[312px] h-[193px] rounded-t-md" src={Picture}></img>
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
  );
};

export default Homecard;
