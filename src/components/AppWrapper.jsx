// const AppWrapper = ({ children }) => (
//   <div className="bg-gradient-to-r from-pink-200 to-purple-300 min-h-screen w-full">
//     {children}
//   </div>
// );

const AppWrapper = ({ children }) => (
  <div className="bg-gradient-to-r from-[#F8FAFC] to-[#D9EAFD] min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 overflow-x-hidden">
    {children}
  </div>
);
export default AppWrapper;
