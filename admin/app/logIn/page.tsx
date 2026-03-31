import SignIn from "./signIn/page";

const SignPage = () => {
  return (
    <main className="min-h-screen w-full p-10">
      <SignIn />
    </main>
  );
};
export default SignPage;
export const LoginImage = () => {
  return (
    <div className="max-w-xl h-full">
      <img
        src="/signin.png"
        alt="sign In image"
        className="object-cover w-full h-full shrink-0"
      />
    </div>
  );
};
