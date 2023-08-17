export const getServerSideProps = async ({ res, query }) => {
  if (query.id) {
    res.writeHead(301, {
      Location: `https://www.ayazona.com/merchant/${query.id}`,
    });
  } else {
    res.writeHead(302, {
      Location: 'https://www.ayazona.com/404',
    });
  }
  res.end();

  return { props: {} };
};

const SomePage = () => <></>;

export default SomePage;
