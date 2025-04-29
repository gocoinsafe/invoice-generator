function App() {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-between text-center py-10">
      <div className="text-[40px] lg:text-[60px] flex mx-auto items-center justify-between w-[90%]">
        <span className="text-[60px] lg:text-[100px]">☀️</span>
        <span className="mt-10">☁️</span>
        <span>☁️</span>
        <span className="mt-10">☁️</span>
        <span>☁️</span>
      </div>
      <h1 className="text-3xl font-bold mb-10">
        Welcome to the Invoice Generator
      </h1>

      <a
        href={`/#/invoice`}
        className="underline text-2xl !text-white w-[300px] py-2 rounded-[6px] mx-auto bg-lime-500 hover:bg-lime-400"
      >
        👉 Start Creating Invoice
      </a>

      <div className="flex text-[20px] lg:text-[30px] mx-auto justify-between w-[90%]">
        <div className="flex items-end">
          <p className="relative text-[110px] -mb-[10px] lg:text-[180px] lg:-mb-[30px]">
            🌲
            <span className="hidden lg:flex text-[12px] absolute bottom-[15%] right-[20%]">
              🍄‍🟫 🍄
            </span>
          </p>
          <span className="text-[18px] lg:text-[24px] mb-[24px]"> 🦥</span>
          <p className="relative text-[90px] lg:text-[140px] lg:-mb-[10px]">
            🌲<span className="absolute text-[10px] top-1/3 ">🦋</span>
          </p>
        </div>

        <ul className="hidden lg:flex gap-5 items-end mb-5 text-[28px] mr-20">
          {["🦔", "", "", "🦭", "", "🐻‍❄️"].map((item) => (
            <li>{item}</li>
          ))}
        </ul>

        <div className="flex items-end">
          <p className="text-[70px] lg:text-[100px]">🌳</p>
          <span className="text-[14px] lg:text-[20px] mb-[16px]">🦜 </span>
          <p className="text-[90px] lg:text-[120px] relative">
            🌳
            <span className="absolute top-[45%] right-1/4 text-[24px]">🪺</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
