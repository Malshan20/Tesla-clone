import Link from "next/link"
import { JSX, SVGProps } from "react"

function CheckIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
        <header className="mt-4">
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
        </header>
    )
}

export default function ModelYExplore() {
    return (
        <div>
            <Link href="/" className="text-black">
                <svg className="h-3" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h24v27.9h11.3V7h24.2a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8v14.1h11.3V20.8h24.2v14.1h11.3V20.8h24.2V7H78.3a9.6 9.6 0 0 0 7 7z" fill="currentColor"/>
                </svg>
            </Link>
            <div className="flex flex-col min-h-[100dvh]">
                <section className="relative w-full h-[80vh] overflow-hidden">
                    <img
                        src="/placeholder.svg"
                        alt="Tesla Model Y"
                        className="w-full h-full object-cover object-center"
                        width={1920}
                        height={1080}
                        style={{ aspectRatio: "1920/1080", objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
                        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">Tesla Model Y</h1>
                        <p className="mt-4 text-lg sm:text-xl max-w-2xl">
                            Designed for efficiency, performance, and style, the Tesla Model Y is the ultimate electric SUV.
                        </p>
                        <div className="mt-8 flex gap-4">
                            <Link
                                href="#"
                                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                prefetch={false}
                            >
                                Explore Now
                            </Link>
                            <Link
                                href="#"
                                className="inline-flex items-center justify-center rounded-md border border-white px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white hover:text-primary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                                prefetch={false}
                            >
                                Book a Test Drive
                            </Link>
                        </div>
                    </div>
                </section>
                <section className="py-24 bg-background">
                    <div className="container">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                                <img
                                    src="/placeholder.svg"
                                    alt="Tesla Model Y Exterior"
                                    className="w-full h-auto rounded-lg"
                                    width={800}
                                    height={600}
                                    style={{ aspectRatio: "800/600", objectFit: "cover" }}
                                />
                            </div>
                            <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
                                <h2 className="text-3xl font-bold mb-4">Exterior Design</h2>
                                <p className="text-muted-foreground">
                                    The Tesla Model Y features a sleek, aerodynamic design that maximizes efficiency and performance. With
                                    clean lines and a bold, distinctive silhouette, the Model Y stands out on the road.
                                </p>
                                <ul className="mt-6 space-y-4">
                                    <li className="flex items-center">
                                        <CheckIcon className="w-6 h-6 mr-2 text-primary" />
                                        <span>Optimized aerodynamics for maximum efficiency</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon className="w-6 h-6 mr-2 text-primary" />
                                        <span>Sleek, modern design with a low drag coefficient</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon className="w-6 h-6 mr-2 text-primary" />
                                        <span>Distinctive LED headlights and taillights</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-24 bg-muted">
                    <div className="container">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                                <h2 className="text-3xl font-bold mb-4">Interior Design</h2>
                                <p className="text-muted-foreground">
                                    The Tesla Model Y's interior is designed with comfort, style, and functionality in mind. From the
                                    premium materials to the advanced technology, every detail has been carefully considered.
                                </p>
                                <ul className="mt-6 space-y-4">
                                    <li className="flex items-center">
                                        <CheckIcon className="w-6 h-6 mr-2 text-primary" />
                                        <span>Spacious and versatile cabin layout</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon className="w-6 h-6 mr-2 text-primary" />
                                        <span>High-quality, sustainable materials throughout</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon className="w-6 h-6 mr-2 text-primary" />
                                        <span>Advanced climate control and air filtration system</span>
                                    </li>
                                </ul>
                            </div>
                            <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
                                <img
                                    src="/placeholder.svg"
                                    alt="Tesla Model Y Interior"
                                    className="w-full h-auto rounded-lg"
                                    width={800}
                                    height={600}
                                    style={{ aspectRatio: "800/600", objectFit: "cover" }}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-24 bg-background">
                    <div className="container">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                                <img
                                    src="/placeholder.svg"
                                    alt="Tesla Model Y Technology"
                                    className="w-full h-auto rounded-lg"
                                    width={800}
                                    height={600}
                                    style={{ aspectRatio: "800/600", objectFit: "cover" }}
                                />
                            </div>
                            <div data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
                                <h2 className="text-3xl font-bold mb-4">Advanced Technology</h2>
                                <p className="text-muted-foreground">
                                    The Tesla Model Y is equipped with cutting-edge technology that enhances the driving experience and
                                    keeps you connected.
                                </p>
                                <ul className="mt-6 space-y-4">
                                    <li className="flex items-center">
                                        <CheckIcon className="w-6 h-6 mr-2 text-primary" />
                                        <span>Responsive, high-resolution touchscreen display</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon className="w-6 h-6 mr-2 text-primary" />
                                        <span>Integrated navigation and voice control</span>
                                    </li>
                                    <li className="flex items-center">
                                        <CheckIcon className="w-6 h-6 mr-2 text-primary" />
                                        <span>Over-the-air software updates for continuous improvement</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}