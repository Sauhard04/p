import React from 'react'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import Rating from '@mui/material/Rating'

interface ProductCardProps {
  height: number
  editable: boolean
}

const ProductCard: React.FC<ProductCardProps> = ({ height, editable }) => {
  return (
    <div className="mx-1">
      <div className="py-5 flex flex-col items-center rounded-md font-noto hover:cursor-pointer">
        {/* 4:5 ratio */}
        <div
          className={`h-40 mb-3 md:h-${height} md:w-${
            height - 8
          } flex items-center justify-center overflow-hidden`}
        >
          <img className="object-cover w-full h-full" src="/apple.png" alt="" />
        </div>
        <div>
          <h4 className={`truncate w-${height - 8}`}>
            Apples, Silicon Oasiskm frkn
          </h4>
          <h6 className="text-xs">Mariam Khatoon</h6>
          <div className="flex justify-between items-end">
            <div>
              <div className="flex">
                <p className="text-xs py-0.5 pr-1">AED</p>
                <p>
                  <span className="font-bold">35.50</span>/kg
                </p>
              </div>
              <Rating
                defaultValue={3.5}
                precision={0.5}
                size="small"
                readOnly
              />
            </div>
            {editable && (
              <div className="float-right flex mb-2">
                <div className="rounded-md py-0.5 px-1 hover:bg-gray-200">
                  <EditIcon fontSize="small" />
                </div>
                <div className="rounded-md py-0.5 px-1 hover:bg-gray-200">
                  <DeleteIcon fontSize="small" />
                </div>
                <div className="rounded-md py-0.5 px-1 hover:bg-gray-200">
                  <VisibilityOffIcon fontSize="small" />
                </div>
              </div>
            )}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default ProductCard
