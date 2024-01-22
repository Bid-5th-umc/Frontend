import React from 'react'
import '../Common/Common.css'
import CategoryCom from './CategoryCom';

const CategoryBar = () => {
  const categoryData = [
    { id: "/", name: "DESIGNERS" },
    { id: "/", name: "MENSWEAR" },
    { id: "/", name: "WOMENSWEAR" }
  ];

  return (
    <div className='categoryBar'>
      <CategoryCom
        PageUrl={categoryData[0].id}
        CategoryName={categoryData[0].name}
      />
      <CategoryCom
        PageUrl={categoryData[1].id}
        CategoryName={categoryData[1].name}
      />
      <CategoryCom
        PageUrl={categoryData[2].id}
        CategoryName={categoryData[2].name}
      />
    </div>
  )
}

export default CategoryBar