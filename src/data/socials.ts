import { IconType } from "react-icons"
import { RiGithubFill, RiInstagramLine, RiLinkedinFill, RiSpotifyFill } from "react-icons/ri"

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
    },
    {
        name: "Spotify",
        url: "https://open.spotify.com/user/4ln1a16kltr4ayo96vay4d68c?si=4edb49b2da624f11",
        icon: RiSpotifyFill
    }
]

export default socials