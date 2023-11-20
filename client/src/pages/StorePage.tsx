import React from 'react'
import ProductSlider from '../components/ProductSlider'
import { NavLink } from 'react-router-dom'

const StorePage = () => {
  return (
    <div>
      <div className="md:px-36 px-14 py-5 text-xs md:text-sm font-serif">
        <nav>
          <ul className="grid grid-cols-4 md:grid-cols-8 gap-y-5 justify-between items-start font-roboto">
            <NavLink to="/store/fruits">
              <li className="flex flex-col items-center">
                <img
                  className="md:h-28 h-14 rounded-full hover:shadow-lg hover:cursor-pointer"
                  src="/store-navbar/fruit.jpg"
                  alt="fruit"
                />
                <p>Fruits</p>
              </li>
            </NavLink>
            <NavLink to="/store/vegetables">
              <li className="flex flex-col items-center">
                <img
                  className="md:h-28 h-14 rounded-full hover:shadow-lg hover:cursor-pointer"
                  src="/store-navbar/vegetable.jpg"
                  alt="fruit"
                />
                <p>Vegetables</p>
              </li>
            </NavLink>
            <NavLink to="/store/coffee-&-tea">
              <li className="flex flex-col items-center">
                <img
                  className="md:h-28 h-14 rounded-full hover:shadow-lg hover:cursor-pointer"
                  src="/store-navbar/coffee.png"
                  alt="fruit"
                />
                <p>Coffee & Tea</p>
              </li>
            </NavLink>
            <NavLink to="/store/diary-&-eggs">
              <li className="flex flex-col items-center">
                <img
                  className="md:h-28 h-14 rounded-full hover:shadow-lg hover:cursor-pointer"
                  src="/store-navbar/milk.png"
                  alt="fruit"
                />
                <p>Diary & eggs</p>
              </li>
            </NavLink>
            <NavLink to="/store/meat">
              <li className="flex flex-col items-center">
                <img
                  className="md:h-28 h-14 rounded-full hover:shadow-lg hover:cursor-pointer"
                  src="/store-navbar/meat.png"
                  alt="fruit"
                />
                <p>Meat</p>
              </li>
            </NavLink>
            <NavLink to="/store/honey-&-bee-products">
              <li className="flex flex-col items-center">
                <img
                  className="md:h-28 h-14 rounded-full hover:shadow-lg hover:cursor-pointer"
                  src="/store-navbar/honey.png"
                  alt="fruit"
                />
                <p className="text-center">Honey & Bee Products</p>
              </li>
            </NavLink>
            <NavLink to="/store/flowers">
              <li className="flex flex-col items-center">
                <img
                  className="md:h-28 h-14 rounded-full hover:shadow-lg hover:cursor-pointer"
                  src="/store-navbar/flower.png"
                  alt="fruit"
                />
                <p>Flowers</p>
              </li>
            </NavLink>
            <NavLink to="/store/dried-fruits-&-nuts">
              <li className="flex flex-col items-center">
                <img
                  className="md:h-28 h-14 rounded-full hover:shadow-lg hover:cursor-pointer"
                  src="/store-navbar/dried-fruit.png"
                  alt="fruit"
                />
                <p>Dried Fruits & Nuts</p>
              </li>
            </NavLink>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col gap-4 mb-32 md:px-36 px-14 pt-20">
        <ProductSlider
          noOfSlides={6}
          height={48}
          heading="Recommended for you"
          editable={false}
        />
      </div>
      <div className="pt-96"></div>
    </div>
  )
}

export default StorePage
