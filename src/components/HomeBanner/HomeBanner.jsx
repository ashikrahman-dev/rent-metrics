import { Link } from "react-router-dom";

import homeBannerImg from "../../assets/images/home-banner-dashboard-img.svg";

export default function HomeBanner() {
    return (
        <>
            <section className="login-signup-bg pt-20 xl:pb-[458px] lg:pb-[358px]  md:pb-[238px] sm:pb-[168px] pb-[120px]">
                <div className="container mx-auto">
                    <div className="2xl:max-w-[1020px] xl:max-w-[740px] mx-auto text-center">
                        <h1 className="2xl:text-[64px] xl:text-5xl lg:text-4xl md:text-3xl text-2xl text-dark-1 font-bold leading-[1.4] mb-4">
                            Asset Intelligence for Smarter Real Estate Decisions
                        </h1>
                        <p className="text-dark-2 xl:text-lg md:text-base text-sm leading-[1.3]">
                            Harness the Power of AI-Driven Insights to Optimize
                            your Portfolio
                        </p>
                        <div className="md:mt-10 mt-6 mb-4">
                            <Link
                                to=""
                                className="xl:text-base text-sm xl:px-6 lg:px-5 px-4 xl:py-[14px] lg:py-3 py-2.5 bg-main rounded-lg text-white font-black transition-colors duration-200 hover:bg-white hover:text-main inline-block cursor-pointer"
                            >
                                Request a Demo
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container mx-auto xl:-mt-[400px] lg:-mt-[300px] md:-mt-[200px] sm:-mt-[140px] -mt-[100px]">
                <img
                    src={homeBannerImg}
                    alt="Banner Image"
                    className="max-w-full"
                />
            </div>
        </>
    );
}
