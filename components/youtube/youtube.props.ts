import { BoxProps } from "@chakra-ui/react"

export interface YouTubeProps extends BoxProps {
    video: string
    width: number
    height: number
    thumbnailQuality?: 'default' | 'hqdefault' | 'mqdefault' | 'sddefault'
}