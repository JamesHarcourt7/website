import { ReactNode } from "react"
import { IconType } from "react-icons"
import { RiGithubFill, RiInstagramLine, RiLinkedinFill } from "react-icons/ri"

const socials: {
    name: string,
    url: string,
    icon: IconType
}[] = [
    {
        name: "Github",
        url: "https://github.com/JamesHarcourt7/",
        icon: RiGithubFill
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jamesharcourt7",
        icon: RiLinkedinFill
    },
    {
        name: "Instagram",
        url: "https://www.instagram.com/james__harcourt/",
        icon: RiInstagramLine
    }
]

export default socials