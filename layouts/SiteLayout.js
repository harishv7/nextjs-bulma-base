import Header from '../components/Header';

function SiteLayout(props) {
  return (
    <>
      <Header title={props.title} />
      {props.children}
    </>
  );
}
export default SiteLayout;
