import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid className="w-full py-20">
            {gridItems.map(
                // if it is not sure whether it exist or not
                ({
                    title, id, description, className, imgClassName, titleClassName, img, spareImg
                }) => (
                    <BentoGridItem
                        id={id}
                        key={id}
                        title={title}
                        description={description}
                        className={className}
                        imgClassName={imgClassName}
                        titleClassName={titleClassName}
                        img={img}
                        spareImg={spareImg}
                    />
                )
            )}
        </BentoGrid>
    </section>
  )
}

export default Grid