import * as React from "react"
import type {SVGProps} from "react";

interface Props extends SVGProps<SVGSVGElement> {
    backgroundcolor: string,
    logocolor: string
}

const BrandLogoSvg = (props: Props) => (
    // biome-ignore lint/a11y/noSvgWithoutTitle: <explanation>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        overflow="visible"
        viewBox="0 0 23.51 23.51"
        {...props}
    >
        <path
            d="M4.269 23.51A4.269 4.269 0 0 1 0 19.241V4.269A4.269 4.269 0 0 1 4.269 0h14.972a4.269 4.269 0 0 1 4.269 4.269v14.972a4.269 4.269 0 0 1-4.269 4.269Z"
        />
        <path
            fill={props.backgroundcolor ?? "#FFF"}
            d="M4.269 23.51A4.269 4.269 0 0 1 0 19.241V4.269A4.269 4.269 0 0 1 4.269 0h14.972a4.269 4.269 0 0 1 4.269 4.269v14.972a4.269 4.269 0 0 1-4.269 4.269Z"
        />
        <path
            fill={props.logocolor ?? "#FFF"}
            d="M4.825 10.799c5.049-.019 8.111-.564 9.995-5.717a.295.295 0 0 0-.256-.394c-2.871-.209-5.13-.426-6.912.361-1.816.801-3.042 2.587-3.122 5.453a.292.292 0 0 0 .295.297ZM4.825 12.551c5.049.019 8.111.565 9.995 5.717a.295.295 0 0 1-.256.394c-2.871.209-5.13.426-6.912-.361-1.816-.801-3.042-2.586-3.122-5.453a.293.293 0 0 1 .295-.297ZM15.573 8.374a.3.3 0 0 1 .538-.003l.74 1.462c.206.407.539.736.948.937l1.354.667a.3.3 0 0 1-.007.543l-1.295.593a2.11 2.11 0 0 0-1.013.987l-.725 1.48a.3.3 0 0 1-.541-.003l-.697-1.458a2.1 2.1 0 0 0-1.031-1.009l-1.302-.59a.3.3 0 0 1-.007-.544l1.361-.661c.42-.204.76-.542.967-.961Z"
        />
    </svg>
)
export default BrandLogoSvg
