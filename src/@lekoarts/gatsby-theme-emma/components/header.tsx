/** @jsx jsx */
import { Box, Flex, jsx, useColorMode } from "theme-ui";
import { Link } from "gatsby";
import Navigation from "./navigation";
import SocialLinks from "./social-links";

type HeaderProps = {
  meta: {
    [key: string]: string;
  };
  nav: {
    title: string;
    slug: string;
  }[];
};

const Header = ({ meta, nav }: HeaderProps) => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = (e: React.SyntheticEvent) => {
    setColorMode(isDark ? `light` : `dark`);
  };


  const navEmpty = nav.length === 0;

  return (
    <Flex style={{position: "sticky", top: 0, zIndex: `99`, boxShadow: `0 3px 12px rgb(0 0 0 / 7%), 0 1px 4px rgb(0 0 0 / 7%)`, backgroundColor: `#ffffff` }} as="header" variant="layout.header">
      {!navEmpty && <Navigation nav={nav} />}
      <Flex
        sx={{
          fontWeight: `bold`,
          fontSize: 3,
          flex: navEmpty ? 1 : [`1 0 50%`, 1],
          justifyContent: navEmpty ? `flex-start` : [`flex-end`, `center`],
        }}
      >
        <Link
          aria-label={`${meta.siteTitle}, Back to homepage`}
          sx={(t) => ({
            ...t.styles?.a,
            color: `#000000`,
            ":hover": { color: `primary`, textDecoration: `none` },
          })}
          to="/"
        >
          {meta.siteTitle}
        </Link>
      </Flex>
      <div
        sx={{
          a: {
            fontSize: 4,
            color: `text`,
            display: `flex`,
            alignItems: `center`,
            "&:hover": {
              color: `primary`,
            },
            "&:not(:first-of-type)": {
              ml: 2,
            },
          },
          justifyContent: `flex-end`,
          flex: 1,
          display: `flex`,
          order: 3,
        }}
      >
        {/* <button
          sx={{ variant: `buttons.toggle`, fontWeight: `semibold` }}
          onClick={toggleColorMode}
          type="button"
          aria-label="Toggle dark mode"
        >
          {isDark ? `Light` : `Dark`}
        </button> */}
      </div>
    </Flex>
  );
};

export default Header;
