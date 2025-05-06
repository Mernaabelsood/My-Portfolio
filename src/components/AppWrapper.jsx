// const AppWrapper = ({ children }) => (
//   <div className="bg-gradient-to-r from-pink-200 to-purple-300 min-h-screen w-full">
//     {children}
//   </div>
// );

const AppWrapper = ({ children, theme }) => (
  <div
    className={
      `min-h-screen w-full transition-colors duration-500 ` +
      (theme === "dark"
        ? "bg-gradient-to-r from-gray-900 to-gray-800"
        : "bg-gradient-to-r from-[#F8FAFC] to-[#D9EAFD]")
    }
  >
    {children}
  </div>
);
export default AppWrapper;
