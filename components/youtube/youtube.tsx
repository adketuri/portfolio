import { Box, IconButton, Image } from "@chakra-ui/react";
import { FC, useEffect, useLayoutEffect, useRef, useState } from "react";
import { YouTubeProps } from "./youtube.props";
import { TriangleUpIcon } from "@chakra-ui/icons";

export const YouTube: FC<YouTubeProps> = ({
  video,
  width,
  height,
  thumbnailQuality = "default",
  ...props
}) => {
  const divRef = useRef<HTMLDivElement | null>(null);

  const [size, setSize] = useState({ w: 0, h: 0 });
  useEffect(() => {
    const onResize = () => {
      const rect = divRef.current?.getBoundingClientRect();
      if (!rect) return;
      if (rect.width > 0) {
        setSize({ w: rect.width, h: rect.height });
      } else {
        setSize({ w: width, h: height });
      }
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const onClick = () => {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    iframe.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    );
    iframe.style.width = size.w + "px";
    iframe.style.height = size.h + "px";
    iframe.setAttribute(
      "src",
      `https://www.youtube.com/embed/${video}?rel=0&showinfo=1&autoplay=1`
    );
    if (divRef.current) {
      divRef.current.innerHTML = "";
      divRef.current.appendChild(iframe);
    }
  };

  return (
    <Box
      // bg="black"
      ref={divRef}
      position="relative"
      alignContent="center"
      display="table"
      {...props}
    >
      {size.w > 0 && (
        <IconButton
          onClick={onClick}
          variant="unstyled"
          aria-label={"Play"}
          icon={<TriangleUpIcon color="white" />}
          top={size.h / 2 - 0}
          left={size.w / 2 - 10}
          transform="rotate(90deg) scale(5)"
        />
      )}
      <Image
        objectFit="cover"
        onClick={onClick}
        loading="lazy"
        src={`https://img.youtube.com/vi/${video}/${thumbnailQuality}.jpg`}
        alt="YouTube Video Thumbnail"
        className="shadow"
      />
    </Box>
  );
};
