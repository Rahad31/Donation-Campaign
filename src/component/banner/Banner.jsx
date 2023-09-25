const Banner = () => {
  return (
    <div className="mb-10">
      <div className="relative">
        <img
          src="https://i.ibb.co/wpxx1Jr/istockphoto-1124599074-2048x2048.jpg"
          className="w-full h-[600px] opacity-10 "
        ></img>
      </div>

      <div className="flex flex-col gap-10 p-4 justify-center items-center absolute left-0 right-0  bottom-[100px] md:bottom-[80px] lg:bottom-[180px] xl:bottom-[420px] mx-auto">
        {" "}
        <h1 className="text-5xl font-bold text-center ">
          I Grow By Helping People In Need
        </h1>
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
    </div>
  );
};

export default Banner;
