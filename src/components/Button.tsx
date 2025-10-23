
function Button({ text }: { text: string }) {
  return (
    <button className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition duration-300 cursor-pointer" data-aos="fade-up" data-aos-delay="400">{text}</button>
  )
}

export default Button