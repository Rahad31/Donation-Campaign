const Banner = () => {
  return (
    <div className="h-[500px] flex flex-col justify-center items-center gap-10 p-10 text-center">
      <h1 className="text-5xl font-bold">I Grow By Helping People In Need</h1>
      <div>
        <div className="form-control">
          <label className="input-group">
            <input
              type="text"
              className="input input-bordered lg:w-[350px]"
              placeholder="Search here"
            />
            <span className="bg-[#FF444A] text-white">Search</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Banner;
