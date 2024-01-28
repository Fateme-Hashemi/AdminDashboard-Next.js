import Link from "next/link";


const Homepage = () => {
  return (
   <>
    <div className="home">Homepage</div>
    <Link href='/dashboard' className="link">Go To Dashboard</Link>
   </>
  );
}

export default Homepage;
