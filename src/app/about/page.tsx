export default function AboutPage() {
  return (
    <div className="container w-11/12 mx-auto mt-5 box-border">
      <h1 className="text-2xl font-bold mb-5">About</h1>
      <p className="text-lg">
        This project implements the use of NextAuth.js authentication, using
        JWT, cookies and a backend API that uses mongoose for user storage and
        bcrypt for password encryption.
        <p>Technologies used in this project:</p>
        <li>Next.js</li>
        <li>NextAuth.js</li>
        <li>MongoDB</li>
        <li>Tailwind CSS</li>
        <li>Bcrypt</li>
      </p>
    </div>
  );
}
