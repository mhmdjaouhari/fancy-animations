import dynamic from "next/dynamic";

const SplashComponent = dynamic(() => import("../components/splash"));

function Home(props) {
  return <SplashComponent {...props} />;
}

export default Home;
