/** @jsx jsx */
import { Box, Link, Flex, jsx, useColorMode } from "theme-ui";

const Footer = () => {
  const [colorMode] = useColorMode();
  const isDark = colorMode === `dark`;

  return (
    <Box as="footer" variant="layout.footer">
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        {` `}
        <Link
          aria-label="Link to the theme's GitHub repository"
          sx={{ ml: 2 }}
          href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-emma"
        >
          <Theme11></Theme11>
        </Link>
        <div sx={{ mx: 1 }}>by</div>
        {` `}
        <Link
          aria-label="Link to the theme author's website"
          href="https://www.lekoarts.de?utm_source=emma&utm_medium=Theme"
        >
          LekoArts1
        </Link>
      </Flex>
    </Box>
  );
};

export default Footer;
