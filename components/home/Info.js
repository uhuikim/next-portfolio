import Image from "next/image";
import Link from "next/link";
import React from "react";
import Animation from "./Animation";

const data = [
    { title: "html5", href: "/asset/html5.png", width: 100, height: 100 },
    { title: "css3", href: "/asset/css3.png", width: 65, height: 98 },
    { title: "javascript", href: "/asset/javascript.png", width: 70, height: 70 },
    { title: "typescript", href: "/asset/typescript.png", width: 70, height: 70 },
    { title: "react", href: "/asset/react.png", width: 100, height: 40 },
    { title: "sass", href: "/asset/sass.png", width: 40, height: 40 },
    { title: "redux", href: "/asset/redux.png", width: 80, height: 80 },
    { title: "styled-components", href: "/asset/styled-components.png", width: 80, height: 80 },
    { title: "reactQuery", href: "/asset/reactQuery.png", width: 80, height: 80 },
    { title: "next", href: "/asset/next.png", width: 80, height: 80 },
    { title: "eslint", href: "/asset/eslint.png", width: 80, height: 80 },
    { title: "prettier", href: "/asset/prettier.png", width: 80, height: 80 },
    { title: "storybook", href: "/asset/storybook.png", width: 80, height: 80 },
];
const Info = () => {
    return (
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        프론트엔드 개발자
                        <br className="hidden lg:inline-block" />
                        김우희입니다.
                    </h1>
                    <p className="mb-8 leading-relaxed">안녕하세요. 프론트엔드 개발자 김우희입니다.</p>
                    {/* <div className="flex flex-wrap justify-center">
                        {data.map((el) => (
                            <div className="flex flex-col justify-center items-center" key={el.title}>
                                <Image src={el.href} alt="logo" width={el.width} height={el.height} />
                                <p className="text-white"> {el.title}</p>
                            </div>
                        ))}
                    </div> */}

                    <div className="flex justify-center">
                        <Link href="/project">
                            <a className="btn-project">프로젝트 보러가기</a>
                        </Link>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <Animation />
                </div>
            </div>
        </section>
    );
};

export default Info;
