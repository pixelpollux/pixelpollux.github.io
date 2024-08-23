import { useMediaQuery } from "@uidotdev/usehooks";

export default function useMediaQueries() {

    const isMobile = useMediaQuery("only screen and (max-width: 567px)");
    const isSmallTablet = useMediaQuery("only screen and (min-width: 568px) and (max-width : 811px)");
    const isBigTablet = useMediaQuery("only screen and (min-width: 812px) and (max-width : 1023px)");
    const isDesktopOrLaptop = useMediaQuery("only screen and (min-width: 1024px) and (max-width : 1439px)");
    const isBigScreen = useMediaQuery("only screen and (min-width: 1400px)");
    
    return {isMobile, isSmallTablet, isBigTablet, isDesktopOrLaptop, isBigScreen};
}