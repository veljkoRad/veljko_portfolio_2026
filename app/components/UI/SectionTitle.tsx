const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="w-[50%] h-1.25 bg-blue mr-auto  mb-2 "></div>
      {children}
      <div className="w-[50%] h-1.25 bg-blue ml-auto  mt-2"></div>
    </div>
  );
};

export default SectionTitle;
