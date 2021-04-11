import Head from "next/head";

export const SEO = () => {
  return (
    <Head>
      <title>The Shop @ 160</title>
      <link
        rel="preload"
        href="https://cdn.jsdelivr.net/gh//GypsyDangerous/simple-css-reset/reset.css"
        as="style"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/gh//GypsyDangerous/simple-css-reset/reset.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
        rel="preload"
        as="style"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};
