const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <div className=" gradient w-[65%] h-1.25  ml-auto   mt-2 rounded-full"></div>
    </div>
  );
};

export default SectionTitle;
