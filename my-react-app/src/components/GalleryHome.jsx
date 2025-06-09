import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const images = [
  "../public/images/shirtimages/shirt1-1.png",
  "../public/images/shirtimages/shirt2-1.png",
  "../public/images/shirtimages/shirt3-1.png",
  "../public/images/shirtimages/shirt4-1.png",
  "../public/images/shirtimages/shirt5-1.png",
  "../public/images/shirtimages/shirt6-1.png",
  "../public/images/shirtimages/shirt7-1.png",
  "../public/images/shirtimages/shirt8-1.png",
];

const GalleryHome = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className="motherdivgalleryhome "
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.2 },
        },
      }}
    >
      <div className="homegallery py-10 px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <img
                className="h-auto max-w-full rounded-lg"
                src={src}
                alt={`gallery image ${index + 1}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default GalleryHome;
