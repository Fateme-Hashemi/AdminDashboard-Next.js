import Link from "next/link";


const Homepage = () => {
  return (
   <>
    <div className="home">Homepage</div>
    <Link href='/dahboard' className="link">Go To Dashboard</Link>
   </>
  );
}

export default Homepage;
