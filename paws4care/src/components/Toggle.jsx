import { FaArrowRight } from "react-icons/fa";


// eslint-disable-next-line react/prop-types
export default function Toggle({onClose}) {
  return (
    <div className="w-full h-auto" onClick={onClose}>
        <div className="w-[200px] pt-[3rem] h-screen bg-white">
            <ul className="ml-3 w-[150px] mx-auto">
                <li className="my-2 text-md flex items-center justify-between ">Home <FaArrowRight/></li>
                <hr />
                <li className="my-2 text-md flex items-center justify-between ">Animal Welfare  <FaArrowRight/></li>
                <hr />
                <li className="my-2 text-md flex items-center justify-between">About Us  <FaArrowRight/></li>
                <hr />
                <li className="my-2 text-md flex items-center justify-between">Contact Us  <FaArrowRight/></li>
            </ul>

        </div>

    </div>
  )
}
