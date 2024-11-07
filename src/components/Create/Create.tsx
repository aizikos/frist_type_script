import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { createProduct } from "../../redux/reducer/action";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Product } from "../../types/types";


const Create = () => {
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [price, setPrice] = useState('')
    const [info,setInfo] = useState('')
    const { product } = useSelector((s: RootState) => s.product)
    const dispatch = useDispatch()
    console.log(product);
    

    const errorMessage =()=>{
        toast.error('🦄 Запольните данные', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }

    const succses = () => {
        toast.success('🦄 Добавлено', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    function handleChange() {
        if (name === '' || img === '' || price === '' || info === '') {
            errorMessage()
        } else {
            const NewProduct: Product = {
                id: product.length ? product[product.length - 1].id + 1 : 1,
                name: name,
                img: img,
                price: Number(price),
                quantly: 1,
                info: info,
            }
            dispatch(createProduct(NewProduct))
            succses()
            setName('')
            setImg('')
            setPrice('')
            setInfo('')
        }
    }


    return (
        <div className="mt-[100px] w-[50%] mx-auto my-[50px] flex items-center justify-center flex-col">
            <div className="relative z-0 w-full mb-5 group">
                <input type="url" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    value={img}
                    onChange={(e) => setImg(e.target.value)} />
                <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">IMG</label>
            </div>
            <div className="text-black relative z-0 w-full mb-5 group">
                <input type="text" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    value={name}
                    onChange={(e) => setName(e.target.value[0].toLocaleUpperCase() + e.target.value.substring(1).toLocaleLowerCase())} />
                <label className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Name</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <input type="number" name="repeat_password" id="floating_repeat_password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <label className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Price</label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
                <textarea name="repeat_password" id="floating_repeat_password"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    value={info}
                    onChange={(e) => setInfo(e.target.value)}
                ></textarea>
                <label className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Product Info</label>
            </div>

            <button onClick={handleChange} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>
            <ToastContainer/>
        </div>
    )
}

export default Create