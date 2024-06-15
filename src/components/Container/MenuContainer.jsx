const MenuContainer = ({ children }) => {
  return (
    <div className="flex w-full items-start justify-center bg-light-main-bg p-6 dark:bg-dark-main-bg lg:gap-12 lg:px-20 lg:py-6 2xl:h-screen">
      <div className="flex w-full flex-col gap-12 lg:max-w-[1120px] 2xl:max-w-[1440px]">{children}</div>
    </div>
  );
};

export default MenuContainer;
