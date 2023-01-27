import { createStitches } from "@stitches/react";

export const { styled, globalCss, getCssText, theme } = createStitches({
    theme: {
        colors: {
            title: "#E7EDF4",
            text: "#AFC2D4",
            primaryShape: "#0B1B2B",
            secundaryShape: "#0D253F",
            background: "#071422",
            grand: "#3294f8",
            span:"#7b96b2"

        },
        fonts: {
            default: "Nunito,",
            
        },
    }
});