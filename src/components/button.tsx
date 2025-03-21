interface ButtonProps {
  children: string
}

const Button = ({children}: ButtonProps) => {
  return ( 
    <button className="bg-gray-700 px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-200 ease-in">{children}</button>
  );
}
 
export default Button;