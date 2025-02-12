import logo from "../../assets/images/logo.svg";

export default function Login() {
    return (
        <>
            <section className="grid place-items-center h-screen login-signup-bg">
                <div className="container mx-auto flex justify-center items-center">
                    <div className="bg-white px-6 py-20 max-w-[560px] grow rounded-2xl text-center">
                        <img
                            src={logo}
                            alt="Logo"
                            className="max-w-full mx-auto mb-[60px]"
                        />

                        <h2 className="text-dark-1 text-[32px] font-bold leading-[1.4]">
                            Welcome to RentMetrics.
                        </h2>
                    </div>
                </div>
            </section>
        </>
    );
}
