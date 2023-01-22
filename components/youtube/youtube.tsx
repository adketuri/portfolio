import { Box, IconButton, Image } from "@chakra-ui/react";
import { FC, useRef } from "react";
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

  const onClick = () => {
    const iframe = document.createElement("iframe");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    iframe.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    );
    iframe.style.width = "100%";
    iframe.style.height = "100%";
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
      bg="black"
      ref={divRef}
      position="relative"
      width={width}
      height={height}
      alignContent="center"
      display="table"
      {...props}
    >
      <IconButton
        onClick={onClick}
        variant="ghost"
        aria-label={"Play"}
        icon={<TriangleUpIcon />}
        position="absolute"
        alignSelf="center"
        top={height / 2}
        left={0}
        right={0}
        marginLeft="auto"
        marginRight="auto"
        width={10}
        transform="rotate(90deg) scale(5)"
      />
      <Image
        objectFit="cover"
        onClick={onClick}
        loading="lazy"
        src={`https://img.youtube.com/vi/${video}/${thumbnailQuality}.jpg`}
        alt="YouTube Video Thumbnail"
        className="shadow"
        height="100%"
      />
    </Box>
  );
};
