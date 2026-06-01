const SectionTitle = ({ children }) => {
  return (
    <div>
      <div className="w-[50%] h-[5px] bg-blue mr-auto  mb-2 "></div>
      {children}
      <div className="w-[50%] h-[5px] bg-blue ml-auto  mt-2"></div>
    </div>
  );
};

export default SectionTitle;
