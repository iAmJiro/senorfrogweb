import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const images = [
  "crowd.jpg",
  "public/431946070_18392579269078691_1116422623929486316_n.jpg",
  "public/396314341_180883701743865_5099227960204058975_n.jpg",
  "public/445359299_18404994271078691_1589283172037968775_n.jpg",
  "public/447594800_18406132345078691_8101545124749734870_n.jpg",
  "public/379586008_151535684678667_2712028302445206015_n.jpg",
  "public/454743678_351398634692370_7735284383617932701_n.jpg",
  "public/392885009_168487586316810_4619776564053201971_n.jpg",
  "public/452551449_18414693244078691_6256823589942776058_n.jpg",
  "public/449655951_18410921017078691_3306497815736442749_n.jpg",
  "public/428027090_18384784174078691_6688384726961890193_n.jpg",
  "public/370391783_138219832676919_470360915604256862_n.jpg",
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
