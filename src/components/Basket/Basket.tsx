import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { deleteBasket, IncrementQuently, MinusQuantly } from "../../redux/reducer/action"



const Basket = () => {

    const { basket } = useSelector((s: RootState) => s.product)
    const dispatch = useDispatch()

    return (
        <div className="containers">
            {
                basket.length ?
                <div className="mt-[50px] relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-16 py-3">
                                Image
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Qty
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            basket.map((el) => (
                                <tr key={el.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="p-4 flex justify-evenly items-center">
                                        <img src={el.img} className="w-[70px]" alt="Apple Watch" />
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        {el.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <button onClick={() => dispatch(MinusQuantly(el))} className="inline-flex items-center justify-center p-1 me-3 
                                            text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 
                                            rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                                <span className="sr-only">Quantity button</span>
                                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                                </svg>
                                            </button>
                                            <div>
                                                <h1 className="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                                                    {el.quantly}
                                                </h1>                                            
                                            </div>
                                            <button onClick={() => dispatch(IncrementQuently(el))}
                                             className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                                                <span className="sr-only">Quantity button</span>
                                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                        ${el.price * el.quantly}
                                    </td>
                                    <td className="px-6 py-4">
                                        <button onClick={() => dispatch(deleteBasket(el.id))} className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>:
            <div className="mt-40 w-[100%] text-center text-6xl font-bold">
                <h1>Корзина пуста</h1>
            </div>
            }

        </div>
    )
}

export default Basket