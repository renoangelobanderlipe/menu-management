const MenuContainer = ({ children }) => {
  return (
    <div className="bg-light-main-bg dark:bg-dark-main-bg lg:gap-12 lg:px-20 lg:py-6 2xl:h-screen flex items-start justify-center w-full p-6">
      <div className="flex w-full flex-col gap-12 lg:max-w-[1120px] 2xl:max-w-[1440px]">
        {children}
      </div>
    </div>
  )
}

export default MenuContainer
