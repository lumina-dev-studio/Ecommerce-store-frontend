const Container = ({children}:any) => {
  return (
    <div className="w-[90%] mx-auto 3xl:mx-auto md:me-10 3xl:w-[60%]  3xl:pe-10">
    {children}
  </div>
  );
};

export default Container;